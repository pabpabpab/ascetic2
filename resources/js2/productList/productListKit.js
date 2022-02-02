import CategoryCache from "../categorySource/categoryCache";
import SearchSettingsStore from "../searchSettings/searchSettingsStore";
import SearchUrlMaker from "../urlMaker/searchUrlMaker";
import PublicUrlMaker from "../urlMaker/publicUrlMaker";
import FilterOfCachedProducts from "../productSource/FilterOfCachedProducts";
import SourceOfFilteredProducts from "../productSource/SourceOfFilteredProducts";
import RendererOfProductsByViewMoreButton from "./listRenderers/rendererByViewMoreButton";
import PaginationBlockRenderer from "./paginationRenderer/paginationBlockRenderer";
import RendererOfProductsByPaginationButton from "./listRenderers/rendererByPaginationButton";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";
import RendererOfProductsByMenuLink from "./listRenderers/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import el from "../el";
import SearchSettingsObserverForProductFilterRenderer
    from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";
import setSearchSettingsOnPageLoad from "../searchSettings/setSearchSettingsOnPageLoad";

export default function productListKit({productCache}) {
    const categoryCache = new CategoryCache(); // оставить здесь
    const searchSettingsStore = new SearchSettingsStore();
    const searchUrlMaker = new SearchUrlMaker(searchSettingsStore);
    const publicUrlMaker = new PublicUrlMaker(searchSettingsStore);
    const filterOfCachedProducts = new FilterOfCachedProducts(searchSettingsStore);

    const sourceOfFilteredProducts = new SourceOfFilteredProducts({
        productCache,
        searchUrlMaker,
        filterOfCachedProducts,
        searchSettingsStore,
    });

    new RendererOfProductsByViewMoreButton({
        searchSettingsStore,
        publicUrlMaker,
        sourceOfFilteredProducts,
    });

    const rendererOfPaginationBlock = new PaginationBlockRenderer({
        searchSettingsStore,
        publicUrlMaker,
    });

    new RendererOfProductsByPaginationButton({
        searchSettingsStore,
        publicUrlMaker,
        sourceOfFilteredProducts,
        rendererOfPaginationBlock,
    });


    const menuLinkCssMaker = new MenuLinkCssMaker({
        searchSettingsStore,
    });

    new RendererOfProductsByMenuLink({
        sourceOfFilteredProducts,
        searchSettingsStore,
        publicUrlMaker,
        rendererOfPaginationBlock,
        menuLinkCssMaker,
    });

    new RendererOfViewedProductsByLink({
        sourceOfFilteredProducts,
        searchSettingsStore,
        publicUrlMaker,
        rendererOfPaginationBlock,
        menuLinkCssMaker,
    });

    if (!el('.filter_icon__wrapper')) {
        return;
    }

    // ----------------------------<при наличии .filter_icon__wrapper>--------------------------
    const searchSettingsObserverForFilterRenderer = new SearchSettingsObserverForProductFilterRenderer({
        searchSettingsStore,
        categoryCache
    });
    searchSettingsStore.addObserver(searchSettingsObserverForFilterRenderer);

    new ProductFilterRenderer({
        productCache,
        categoryCache,
        searchSettingsStore,
        searchSettingsObserver: searchSettingsObserverForFilterRenderer,
    });

    const totalIndicatorOfFilterParameters = new TotalIndicatorOfFilterParameters({
        searchSettingsStore
    });
    searchSettingsStore.addObserver(totalIndicatorOfFilterParameters);

    const topTotalSearchParametersRenderer = new TopTotalSearchParametersRenderer({
        searchSettingsStore,
        categoryCache
    });
    searchSettingsStore.addObserver(topTotalSearchParametersRenderer);


    const rendererBySearchSettings = new RendererBySearchSettings({
        sourceOfFilteredProducts,
        searchSettingsStore,
        publicUrlMaker,
        //rendererOfPaginationBlock,
        menuLinkCssMaker,
    });
    searchSettingsStore.addObserver(rendererBySearchSettings);


    // при загрузке страницы с сервера с поисковыми параметрами в url
    if (el('#productList').dataset.productSectionName === 'serverProductSearch') {
        setSearchSettingsOnPageLoad({
            categoryCache,
            searchSettingsStore,
            rendererBySearchSettings,
        });
    }
    // ---------------------------</при наличии .filter_icon__wrapper>--------------------------
}
