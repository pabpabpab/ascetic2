export default function getAuthenticatedMenuHtml(userName) {
    return `<div id="authMenuContent" class="display-flex">
                <a href="/home" class="navBar__link">${userName}</a>
                <a href="/logout" title="Выйти из аккаунта" class="navBar__link navBar__link_account_exit">
                    <img alt="" src="images/accountExitIcon.svg" class="account_exit__icon mr15">
                </a>
            </div>`;
}
