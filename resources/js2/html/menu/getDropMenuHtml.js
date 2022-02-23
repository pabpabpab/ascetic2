export default function getDropMenuHtml(innerHtml) {
    return `<div id="topMenu-dropMenuWrapper" class="top_menu__drop_menu show_block">
                <ul id="topMenu-dropMenuContent" class="top_menu__drop_menu__ul">
                    ${innerHtml}
                </ul>
            </div>`;
}
