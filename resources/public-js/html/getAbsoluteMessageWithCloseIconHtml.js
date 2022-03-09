export default function getAbsoluteMessageWithCloseIconHtml(css, id, text) {
    return `<div id="${id}" class="${css.basicCss} ${css.showCss}">
                <div class="absolute_message__content">
                    ${text}
                    <div class='absolute_message__close'>&#215;</div>
                </div>
            </div>`;
}
