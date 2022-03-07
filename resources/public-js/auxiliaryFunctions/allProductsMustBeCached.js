import el from "./el";

export default function allProductsMustBeCached() {
    if (!el('#productList')) {
        return false;
    }
    if (!el('#productList').dataset) {
        return false;
    }
    if (!el('#productList').dataset.cacheLimit) {
        return false;
    }
    if (!el('#productList').dataset.totalProductsCount) {
        return false;
    }
    const limitForCachingOfProductEntireList = Number(el('#productList').dataset.cacheLimit);
    const totalProductsCount = Number(el('#productList').dataset.totalProductsCount);
    return totalProductsCount < limitForCachingOfProductEntireList;
}
