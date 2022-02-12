export default function getTelegramHtml(propValue, product) {
    if (propValue.length === 0) {
        return '';
    }

    const value = propValue.replaceAll(' ', '');
    const domain = value[0] === '@' ? value.slice(1) : value;
    const nikName  = value[0] === '@' ? value : `@${value}`;

    const text = `Лот номер ${product.id} (${product.name})`;
    return `<p class="order_window__contact_item">
                <span title="Telegram" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/telegram.png"
                    class="order_window__contact_item__icon" />
                </span>

                <a href="tg://resolve?domain=${domain}" class="order_window__contact_item__link">
                    ${nikName}
                </a>
            </p>`;
}

