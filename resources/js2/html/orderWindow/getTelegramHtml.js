export default function getTelegramHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }

    const value = propValue.replaceAll(' ', '');
    const domain = value[0] === '@' ? value.slice(1) : value;
    const nikName  = value[0] === '@' ? value : `@${value}`;


    return `<div class="order_window__contact_item">
                <div title="Telegram" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/telegram.png"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    <a href="tg://resolve?domain=${domain}" class="order_window__contact_item__link">
                        ${nikName}
                    </a>
                </div>
            </div>`;
}

