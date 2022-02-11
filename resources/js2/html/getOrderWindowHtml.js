export default function getOrderWindowHtml(product, contacts) {
    return `<div id="orderWindow" class="order_window__wrapper show_block">
                <div class="order_window">
                    <p class="order_window__header">
                       <span class="order_window__header__do_order">Заказать</span> Лот № ${product.id}
                    </p>

                     <div class="order_window__photo_wrapper">
                       ${ _getPhotoBlockHtml(product)}
                       <p class="order_window__product_name">
                           ${ product.name }
                       </p>
                    </div>


                    ${ _getItem(contacts.address, 'Адрес', 'address.svg') }
                    ${ _getItem(contacts.phone, 'Телефон', 'telephone.svg') }
                    ${ _getItem(contacts.phoneTime, 'Время для звонка', 'phoneTime.svg') }
                    ${ _getItem(contacts.whatsUp, 'WhatsUp', 'whatsapp.png') }
                    ${ _getItem(contacts.tg, 'Telegram', 'telegram.png') }
                    ${ _getItem(contacts.vkontakte, 'Вконтакте', 'vkontakte.svg') }
                    ${ _getItem(contacts.ok, 'Одноклассники', 'ok.png') }
                    ${ _getItem(contacts.meta, 'Meta', 'facebook.svg') }
                    ${ _getItem(contacts.email, 'E-mail', 'email.svg') }
                    <div class='order_window__collapse_icon'>&#215;</div>
                </div>
            </div>`;
}


function _getItem(propValue, title, iconSrc) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="${title}" class="order_window__contact_item__field_title">
                <img alt="" src="/images/contactIcons/${iconSrc}"
                    class="order_window__contact_item__icon" />
                </span>
                ${propValue}
            </p>`;
}

function _getPhotoBlockHtml(product) {
    const photoFolder = "/storage/products-photos-size3/";
    return `<p class="order_window__photo">
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    class="order_window__photo_img"/>
            </p>`;
}
