import getVkontakteHtml from "./getVkontakeHtml";
import getOKHtml from "./getOKHtml";
import getFacebookHtml from "./getFacebookHtml";
import getEmailHtml from "./getEmailHtml"
import getWhatsappHtml from "./getWhatsappHtml";
import getTelegramHtml from "./getTelegramHtml";
import getPhoneHtml from "./getPhoneHtml";
import getAddressHtml from "./getAddressHtml";

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

                    ${ getAddressHtml(contacts.address) }
                    ${ getPhoneHtml(contacts.phone) }
                    ${ _getItem(contacts.phoneTime, 'Время для звонка', 'phoneTime.svg') }
                    ${ getWhatsappHtml(contacts.whatsapp, product) }
                    ${ getTelegramHtml(contacts.tg, product) }
                    ${ getVkontakteHtml(contacts.vkontakte) }
                    ${ getOKHtml(contacts.ok) }
                    ${ getFacebookHtml(contacts.meta) }
                    ${ getEmailHtml(contacts.email, product) }

                    <div class='order_window__collapse_icon'>&#215;</div>
                </div>
            </div>`;
}


function _getItem(propValue, title, iconSrc) {
    if (propValue.length === 0) {
        return '';
    }
    return `<p class="order_window__contact_item">
                <span title="${title}" class="order_window__contact_item__title">
                <img alt="" src="/images/contactIcons/${iconSrc}"
                    class="order_window__contact_item__icon" />
                </span>
                ${propValue}
            </p>`;
}

function _getPhotoBlockHtml(product) {
    if (!product.photos[0]) {
        return '';
    }
    const photoFolder = "/storage/products-photos-size3/";
    return `<p class="order_window__photo">
                <img src='${photoFolder}${product.id}s3-${product.photos[0]}'
                    alt=""
                    class="order_window__photo_img"/>
            </p>`;
}
