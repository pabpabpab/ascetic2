export default function getFacebookHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="Meta" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/facebook.svg"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="${propValue}" target=_blank class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}
