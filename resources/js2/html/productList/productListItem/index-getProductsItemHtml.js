import getFavoriteIconBlockHtml from './getFavoriteIconBlockHtml';
import getPhotoBlockHtml from './getPhotoBlockHtml';
import getNoPhotoBlockHtml from './getNoPhotoBlockHtml';
import getListOfCategoriesHtml from './getListOfCategoriesHtml';
import getListOfMaterialsHtml from './getListOfMaterialsHtml';
import getListOfColorsHtml from './getListOfColorsHtml';

export default function getProductsItemHtml(product) {
    //console.log(product);

    return `<div data-product-item="${product.id}" class="product_item__wrapper">
               <div class="product_item">

                  <div class="product_item__content">

                      ${
                        Boolean(product.photos)
                            ? getPhotoBlockHtml(product)
                            : getNoPhotoBlockHtml(product)
                       }

                      <div>
                          <div class="product_item__name">
                              <a href='/product/${product.slug}-${product.id}'
                                  data-product-item-link="${product.id}"
                                  class="product_item__name__link">
                                  ${product.name}
                              </a>
                          </div>
                          <div class="product_item__price">
                              ${product.price} ₽
                          </div>
                      </div>


                      <div class="product_item__bottom_info__relative_wrapper">
                          <div class="product_item__bottom_info__absolute">
                             <p title="Категория" class="product_item__bottom_info__text">
                                ${ getListOfCategoriesHtml(product.categories) }
                             </p>
                             <p title="Материал" class="product_item__bottom_info__text">
                                ${ getListOfMaterialsHtml(product.materials) }
                             </p>
                             <p title="Цвет" class="product_item__bottom_info__text">
                                ${ getListOfColorsHtml(product.colors) }
                             </p>
                          </div>
                      </div>

                  </div>


                  ${ getFavoriteIconBlockHtml(product.id) }

               </div>
            </div>`;
}

