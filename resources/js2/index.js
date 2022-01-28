import el from "./el";

import CsrfUpdater from "./http/csrfUpdater";

import TopDropMenuFiller from "./topDropMenuFiller";

import AuthAbsoluteMenu from "./auth/authAbsoluteMenu";
import AbsoluteFlashMessage from "./absoluteFlashMessage";
import PasswordTypeChanger from "./auth/passwordTypeChanger";

import FavoriteProductsIndicationOnPageLoad from "./favoriteProducts/favoriteProductsIndicationOnPageLoad";
import FavoriteProductsTotalCountIndication from "./favoriteProducts/favoriteProductsTotalCountIndication"
import FavoriteProductsSwitcher from "./favoriteProducts/favoriteProductsSwitcher";

import CategoryCache from "./categorySource/categoryCache";
import ProductCache from "./productSource/productCache";
import ViewedProductsAppender from "./viewedProducts/viewedProductsAppender";
import SingleProductQuickViewer from "./productQuickViewer/singleProductQuickViewer";
import singleProductKit from "./productSingle/singleProductKit";

import ViewedProductsSummaryMaker from "./viewedProducts/viewedProductsSummaryMaker";




import SearchSettingsStore from "./productSource/searchSettingsStore";
import SearchUrlMaker from "./urlMaker/searchUrlMaker";
import PublicUrlMaker from "./urlMaker/publicUrlMaker";
import FilterOfCachedProducts from "./productSource/FilterOfCachedProducts";
import SourceOfFilteredProducts from "./productSource/SourceOfFilteredProducts";

import MenuLinkCssMaker from "./menu/menuLinkCssMaker";

import RendererOfProductsByViewMoreButton from "./productList/rendererByViewMoreButton";
import RendererOfProductsByPaginationButton from "./productList/rendererByPaginationButton";
import RendererOfProductsByMenuLink from "./productList/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./productList/rendererOfViewedProductsByLink";
import RendererOfPaginationBlock from "./productList/rendererOfPaginationBlock";


import ProductFilter from "./productList/productFilter/absoluteProductFilter";


new CsrfUpdater();

new TopDropMenuFiller();




// const indicatorOfFavoriteProducts = new FavoriteProductsIndicationOnPageLoad();

if (el('#productList') || el('#singleProduct')) {
    new FavoriteProductsIndicationOnPageLoad();
    new FavoriteProductsSwitcher();
}
new FavoriteProductsTotalCountIndication(); // не менять порядок



if (el('#singleProduct')) {
    singleProductKit();
}



const viewedProductsSummaryMaker = new ViewedProductsSummaryMaker();
if (el('#productList') || el('#viewedProductsSummaryWrapper'))  {

    const productCache = new ProductCache();
    const viewedProductsAppender = new ViewedProductsAppender();

    new SingleProductQuickViewer({
        productCache,
        viewedProductsAppender,
        viewedProductsSummaryMaker,
    });


    if (el('#productList')) {
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

        const rendererOfPaginationBlock = new RendererOfPaginationBlock({
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

        if (el('.filter_icon__wrapper')) {
            const categoryCache = new CategoryCache();
            new ProductFilter({
                productCache,
                categoryCache,
            });
        }

    }
}







if (el('.personal_account__icon')) {
    new AuthAbsoluteMenu({ clickSourceSelector: '.personal_account__icon' });
}

if (el('#flashMessage')) {
    new AbsoluteFlashMessage(el('#flashMessage').innerText);
}

if (el('.auth_page__change_password_type__wrapper')) {
    new PasswordTypeChanger({
        closedEyeSelector: ".auth_page__closed_eye_img",
        openedEyeSelector: ".auth_page__opened_eye_img",
        passwordInputSelector: "#password",
    });
}
