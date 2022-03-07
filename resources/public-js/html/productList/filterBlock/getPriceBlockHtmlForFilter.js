export default function getPriceBlockHtmlForFilter() {
    return `<div class="product_filter__price__text_input__wrapper">
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
            </div>`;
}
