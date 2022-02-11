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
import RendererOfProductsBySectionLink from "./listRenderers/rendererBySectionLink";
import RendererOfViewedProductsByLink from "./listRenderers/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "./listRenderers/rendererBySearchSettings";
import RendererBySortSettings from "./listRenderers/rendererBySortSettings";
import RendererByLinkOfOneProductItem from "./listRenderers/RendererByLinkOfOneProductItem";
import H1Renderer from "../h1Renderer/h1Renderer";
import MenuLinkCssMaker from "../menu/menuLinkCssMaker";
import ViewMoreButtonManager from "./viewMoreButton/viewMoreButtonManager";
import HeaderVisibilityManager from "./headerManager/headerVisibilityManager";
import ProductViewSwitcher from "./productView/productViewSwitcher";
import SortMenuRenderer from "./productSorter/productSortMenuRenderer";
import SortMenuVisibilityManager from "./productSorter/sortMenuVisibilityManager";
import ProductFilterRenderer from "./productFilter/productFilterRenderer";
import ProductFilterHandler from "./productFilter/productFilterHandler";
import SearchSettingsObserverForProductFilterRenderer
    from "./productFilter/searchSettingsObserverForProductFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productFilter/topTotalSearchParametersRenderer";
import SettingsSetterOnPageLoad from "../settings/settingsSetterOnPageLoad";
import FavoriteProductsIndicationOnPageLoad from "../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import OrderWindow from "../orderWindow/orderWindow";



export default {
    categoryCache: new CategoryCache(),
    productCache: new ProductCache(),

    sorterOfCachedProducts: new SorterOfCachedProducts(),
    filterOfCachedProducts: new FilterOfCachedProducts(),

    sourceOfFilteredProducts: new SourceOfFilteredProducts(),
    // -------------------------------------------------------

    viewedProductsSummaryMaker: new ViewedProductsSummaryMaker(),
    viewedProductsAppender: new ViewedProductsAppender(),
    singleProductQuickViewer: new SingleProductQuickViewer(),
    // -------------------------------------------------------

    rendererOfProductsByViewMoreButton: new RendererOfProductsByViewMoreButton(),
    rendererOfPaginationBlock: new PaginationBlockRenderer(),
    rendererOfProductsByPaginationButton: new RendererOfProductsByPaginationButton(),
    rendererOfProductsBySectionLink: new RendererOfProductsBySectionLink(),
    rendererOfViewedProductsByLink: new RendererOfViewedProductsByLink(),
    rendererBySearchSettings: new RendererBySearchSettings(),
    rendererBySortSettings: new RendererBySortSettings(),
    rendererByLinkOfOneProductItem: new RendererByLinkOfOneProductItem(),
    // -----------------------------------------

    searchUrlMaker: new SearchUrlMaker(),
    publicUrlMaker: new PublicUrlMaker(),
    // -----------------------------------------

    h1Renderer: new H1Renderer(),
    menuLinkCssMaker: new MenuLinkCssMaker(),
    viewMoreButtonManager: new ViewMoreButtonManager(),
    headerVisibilityManager: new HeaderVisibilityManager(),
    sortMenuVisibilityManager: new SortMenuVisibilityManager(),
    // -----------------------------------------

    sortMenuRenderer: new SortMenuRenderer(),
    // -----------------------------------------

    viewSwitcher: new ProductViewSwitcher(),
    // -----------------------------------------

    productFilterRenderer: new ProductFilterRenderer(),
    productFilterHandler: new ProductFilterHandler(),
    searchSettingsObserverForFilterRenderer: new SearchSettingsObserverForProductFilterRenderer(),
    totalIndicatorOfFilterParameters: new TotalIndicatorOfFilterParameters(),
    topTotalSearchParametersRenderer: new TopTotalSearchParametersRenderer(),
    // -----------------------------------------

    orderWindow: new OrderWindow(),
    // -----------------------------------------

    // при загрузке страницы с сервера с поисковыми параметрами в url
    settingsSetterOnPageLoad: new SettingsSetterOnPageLoad(),

    favoriteProductsIndicationOnPageLoad: new FavoriteProductsIndicationOnPageLoad(),


}
