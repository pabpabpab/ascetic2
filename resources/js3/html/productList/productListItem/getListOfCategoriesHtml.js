export default function getListOfCategoriesHtml(categoriesArr) {
    const catsArr = categoriesArr.map(item => {
        return `<a href='/products/${item.slug}' class='product_item__name__link'>${item.name}</a>`;
    });
    return catsArr.join(', ');
}
