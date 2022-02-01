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




import SearchSettingsStore from "./searchSettings/searchSettingsStore";
import SearchUrlMaker from "./urlMaker/searchUrlMaker";
import PublicUrlMaker from "./urlMaker/publicUrlMaker";
import FilterOfCachedProducts from "./productSource/FilterOfCachedProducts";
import SourceOfFilteredProducts from "./productSource/SourceOfFilteredProducts";

import MenuLinkCssMaker from "./menu/menuLinkCssMaker";

import RendererOfProductsByViewMoreButton from "./productList/rendererByViewMoreButton";
import RendererOfProductsByPaginationButton from "./productList/rendererByPaginationButton";
import RendererOfProductsByMenuLink from "./productList/rendererByMenuLink";
import RendererOfViewedProductsByLink from "./productList/rendererOfViewedProductsByLink";
import RendererBySearchSettings from "./productList/rendererBySearchSettings";
import PaginationBlockRenderer from "./productList/paginationBlockRenderer";


import ProductFilterRenderer from "./productList/productFilter/productFilterRenderer";
import TotalIndicatorOfFilterParameters from "./productList/productFilter/totalIndicatorOfFilterParameters";
import TopTotalSearchParametersRenderer from "./productList/productFilter/topTotalSearchParametersRenderer";
import SearchSettingsObserverForProductFilterRenderer from "./productList/productFilter/searchSettingsObserverForProductFilterRenderer";
import setSearchSettingsOnLoad from "./searchSettings/setSearchSettingsOnLoad";


new CsrfUpdater();

new TopDropMenuFiller();





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

        if (el('.filter_icon__wrapper')) {
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


            const wrapper = el('#productList');
            if (wrapper.dataset.productSectionName === 'serverProductSearch') {
                categoryCache.getEntireList()
                    .then(() => {
                        setSearchSettingsOnLoad({
                            searchSettingsStore,
                            wrapper,
                            rendererBySearchSettings,
                        });
                    });
            }
        }




    }
}







if (el('.personal_account__icon')) {
    new AuthAbsoluteMenu({ clickSourceSelector: '.personal_account__icon' });
}

if (el('#flashMessage')) {
    new AbsoluteFlashMessage({
        text: el('#flashMessage').innerText,
        duration: 3500
    });
}

if (el('.auth_page__change_password_type__wrapper')) {
    new PasswordTypeChanger({
        closedEyeSelector: ".auth_page__closed_eye_img",
        openedEyeSelector: ".auth_page__opened_eye_img",
        passwordInputSelector: "#password",
    });
}
