import el from "./el";

export default function allProductsMustBeCached() {
    const limitForCachingOfProductEntireList = 1;
    const totalProductsCount = Number(el('#productList').dataset.totalProductsCount);
    return totalProductsCount < limitForCachingOfProductEntireList;
}
