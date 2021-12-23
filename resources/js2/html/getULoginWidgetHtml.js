import getJson from "../http/getJson";
import el from "../el";

export default function getULoginWidgetHtml() {
/*
    getJson('/u-login/widget').then((data) => {
        console.log(data);
        el('#uLoginWrapper').insertAdjacentHTML('afterbegin', data);
    });
*/
    return '';

    return `<iframe src="/u-login/widget"
            scrolling="no"
            align="left"
            frameborder="0"
            class="js_reg_form__ulogin_iframe"></iframe>`;


/*
    return `<script src="https://ulogin.ru/js/ulogin.js"></script>
            <div id="uLogin" data-ulogin="display=small;theme=classic;fields=first_name,last_name;
                providers=vkontakte,odnoklassniki,yandex,facebook;
                hidden=instagram,google,twitter,mailru,yandex,livejournal,openid,linkedin,youtube,webmoney;
                redirect_uri=http%3A%2F%2F${document.location.host}%2Fu-login%2Fresponse;mobilebuttons=0;">ddd<div>`;

*/
}

