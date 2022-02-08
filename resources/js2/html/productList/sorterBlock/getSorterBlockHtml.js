export default function getSorterBlockHtml() {
    return `<div id="relativeWrapperOfSortingValues" class="sorting_modes__relative_wrapper_for_drop_menu">
                <div id="absoluteListOfSortingValues" class="sorting_modes__absolute_list">
                    <p data-sort-value="position" class="sorting_modes__absolute_list__item">
                        По популярности
                    </p>
                    <p data-sort-value="priceUp" class="sorting_modes__absolute_list__item">
                        Сначала недорогие
                    </p>
                    <p data-sort-value="priceDown" class="sorting_modes__absolute_list__item">
                        Сначала дорогие
                    </p>
                </div>
            </div>`;
}
