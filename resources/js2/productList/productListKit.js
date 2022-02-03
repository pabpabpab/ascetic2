import el from "../el";

import CategoryCache from "../categorySource/categoryCache";
import SearchSettingsStore from "../settings/searchSettingsStore";
import SortSettingsStore from "../settings/sortSettingsStore";
import setSearchSettingsOnPageLoad from "../settings/setSearchSettingsOnPageLoad";

import SearchUrlMaker from "../urlMaker/searchUrlMaker";
import PublicUrlMaker from "../urlMaker/publicUrlMaker";

import ProductCache from "../productSource/productCache";
import SorterOfCachedProducts from "../productSource/SorterOfCachedProducts";
import FilterOfCachedProducts from "../productSource/filterOfCachedProducts";
import SourceOfFilteredProducts from "../productSource/SourceOfFilteredProducts";

import RendererOfProductsByViewMoreButton from "./listRenderers/rendererByViewMoreButton";
import RendererOfProductsByPaginationButton from "./listRenderers/rendererByPaginationButton";
import RendererOfProductsByMenuLink from "./listRenderers/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";
import RendererBySortSettings from "./listRenderers/rendererBySortSettings";

import PaginationBlockRenderer from "./paginationRenderer/paginationBlockRenderer";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";


import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import SearchSettingsObserverForProductFilterRenderer from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";

import SortMenuRenderer from "./productSorter/productSortMenuRenderer";

import ViewedProductsSummaryMaker from "../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../viewedProducts/viewedProductsAppender";

import SingleProductQuickViewer from "../productQuickViewer/singleProductQuickViewer";


export default function productListKit() {
    const categoryCache = new CategoryCache(); // оставить здесь
    const productCache = new ProductCache();
    const searchSettingsStore = new SearchSettingsStore();
    const sortSettingsStore = new SortSettingsStore();
    const searchUrlMaker = new SearchUrlMaker({searchSettingsStore, sortSettingsStore});
    const publicUrlMaker = new PublicUrlMaker({searchSettingsStore, sortSettingsStore});
    const sorterOfCachedProducts = new SorterOfCachedProducts(sortSettingsStore);
    const filterOfCachedProducts = new FilterOfCachedProducts(searchSettingsStore);


    const viewedProductsSummaryMaker = new ViewedProductsSummaryMaker();
    const viewedProductsAppender = new ViewedProductsAppender();
    new SingleProductQuickViewer({
        productCache,
        viewedProductsAppender,
        viewedProductsSummaryMaker,
    });


    const sourceOfFilteredProducts = new SourceOfFilteredProducts({
        productCache,
        searchUrlMaker,
        sorterOfCachedProducts,
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


    // --------------------------------------------


    if (el('.sorting_modes__wrapper')) {
        new SortMenuRenderer({sortSettingsStore});

        const rendererBySortSettings = new RendererBySortSettings({
            sourceOfFilteredProducts,
            //searchSettingsStore,
            sortSettingsStore,
            searchSettingsStore,
            publicUrlMaker,
            //rendererOfPaginationBlock,
            //menuLinkCssMaker,
        });

        sortSettingsStore.addObserver(rendererBySortSettings);
    }


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
