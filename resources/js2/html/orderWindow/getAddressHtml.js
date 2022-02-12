export default function getAddressHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="Адрес" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/address.svg"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="https://yandex.ru/maps/?text=${propValue}" target=_blank class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}

