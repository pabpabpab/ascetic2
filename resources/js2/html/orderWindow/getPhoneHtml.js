import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getPhoneHtml(propValue) {
    if (propValue.length === 0) {
        return '';
    }

    const values = propValue.replaceAll(' ', '');
    const phoneLinksArr = values.split(',').map(item => {
        return `<a href="tel:${getPurePhoneNumber(item)}" class="order_window__contact_item__link">
                    ${item}
                </a>`
    });

    return `<div class="order_window__contact_item">
                <div title="Телефон" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/telephone.svg"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${ phoneLinksArr.join(', ') }
                </div>
            </div>`;
}

