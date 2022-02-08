import getFavoriteIconBlockHtml from './getFavoriteIconBlockHtml';
import getPhotoBlockHtml from './getPhotoBlockHtml';
import getListOfCategoriesHtml from './getListOfCategoriesHtml';
import getListOfMaterialsHtml from './getListOfMaterialsHtml';
import getListOfColorsHtml from './getListOfColorsHtml';

export default function getSingleProductHtml(product) {
    //console.log(product);

    return `<div id="singleProduct" class="single_product_page__content_wrapper">
                        <div class="single_product__content">

                            ${
                                product.photos.length > 0
                                    ? getPhotoBlockHtml(product.id, product.photos)
                                    : ''
                            }

                            <section class="single_product__top_characteristics
                                ${
                                    product.photos.length > 0
                                        ? 'single_product__top_characteristics__margin_left'
                                        : ''
                                }">

                                <h1 class="single_product__h1">
                                    ${product.name}
                                </h1>
                                <div class="single_product__price">
                                    ${product.price} ₽
                                </div>
                                <div class="single_product__categories">
                                    Категория:
                                    ${ getListOfCategoriesHtml(product.categories) }
                                </div>
                                <div class="single_product__categories">
                                    Материал:
                                    ${ getListOfMaterialsHtml(product.materials) }
                                </div>
                                <div class="single_product__categories">
                                    Цвет:
                                    ${ getListOfColorsHtml(product.colors) }
                                </div>
                                <div id="productDescriptionContainer" class="single_product__description">
                                    ${product.description}
                                </div>
                                ${ getFavoriteIconBlockHtml(product.id) }
                            </section>

                        </div>
                    </div>`;
}



