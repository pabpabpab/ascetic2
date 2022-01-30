export default function getFilterBlockHtml() {
    return `<div id="productFilterWrapper">
                <div class="product_filter__content">

                    <p class="product_filter__property_header">
                        Цена, руб.
                    </p>
                    <div id="productFilterPriceSectionWrapper" class="product_filter__price_section">
                        <div id="productFilterPriceSectionSpinner" class="product_filter__spinner">
                            <img alt=""
                                src="/images/spinner.gif"
                                class="product_filter__spinner__img">
                        </div>
                    </div>

                    <p class="product_filter__property_header mt50">
                        Категория
                    </p>
                    <div id="productFilterCategoriesWrapper" class="product_filter__checkboxes_list">
                        <div id="productFilterCategoriesSpinner" class="product_filter__spinner">
                            <img alt=""
                                src="/images/spinner.gif"
                                class="product_filter__spinner__img">
                        </div>
                    </div>

                    <button class="product_filter__ready_button mauto mt30">
                        Готово
                    </button>

                    <div class='product_filter__collapse_icon'>
                        &#215;
                    </div>
                </div>
            </div>`;
}
