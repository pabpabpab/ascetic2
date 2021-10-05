export default function sortByPosition(items) {
    return items.sort((prev, next) => next.position - prev.position);
}
