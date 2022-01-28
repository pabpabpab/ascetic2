export default function getFilterBlockHtml() {
    return `<div id="productFilterWrapper">
                <div class="product_filter__content">

                    <p class="product_filter__property_header">
                        Цена, руб.
                    </p>

                    <div class="product_filter__price__text_input__wrapper">
                        <input id="minPriceTextInput" class="product_filter__price__text_input"
                            type="text" maxlength="6" value="">
                        <input id="maxPriceTextInput" class="product_filter__price__text_input"
                            type="text" maxlength="6" value="">
                    </div>

                    <div class="product_filter__price__range_input__wrapper">
                        <div class="product_filter__price__range_input__kernel">&nbsp;</div>

                        <input id="minPriceRangeInput"
                            type="range"
                            class="product_filter__price__range_input product_filter__price__range_input_min"
                            min=""
                            step="100"
                            max=""
                            value=""><br>
                        <input id="maxPriceRangeInput"
                            type="range"
                            class="product_filter__price__range_input product_filter__price__range_input_max"
                            min=""
                            step="100"
                            max=""
                            value="">
                    </div>

                    <div class="product_filter__selectedCategories__wrapper">
                        <p class="product_filter__property_header mt50">
                            Категория
                        </p>
                        <div id="productFilterCategoriesWrapper" class="product_filter__checkboxes_list">
                        </div>
                    </div>

                    <button class="product_filter__button mauto mt30">
                        Готово
                    </button>

                    <div class='product_filter__collapse_icon'>
                        &#215;
                    </div>
                </div>
            </div>`;
}
