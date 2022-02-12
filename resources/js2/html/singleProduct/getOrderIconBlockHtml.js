export default function getOrderIconBlockHtml(productId) {
    return `<div data-order-button="${productId}" class="single_product__favorite_icon__wrapper">
               <img data-order-button="${productId}" alt=""
                  src="/images/orderIcon.svg"
                  class="single_product__order_icon__img">
               <span data-order-button="${productId}" class="single_product__favorite_icon__text">
                  ЗАКАЗАТЬ
               </span>
            </div>`;
}
