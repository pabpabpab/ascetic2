<div class="top_viewing_sorting_filtering_container">

    <div data-title="Показать товары мелкими"
         class="icon_with_hint icon_with_right_hint viewing_icon__wrapper">
        <img src="{{ asset('/images/roundViewSmallItemsIcon.svg') }}" alt="" class="viewing_icon__img">
    </div>


    <div class="sorting_modes_for_mobile__wrapper">

        <div class="sorting_modes_for_mobile__selected_mode__wrapper">
            <div class="sorting_modes_for_mobile__selected_mode">
                selectedMode
            </div>
            <div
                class="sorting_modes_for_mobile__arrow sorting_modes_for_mobile__arrow_up">
                &#9660;
            </div>
        </div>
        {{--:class="{sorting_modes_for_mobile__arrow_up: selectIsVisible}"--}}
    </div>

    <div data-title="Открыть фильтр товаров"
         class="icon_with_hint icon_with_left_hint filter_icon__wrapper">
        <img src="{{ asset('/images/filterIcon.svg') }}" alt="" class="filter_icon__img">
        <div class="filter_icon__total_indicator">0</div>
    </div>
</div>
