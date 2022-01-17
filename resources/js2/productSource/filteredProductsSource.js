import getJson from "../http/getJson";
import AbsoluteFlashMessage from "../absoluteFlashMessage";

export default class FilteredProductsSource {

    constructor(data) {
        this.productCache = data.productCache;
        this.searchUrlMaker = data.searchUrlMaker;
        this.publicUrlMaker = data.publicUrlMaker;
        this.limitForCachingOfProductEntireList = data.limitForCachingOfProductEntireList;
        this.filtered = [];
    }
}
