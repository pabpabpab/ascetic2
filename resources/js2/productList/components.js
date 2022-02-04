import CategoryCache from "../categorySource/categoryCache";
import ProductCache from "../productSource/productCache";
import SearchSettingsStore from "../settings/searchSettingsStore";
import SortSettingsStore from "../settings/sortSettingsStore";
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
import RendererOfProductsByMenuLink from "./listRenderers/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";
import RendererBySortSettings from "./listRenderers/rendererBySortSettings";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";
import SortMenuRenderer from "./productSorter/productSortMenuRenderer";
import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import SearchSettingsObserverForProductFilterRenderer
    from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";
import SearchSettingsSetterOnPageLoad from "../settings/setSearchSettingsOnPageLoad";

export default {
    categoryCache: new CategoryCache(),
    productCache: new ProductCache(),

    searchSettingsStore: new SearchSettingsStore(),
    sortSettingsStore: new SortSettingsStore(),

    searchUrlMaker: new SearchUrlMaker(),
    publicUrlMaker: new PublicUrlMaker(),

    sorterOfCachedProducts: new SorterOfCachedProducts(),
    filterOfCachedProducts: new FilterOfCachedProducts(),
    // -------------------------------------------------------

    viewedProductsSummaryMaker: new ViewedProductsSummaryMaker(),
    viewedProductsAppender: new ViewedProductsAppender(),
    singleProductQuickViewer: new SingleProductQuickViewer(),
    // -------------------------------------------------------

    sourceOfFilteredProducts: new SourceOfFilteredProducts(),

    rendererOfProductsByViewMoreButton: new RendererOfProductsByViewMoreButton(),
    rendererOfPaginationBlock: new PaginationBlockRenderer(),
    rendererOfProductsByPaginationButton: new RendererOfProductsByPaginationButton(),
    rendererOfProductsByMenuLink: new RendererOfProductsByMenuLink(),
    rendererOfViewedProductsByLink: new RendererOfViewedProductsByLink(),
    rendererBySearchSettings: new RendererBySearchSettings(),
    rendererBySortSettings: new RendererBySortSettings(),

    menuLinkCssMaker: new MenuLinkCssMaker(),
    // -----------------------------------------

    sortMenuRenderer: new SortMenuRenderer(),
    // -----------------------------------------

    productFilterRenderer: new ProductFilterRenderer(),
    searchSettingsObserverForFilterRenderer: new SearchSettingsObserverForProductFilterRenderer(),
    totalIndicatorOfFilterParameters: new TotalIndicatorOfFilterParameters(),
    topTotalSearchParametersRenderer: new TopTotalSearchParametersRenderer(),

    // при загрузке страницы с сервера с поисковыми параметрами в url
    searchSettingsSetterOnPageLoad: new SearchSettingsSetterOnPageLoad(),
}
