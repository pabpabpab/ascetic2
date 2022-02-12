import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getWhatsappHtml(propValue, product) {
    if (propValue.length === 0) {
        return '';
    }
    const text = product ? `Лот номер ${product.id} (${product.name})` : '';
    return `<p class="order_window__contact_item">
                <span title="Whatsapp" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/whatsapp.png"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="https://wa.me/${getPurePhoneNumber(propValue)}?text=${text}" class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}
