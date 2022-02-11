export default function getListOfCategoriesHtml(categoriesArr) {
    const catsArr = categoriesArr.map(item => {
        return `<a href='/products/${item.slug}'
                   data-link-section-name='productCategory'
                   data-link-category-id='${item.id}'
                   data-link-category-slug='${item.slug}'
                   data-link-category-name='${item.name}'
                   class='product_item__category_link'>
                      ${item.name}
                </a>`;
    });
    return catsArr.join(', ');
}
