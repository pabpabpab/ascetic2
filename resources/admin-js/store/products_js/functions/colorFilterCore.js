export default function colorFilterCore(items, searchObject) {
    const search_ids = searchObject.color_ids;
    return items.filter((item) => {
        const parametersArr = JSON.parse(item.parameters);
        const item_ids = parametersArr.colors.map((el) => el.id);
        return search_ids.some(el => item_ids.includes(el))
    });
}
