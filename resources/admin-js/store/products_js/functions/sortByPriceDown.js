export default function sortByPriceDown(items) {
    return items.sort((prev, next) => next.price - prev.price);
}
