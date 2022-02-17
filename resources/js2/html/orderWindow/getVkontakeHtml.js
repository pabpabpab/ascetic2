export default function getVkontakteHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }

    const values = propValue.replaceAll(' ', '');
    const linksArr = values.split(',').map(item => {
        return `<a href="${item}" target=_blank class="order_window__contact_item__link">
                        ${item}
                </a>`;
    });

    return `<div class="order_window__contact_item">
                <div title="Вконтакте" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/vkontakte.svg"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${ linksArr.join(', ') }
                </div>
            </div>`;
}
