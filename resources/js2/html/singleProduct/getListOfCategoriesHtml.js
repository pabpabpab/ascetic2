export default function getListOfCategoriesHtml(categoriesArr) {
    const catsArr = categoriesArr.map(item => {
        return `<a href='products/${item.slug}' class='single_product__category_item__link'>${item.name}</a>`;
    });
    return catsArr.join(', ');
}
