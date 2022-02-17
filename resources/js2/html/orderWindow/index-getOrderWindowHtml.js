import getHeaderHtml from "./getHeaderHtml";
import getProductInfoHtml from "./getProductInfoHtml";
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
                    ${ getHeaderHtml(product) }
                    ${ getProductInfoHtml(product) }
                    ${ getAddressHtml(contacts.address) }
                    ${ getPhoneHtml(contacts.phone) }
                    ${ _getItem(contacts.phoneTime, 'Время для звонка', 'phoneTime.svg') }
                    ${ getWhatsappHtml(contacts.whatsapp, product) }
                    ${ getTelegramHtml(contacts.tg) }
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
    return `<div class="order_window__contact_item">
                <div title="${title}" class="order_window__contact_item__title">
                    <img alt="" src="/images/contactIcons/${iconSrc}"
                        class="order_window__contact_item__icon" />
                </div>
                <div class="order_window__contact_item__content">
                    ${propValue}
                </div>
            </div>`;
}
