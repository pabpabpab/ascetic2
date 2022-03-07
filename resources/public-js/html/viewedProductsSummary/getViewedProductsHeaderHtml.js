export default function getViewedProductHeaderHtml(mobileVersion) {
    if (mobileVersion) {
        return `<div id="viewedProductsSummaryHeader" class="viewed_products__wrapper__header">
                    <a href="/viewed-products"
                        data-viewed-products-link="1"
                        class="viewed_products__link">
                        Вы недавно смотрели эти товары
                    </a>
                    <span id="viewedTotalCount" class="viewed_products__totalCount"></span>
                </div>`;
    }


    return `<div id="viewedProductsSummaryHeader" class="viewed_products__wrapper__header">
                <h2 class="viewed_products__wrapper__h2">Вы недавно смотрели</h2>
                <a href="/viewed-products"
                    data-viewed-products-link="1"
                    class="viewed_products__link">
                    Смотреть все
                </a>
                <span id="viewedTotalCount" class="viewed_products__totalCount"></span>
           </div>`;
}
