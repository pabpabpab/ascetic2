import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getTelegramHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }

    const values = propValue.replaceAll(' ', '');
    const linksArr = values.split(',').map(value => {
        const domain = value[0] === '@' ? value.slice(1) : value;
        const nikName  = value[0] === '@' ? value : `@${value}`;
        return `<a href="tg://resolve?domain=${domain}" class="order_window__contact_item__link">
                        ${nikName}
                </a>`;
    });



    return `<div class="order_window__contact_item">
                <div title="Telegram" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/telegram.png"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${ linksArr.join(', ') }
                </div>
            </div>`;
}

