import CategoryCache from "../../categorySource/categoryCache";
import ProductCache from "../../productSource/productCache";
import SearchUrlMaker from "../../urlMaker/searchUrlMaker";
import PublicUrlMaker from "../../urlMaker/publicUrlMaker";
import SorterOfCachedProducts from "../../productSource/sorterOfCachedProducts";
import FilterOfCachedProducts from "../../productSource/filterOfCachedProducts";
import ViewedProductsSummaryMaker from "../../viewedProducts/viewedProductsSummaryMaker";
import ViewedProductsAppender from "../../viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "../../productQuickViewer/singleProductQuickViewer";
import SourceOfFilteredProducts from "../../productSource/sourceOfFilteredProducts";
import RendererOfProductsByViewMoreButton from "../../productList/listRenderers/rendererByViewMoreButton";
import PaginationBlockRenderer from "../../productList/paginationRenderer/paginationBlockRenderer";
import RendererOfProductsByPaginationButton from "../../productList/listRenderers/rendererByPaginationButton";
import RendererOfProductsBySectionLink from "../../productList/listRenderers/rendererBySectionLink";
import RendererOfViewedProductsByLink from "../../productList/listRenderers/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "../../productList/listRenderers/rendererBySearchSettings";
import RendererBySortSettings from "../../productList/listRenderers/rendererBySortSettings";
import RendererByLinkOfOneProductItem from "../../productList/listRenderers/rendererByLinkOfOneProductItem";
import H1Renderer from "../../h1Renderer/h1Renderer";
import CssManager from "../../cssManager/cssManager";
import MenuLinkCssMaker from "../../menu/menuLinkCssMaker";
import ViewMoreButtonManager from "../../productList/viewMoreButton/viewMoreButtonManager";
import HeaderVisibilityManager from "../../productList/headerManager/headerVisibilityManager";
import ProductViewSwitcher from "../../productList/productView/productViewSwitcher";
import SortMenuRenderer from "../../productList/productSorter/productSortMenuRenderer";
import SortMenuVisibilityManager from "../../productList/productSorter/sortMenuVisibilityManager";
import ProductFilterRenderer from "../../productList/productFilter/productFilterRenderer";
import ProductFilterHandler from "../../productList/productFilter/productFilterHandler";
import SearchSettingsObserverForProductFilterRenderer
    from "../../productList/productFilter/searchSettingsObserverForProductFilterRenderer";
import TotalIndicatorOfFilterParameters from "../../productList/productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "../../productList/productFilter/topTotalSearchParametersRenderer";
import SettingsSetterOnPageLoad from "../../settings/settingsSetterOnPageLoad";
import FavoriteProductsIndicationOnPageLoad from "../../favoriteProducts/favoriteProductsIndicationOnPageLoad";
import OrderWindow from "../../orderWindow/orderWindow";
import WaitingScreen from "../../waitingScreen";



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
    cssManager: new CssManager(),
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

    waitingScreen: new WaitingScreen(),
}
