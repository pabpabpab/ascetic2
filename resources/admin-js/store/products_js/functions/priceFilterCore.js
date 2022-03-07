export default function priceFilterCore(items, searchObject) {
    const minPrice = searchObject.minPrice;
    const maxPrice = searchObject.maxPrice;
    return items.filter((el) => {
        const price = Number(el.price);
        return price >= minPrice && price <= maxPrice
    });
}
