export default function getEmailHtml(propValue, product) {
    if (propValue.length === 0) {
        return '';
    }
    const text = product ? `Лот номер ${product.id} (${product.name})` : '';
    return `<p class="order_window__contact_item">
                <span title="E-mail" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/email.svg"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="mailto:${propValue}?subject=${text}&body=${text}" class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}

