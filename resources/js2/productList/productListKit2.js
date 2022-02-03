import el from "../el";

import CategoryCache from "../categorySource/categoryCache";
import SearchSettingsStore from "../settings/searchSettingsStore";
import SortSettingsStore from "../settings/sortSettingsStore";
import SearchSettingsSetterOnPageLoad from "../settings/setSearchSettingsOnPageLoad";
import ProductCache from "../productSource/productCache";
import SearchUrlMaker from "../urlMaker/searchUrlMaker";
import PublicUrlMaker from "../urlMaker/publicUrlMaker";
import SorterOfCachedProducts from "../productSource/sorterOfCachedProducts";
import FilterOfCachedProducts from "../productSource/filterOfCachedProducts";
import ViewedProductsSummaryMaker from "../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "../productQuickViewer/singleProductQuickViewer";
import SourceOfFilteredProducts from "../productSource/SourceOfFilteredProducts";
import RendererOfProductsByViewMoreButton from "./listRenderers/rendererByViewMoreButton";
import PaginationBlockRenderer from "./paginationRenderer/paginationBlockRenderer";
import RendererOfProductsByPaginationButton from "./listRenderers/rendererByPaginationButton";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";
import RendererOfProductsByMenuLink from "./listRenderers/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import SortMenuRenderer from "./productSorter/productSortMenuRenderer";
import RendererBySortSettings from "./listRenderers/rendererBySortSettings";
import SearchSettingsObserverForProductFilterRenderer
    from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";

export default function productListKit2() {

    const app = {
        categoryCache: new CategoryCache(),
        productCache: new ProductCache(),

        searchSettingsStore: new SearchSettingsStore(),
        sortSettingsStore: new SortSettingsStore(),

        searchUrlMaker: new SearchUrlMaker({searchSettingsStore: null, sortSettingsStore: null}),
        publicUrlMaker: new PublicUrlMaker({searchSettingsStore: null, sortSettingsStore: null}),

        sorterOfCachedProducts: new SorterOfCachedProducts(null),
        filterOfCachedProducts: new FilterOfCachedProducts(null),
        // -------------------------------------------------------

        viewedProductsSummaryMaker: new ViewedProductsSummaryMaker(),
        viewedProductsAppender: new ViewedProductsAppender(),
        singleProductQuickViewer: new SingleProductQuickViewer({
            productCache: null,
            viewedProductsAppender: null,
            viewedProductsSummaryMaker: null,
        }),
        // -------------------------------------------------------

        sourceOfFilteredProducts: new SourceOfFilteredProducts({
            productCache: null,
            searchUrlMaker: null,
            sorterOfCachedProducts: null,
            filterOfCachedProducts: null,
            searchSettingsStore: null,
        }),

        rendererOfProductsByViewMoreButton: new RendererOfProductsByViewMoreButton({
            searchSettingsStore: null,
            publicUrlMaker: null,
            sourceOfFilteredProducts: null,
        }),


        rendererOfPaginationBlock: new PaginationBlockRenderer({
            searchSettingsStore: null,
            publicUrlMaker: null,
        }),


        rendererOfProductsByPaginationButton: new RendererOfProductsByPaginationButton({
            searchSettingsStore: null,
            publicUrlMaker: null,
            sourceOfFilteredProducts: null,
            rendererOfPaginationBlock: null,
        }),

        menuLinkCssMaker: new MenuLinkCssMaker({
            searchSettingsStore: null,
        }),


        rendererOfProductsByMenuLink: new RendererOfProductsByMenuLink({
            sourceOfFilteredProducts: null,
            searchSettingsStore: null,
            publicUrlMaker: null,
            rendererOfPaginationBlock: null,
            menuLinkCssMaker: null,
        }),

        rendererOfViewedProductsByLink: new RendererOfViewedProductsByLink({
            sourceOfFilteredProducts: null,
            searchSettingsStore: null,
            publicUrlMaker: null,
            rendererOfPaginationBlock: null,
            menuLinkCssMaker: null,
        }),

        // -----------------------------------------

        sortMenuRenderer: new SortMenuRenderer({sortSettingsStore: null}),

        rendererBySortSettings: new RendererBySortSettings({
            sourceOfFilteredProducts: null,
            sortSettingsStore: null,
            searchSettingsStore: null,
            publicUrlMaker: null,
        }),
        // -----------------------------------------

        searchSettingsObserverForFilterRenderer: new SearchSettingsObserverForProductFilterRenderer({
            searchSettingsStore: null,
            categoryCache: null,
        }),


        productFilterRenderer: new ProductFilterRenderer({
            productCache: null,
            categoryCache: null,
            searchSettingsStore: null,
            searchSettingsObserver: null, //searchSettingsObserverForFilterRenderer,
        }),

        totalIndicatorOfFilterParameters: new TotalIndicatorOfFilterParameters({
            searchSettingsStore: null,
        }),

        topTotalSearchParametersRenderer: new TopTotalSearchParametersRenderer({
            searchSettingsStore: null,
            categoryCache: null,
        }),

        rendererBySearchSettings: new RendererBySearchSettings({
            sourceOfFilteredProducts: null,
            searchSettingsStore: null,
            publicUrlMaker: null,
            menuLinkCssMaker: null,
        }),


        // при загрузке страницы с сервера с поисковыми параметрами в url
        searchSettingsSetterOnPageLoad: new SearchSettingsSetterOnPageLoad({
            categoryCache: null,
            searchSettingsStore: null,
            rendererBySearchSettings: null,
        }),
    };


    for (let prop in app) {
        if (app.hasOwnProperty(prop)) {
            app[prop].setAppRef(app);
        }
    }


    app.sortSettingsStore.addObserver(app.rendererBySortSettings);
    app.searchSettingsStore.addObserver(app.searchSettingsObserverForFilterRenderer);
    app.searchSettingsStore.addObserver(app.totalIndicatorOfFilterParameters);
    app.searchSettingsStore.addObserver(app.topTotalSearchParametersRenderer);
    app.searchSettingsStore.addObserver(app.rendererBySearchSettings);
}

