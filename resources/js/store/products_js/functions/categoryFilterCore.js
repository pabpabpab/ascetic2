export default function categoryFilterCore(items, searchObject) {
    const search_ids = searchObject.category_ids;
    return items.filter((item) => {
        const parametersArr = JSON.parse(item.parameters);
        const item_ids = parametersArr.categories.map((el) => el.id);
        return search_ids.some(el => item_ids.includes(el))
    });
}
