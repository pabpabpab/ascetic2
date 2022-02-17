import getPurePhoneNumber from "./getPurePhoneNumber";

export default function getWhatsappHtml(propValue, product) {
    if (propValue.length === 0) {
        return '';
    }

    const text = product ? `Лот номер ${product.id} (${product.name})` : '';

    const arr = propValue.split(',');
    const phoneLinksArr = propValue.split(',').map(item => {
        return `<a href="https://wa.me/${getPurePhoneNumber(item)}?text=${text}" class="order_window__contact_item__link">
                    ${item}
                </a>`
    })

    return `<div class="order_window__contact_item">
                <div title="Whatsapp" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/whatsapp.png"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${ phoneLinksArr.join(', ') }
                </div>
            </div>`;
}
