import el from './../el';
import getSingleProductHtml from "./../html/getSingleProductHtml";
import singleProductKit from "./../productSingle/singleProductKit";

export default class SingleProductQuickViewer {

    constructor(productSource) {
        this.source = productSource;

        el('#products').addEventListener('click', (e) => {
            if (e.target.dataset.quickView) {
                e.preventDefault();
                this._showOneProduct(e.target.dataset.quickView);
            }
        });

    }

    _showOneProduct(id) {
        const productId = Number(id);

        this.source.getEntireList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === productId)[0];
                const productObject = this._prepareProductObject(product);
                //console.log(productObject);

                const productHtml = getSingleProductHtml(productObject);
                if (el('#quickProduct')) {
                    el('#quickProduct').remove();
                }

                document.body.style.overflow = 'hidden';
                el('body').insertAdjacentHTML('beforeend', productHtml);

                singleProductKit();

                this.source.getOneDescription(productId)
                    .then((data) => {
                        el('#productDescriptionContainer').innerText = data.description;
                    });
            });
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

        return obj;
    }





    /*
        this._getProductList()
            .then((data) => {
                const list = [...data];
                const product = list.filter(item => item.id === id)[0];
                const productHtml = this._renderOne(product);
                if (el('#quickProduct')) {
                    el('#quickProduct').remove();
                }
                el('body').insertAdjacentHTML('beforeend', productHtml);
            });
        */



    /*
    _renderOne(product) {
        console.log(product);
        return `<div id="quickProduct">${product.id}</div>`;
    }
   */
    /*
    _getProductList() {
        return this.source.getEntireList()
            .then((data) => {
                return [ ...data ];
            });
    }
    */
}
