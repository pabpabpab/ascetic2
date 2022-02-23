export default function getMobileMenuHtml(innerHtml) {
    return `<div id="mobileMenuWrapper">
                <ul id="mobileMenuContent" class="mobile_menu__ul">
                    ${innerHtml}
                </ul>
            </div>`;
}
