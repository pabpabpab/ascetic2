export default function hasCategory(categoryId, categories) {
    let index = categories.findIndex(item => categoryId === item.id);
    return index >= 0;
}

