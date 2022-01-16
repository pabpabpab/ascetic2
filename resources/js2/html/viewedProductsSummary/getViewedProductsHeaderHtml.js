export default function getViewedProductHeaderHtml(product) {
    return `<div class="viewed_products__aside__header">
                <h2 class="viewed_products__aside__h2">Вы недавно смотрели</h2>
                <a href="/viewed-products" class="viewed_products__link">
                    Смотреть все
                </a>
           </div>`;
}
