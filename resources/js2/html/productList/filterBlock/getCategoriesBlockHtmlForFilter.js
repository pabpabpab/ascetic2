export default function getCategoriesBlockHtmlForFilter(categories) {
    const items = categories.map(item => _getCategoryItemHTML(item));
    return items.join('');
}

function _getCategoryItemHTML(category) {
    return `<p class="product_filter__checkbox_input__item">
                <input type="checkbox"
                    data-product-filter-category-checkbox-input
                    id="filterCategory${category.id}"
                    value="${category.id}"
                    class="product_filter__checkbox_input">
            <label for="filterCategory${category.id}" class="product_filter__checkbox_label">
                ${category.name}
            </label>
    </p>`;
}
