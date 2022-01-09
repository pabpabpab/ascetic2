export default function getAuthenticatedMenuHtml(userName, isAdmin) {

    const userLink = isAdmin
        ? `<a href="/admin" class="top_menu__link">Admin panel</a>`
        : `<a href="/my" class="top_menu__link">${userName}</a>`;

    return `<div id="authMenuContent" class="display-flex">
                ${userLink}
                <a href="/logout" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
                    <img alt="" src="images/accountExitIcon.svg" class="account_exit__icon mr15">
                </a>
            </div>`;
}
