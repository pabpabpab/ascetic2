import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getPhoneHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }

    const arr = propValue.split(',');
    const phoneLinksArr = propValue.split(',').map(item => {
        return `<a href="tel:${getPurePhoneNumber(item)}" class="order_window__contact_item__link">
                    ${item}
                </a>`
    })

    return `<p class="order_window__contact_item">
                <span title="Телефон" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/telephone.svg"
                    class="order_window__contact_item__icon" />
                </span>
                ${ phoneLinksArr.join(', ') }
            </p>`;
}

