import el from './../el';
import AppAncestor from "../appAncestor";

export default class MenuLinkCssMaker extends AppAncestor {

    constructor() {
        super();
    }

    resetMenuLinksCss() {
        let nodes = el('.top_menu').querySelectorAll('.top_menu__link');
        for (let node of nodes) {
            node.classList.remove('top_menu__link_active');
        }
        nodes = el('.bottom_menu').querySelectorAll('.bottom_menu__link');
        for (let node of nodes) {
            node.classList.remove('bottom_menu__link_active');
        }
        el('.logo__link').classList.remove('logo__link_active');
    }

    markActiveMenuLink() {
        const settings = this.app.searchSettingsStore.getSettings();
        const sectionName = settings.productSectionName;
        const additionalData = settings.additionalDataOfProductSection;

        if (sectionName === 'productCategory') {
            const categorySlug = additionalData.split(';')[1];
            const topLink = el(`.top_menu [data-menu-link-category-slug=${categorySlug}]`);
            const bottomLink = el(`.bottom_menu [data-menu-link-category-slug=${categorySlug}]`);
            if (topLink) {
                topLink.classList.add('top_menu__link_active');
            }
            if (bottomLink) {
                bottomLink.classList.add('bottom_menu__link_active');
            }
        }

        if (sectionName === 'favoriteProducts') {
            const favIconLink = el(`.top_menu__link_fav_icon`);
            if (favIconLink) {
                favIconLink.classList.add('top_menu__link_active');
            }
        }

        if (sectionName === 'all') {
            const logoLink = el(`.logo__link`);
            logoLink.classList.add('logo__link_active');
        }
    }
}
