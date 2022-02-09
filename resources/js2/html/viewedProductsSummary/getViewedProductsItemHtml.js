export default function getViewedProductsItemHtml(product) {
    //console.log(product);

    return `<div class="product_item__wrapper">
               <div class="product_item product_item__in_viewed_summary">

                  <div class="product_item__content">
                      ${
                          Boolean(product.photos)
                              ? _getPhotoBlockHtml(product)
                              : _getNoPhotoBlockHtml(product)
                       }

                      <div>
                          <div class="product_item__name">
                              <a href='/product/${product.slug}-${product.id}'
                                  data-product-item-link="${product.id}"
                                  class="product_item__name__link product_item__name__link__in_viewed_summary">
                                  ${product.name}
                              </a>
                          </div>
                          <div class="product_item__price product_item__price__in_viewed_summary">
                              ${product.price} ₽
                          </div>
                      </div>
                  </div>

               </div>
            </div>`;
}


function _getPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<div class="product_item__photo_wrapper">
                <div class="product_item__quick_view_link__wrapper product_item__quick_view_link__wrapper__in_viewed_summary">
                    <a data-quick-view="${product.id}"
                        href='/product/${product.slug}-${product.id}'
                        class="product_item__quick_view_link product_item__quick_view_link__in_viewed_summary">
                            Быстрый просмотр
                    </a>
                </div>

                <a href='/product/${product.slug}-${product.id}'>
                    <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                       alt=""
                       data-product-item-link="${product.id}"
                       class="photo__size3 product_item__photo__in_viewed_summary"/>
                </a>
            </div>`;
}

function _getNoPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<div class="product_item__photo_wrapper">
                <div class="product_item__quick_view_link__wrapper product_item__quick_view_link__wrapper__in_viewed_summary">
                    <a data-quick-view="${product.id}"
                        href='/product/${product.slug}-${product.id}'
                        class="product_item__quick_view_link product_item__quick_view_link__in_viewed_summary">
                            Быстрый просмотр
                    </a>
                </div>

                <div class="product_item__no_photo product_item__no_photo__in_viewed_summary">
                    НЕТ ФОТО
                </div>
            </div>`;
}
