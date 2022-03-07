export default function sortByPriceUp(items) {
    return items.sort((prev, next) => prev.price - next.price);
}
