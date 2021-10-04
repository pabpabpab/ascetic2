export default function materialFilterCore(items, searchObject) {
    const search_ids = searchObject.material_ids;
    return items.filter((item) => {
        const parametersArr = JSON.parse(item.parameters);
        const item_ids = parametersArr.materials.map((el) => el.id);
        return search_ids.some(el => item_ids.includes(el))
    });
}
