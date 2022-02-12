export default function getOKHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="Одноклассники" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/ok.png"
                    class="order_window__contact_item__icon" />
                </span>
                <a href="${propValue}" target=_blank class="order_window__contact_item__link">
                    ${propValue}
                </a>
            </p>`;
}
