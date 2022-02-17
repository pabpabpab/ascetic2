import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getEmailHtml(propValue, product) {
    if (propValue.length === 0) {
        return '';
    }
    const text = product ? `Лот номер ${product.id} (${product.name})` : '';

    const arr = propValue.split(',');
    const emailLinksArr = propValue.split(',').map(item => {
        return `<a href="mailto:${item}?subject=${text}&body=${text}" class="order_window__contact_item__link">
                    ${item}
                </a>`
    })

    return `<div class="order_window__contact_item">
                <div title="E-mail" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/email.svg"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${ emailLinksArr.join(', ') }
                </div>
            </p>`;
}

