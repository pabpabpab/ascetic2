export default function getAddressHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }
    return `<div class="order_window__contact_item">
                <div title="Адрес" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/address.svg"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    <a href="https://yandex.ru/maps/?text=${propValue}" target=_blank class="order_window__contact_item__link">
                        ${propValue}
                    </a>
                </div>
            </div>`;
}

