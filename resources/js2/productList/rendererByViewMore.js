import el from './../el';
import getProductObject from "./../productObject/getProductObject";
import getProductsItemHtml from "./../html/productList/productListItem/index-getProductsItemHtml";
import FavoriteProductsIndicationByPageLoad from "../favoriteProducts/favoriteProductsIndicationByPageLoad";


export default class RendererByViewMore {

    constructor(data) {
        this.filteredProductsSource = data.filteredProductsSource;
        this.searchSettingsStore = data.searchSettingsStore;
        this.publicUrlMaker = data.publicUrlMaker;
        this.productItemSelector = '[data-product-item]';
        this.container = el('#productList');

        el('body').addEventListener('click', (e) => {
            if (e.target.id === 'viewMoreButton') {
                // e.preventDefault();
                const loadedProductsOffset = this._calculateOffsetOfLoadingProducts();
                this.searchSettingsStore.setStartOffset(loadedProductsOffset);
                this._render();
            }
        });
    }

    _calculateOffsetOfLoadingProducts() {
        const nodes = document.querySelectorAll(this.productItemSelector);
        return nodes.length;
    }

    _render() {
        return this.filteredProductsSource.getFiltered()
            .then((data) => {
                const products = [...data];
                const itemsHtmlArr = products.map((product) => {
                    const productObject = getProductObject(product);
                    return getProductsItemHtml(productObject);
                });
                const itemsHtml = itemsHtmlArr.join('');
                this.container.insertAdjacentHTML('beforeend', itemsHtml);

                new FavoriteProductsIndicationByPageLoad();
            });
    }
}
