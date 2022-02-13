export default function getHeaderHtml(product) {
    if (!product) {
        return `<p class="order_window__header">
                    Связаться по поводу изготовления товара<br>
                    из представленных на сайте или похожего
                </p>`;
    }
    return `<p class="order_window__header">
                <span class="order_window__header__do_order">
                    Заказать
                </span>
                Лот № ${product.id}
            </p>`;
}
