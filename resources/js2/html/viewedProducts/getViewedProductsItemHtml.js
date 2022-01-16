export default function getViewedProductItemHtml(product) {
    //console.log(product);

    return `<div class="product_item__wrapper">
               <div class="product_item">

                  <div class="product_item__content">
                      <div class="product_item__quick_view_link__wrapper">
                         <a data-quick-view="${product.id}"
                            href='product/${product.slug}-${product.id}'
                            class="product_item__quick_view_link">
                            Быстрый просмотр
                         </a>
                      </div>

                      ${
                          Boolean(product.photoName)
                              ? _getPhotoBlockHtml(product)
                              : `<div class="product_item__no_photo">
                                    НЕТ ФОТО
                                 </div>`
                       }

                      <div>
                          <div class="product_item__name">
                              <a href='product/${product.slug}-${product.id}'
                                  class="product_item__name__link">
                                  ${product.name}
                              </a>
                          </div>
                          <div class="product_item__price">
                              ${product.price} ₽
                          </div>
                      </div>
                  </div>

               </div>
            </div>`;
}


function _getPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<div>
                <a href='product/${product.slug}-${product.id}'>
                    <img src='${photoFolder}${product.id}s3-${product.photoName}'
                       alt=""
                       class="photo__size3"/>
                </a>
            </div>`;
}
