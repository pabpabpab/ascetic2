import el from "./el";

export default function areAllProductsCached() {
    const limitForCachingOfProductEntireList = 100;
    const totalProductsCount = Number(el('#productList').dataset.totalProductsCount);
    return totalProductsCount < limitForCachingOfProductEntireList;
}
