export default function getVkontakteHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="Вконтакте" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/vkontakte.svg"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="${propValue}" target=_blank class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}
