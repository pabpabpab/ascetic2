export default function getAuthenticatedMenuHtml(userName) {
    return `<div id="authMenuContent">
                <a href="/home">${userName}</a>
                <a href="/logout">Выйти</a>
            </div>`;
}
