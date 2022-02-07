import CategoryCache from "../categorySource/categoryCache";
import ProductCache from "../productSource/productCache";
import SearchUrlMaker from "../urlMaker/searchUrlMaker";
import PublicUrlMaker from "../urlMaker/publicUrlMaker";
import SorterOfCachedProducts from "../productSource/sorterOfCachedProducts";
import FilterOfCachedProducts from "../productSource/filterOfCachedProducts";
import ViewedProductsSummaryMaker from "../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "../productQuickViewer/singleProductQuickViewer";
import SourceOfFilteredProducts from "../productSource/sourceOfFilteredProducts";
import RendererOfProductsByViewMoreButton from "./listRenderers/rendererByViewMoreButton";
import PaginationBlockRenderer from "./paginationRenderer/paginationBlockRenderer";
import RendererOfProductsByPaginationButton from "./listRenderers/rendererByPaginationButton";
import RendererOfProductsByMenuLink from "./listRenderers/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";
import RendererBySortSettings from "./listRenderers/rendererBySortSettings";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";
import ViewMoreButtonManager from "./viewMoreButton/viewMoreButtonManager";
import SortMenuRenderer from "./productSorter/productSortMenuRenderer";
import SortMenuVisibilityManager from "./productSorter/sortMenuVisibilityManager";
import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import ProductFilterHandler from "./productFilter/productFilterHandler";
import SearchSettingsObserverForProductFilterRenderer
    from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";
import SettingsSetterOnPageLoad from "../settings/settingsSetterOnPageLoad";


export default {
    categoryCache: new CategoryCache(),
    productCache: new ProductCache(),

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
    viewMoreButtonManager: new ViewMoreButtonManager(),
    // -----------------------------------------

    sortMenuRenderer: new SortMenuRenderer(),
    sortMenuVisibilityManager: new SortMenuVisibilityManager(),
    // -----------------------------------------

    productFilterRenderer: new ProductFilterRenderer(),
    productFilterHandler: new ProductFilterHandler(),
    searchSettingsObserverForFilterRenderer: new SearchSettingsObserverForProductFilterRenderer(),
    totalIndicatorOfFilterParameters: new TotalIndicatorOfFilterParameters(),
    topTotalSearchParametersRenderer: new TopTotalSearchParametersRenderer(),

    // при загрузке страницы с сервера с поисковыми параметрами в url
    settingsSetterOnPageLoad: new SettingsSetterOnPageLoad(),
}
