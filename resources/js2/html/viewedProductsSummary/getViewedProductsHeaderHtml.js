export default function getViewedProductHeaderHtml(product) {
    return `<div id="viewedProductsSummaryHeader" class="viewed_products__aside__header">
                <h2 class="viewed_products__aside__h2">Вы недавно смотрели</h2>
                <a href="/viewed-products"
                    data-viewed-products-link="1"
                    class="viewed_products__link">
                    Смотреть все
                </a>
           </div>`;
}
