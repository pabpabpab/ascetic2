import el from './../el';
import getSingleProductHtml from "../html/singleProduct/getSingleProductHtml";
import singleProductKit from "./../productSingle/singleProductKit";

export default class SingleProductQuickViewer {

    constructor(productSource) {
        this.source = productSource;
        this.limitForLoadingOfEntireList = 150;

        el('#products').addEventListener('click', (e) => {
            if (e.target.dataset.quickView) {
                e.preventDefault();
                const productId = Number(e.target.dataset.quickView);
                this._showOneProduct(productId);
            }
        });
    }

    _showOneProduct(productId) {
        const productsCount = Number(el('#products').dataset.productsCount);
        if (productsCount > this.limitForLoadingOfEntireList) {
            this._showOneFromServer(productId);
        } else {
            this._showOneFromDownloadedList(productId);
        }
    }


    _showOneFromServer(productId) {
        return this.source.getOneFromServer(productId)
            .then((product) => {
                const productObject = this._prepareProductObject(product);
                this._renderProduct(productObject);
            });
    }


    _showOneFromDownloadedList(productId) {
        return this.source.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                const productObject = this._prepareProductObject(product);
                this._renderProduct(productObject);
                this.source.getOneDescription(productId)
                    .then((data) => {
                        el('#productDescriptionContainer').innerText = data.description;
                    });
            });
    }


    _renderProduct(product) {
        const productHtml = getSingleProductHtml(product);
        if (el('#quickProduct')) {
            el('#quickProduct').remove();
        }

        document.body.style.overflow = 'hidden';
        el('body').insertAdjacentHTML('beforeend', productHtml);

        singleProductKit();
    }


    _prepareProductObject(product) {
        const obj = {};
        obj.id = product.id;
        obj.name = product.name;
        obj.slug = product.slug;

        const params = JSON.parse(product.parameters);
        obj.price = params.price;
        obj.categories = params.categories;
        obj.colors = params.colors;
        obj.materials = params.materials;

        obj.photos = JSON.parse(product.photo_set);

        obj.descripton = '';
        if (product?.description?.description) {
            obj.description = product.description.description;
        }

        return obj;
    }

}
