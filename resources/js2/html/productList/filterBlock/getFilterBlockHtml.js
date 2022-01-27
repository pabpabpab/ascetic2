export default function getFilterBlockHtml() {
    return `<div class="product_filter">
                <div class="product_filter__content">

                    <p class="product_filter__property_header">
                        Цена, руб.
                    </p>

                    <div class="filter_price__text_input__wrapper">
                        <input class="input_text filter_price__text_input"
                            type="text" maxlength="6" value="">
                        <input class="input_text filter_price__text_input"
                            type="text" maxlength="6" value="">
                    </div>

                    <div class="filter_price__range_input__wrapper">
                        <div class="filter_price__range_input__kernel">&nbsp;</div>

                        <input type="range" class="filter_price__range_input filter_price__range_input_min"
                            min="0"
                            step="100"
                            max="9999999"
                            value="0"><br>
                        <input type="range" class="filter_price__range_input filter_price__range_input_max"
                            min="productsMinPrice"
                            step="100"
                            max="1000000"
                            value="1000000">
                    </div>

                    <div class="product_filter__selectedCategories__wrapper">
                        <p class="product_filter__property_header mt50">
                            Категория
                        </p>

                        <div class="product_filter__checkboxes_list">

                            <p class="product_filter__checkbox_input__item">
                                <input type="checkbox"
                                    id="cat7"
                                    value="7"
                                    class="product_filter__checkbox_input">
                                <label for="cat7" class="product_filter__checkbox_label">
                                    Категория 7
                                </label>
                            </p>

                            <p class="product_filter__checkbox_input__item">
                                <input type="checkbox"
                                    id="cat8"
                                    value="8"
                                    class="product_filter__checkbox_input">
                                <label for="cat8" class="product_filter__checkbox_label">
                                    Категория 8
                                </label>
                            </p>

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
