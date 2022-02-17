export default function getHeaderHtml(product) {
    if (!product) {
        return `<div class="order_window__header">
                    Связаться по поводу изготовления товара<br>
                    из представленных на сайте или похожего
                </div>`;
    }
    return `<div class="order_window__header">
                <span class="order_window__header__do_order">
                    Заказать
                </span>
                Товар № ${product.id}
            </div>`;
}
