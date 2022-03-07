export default function getAuthenticatedMenuHtml(userName, isAdmin) {
    const ellipsis = userName.length > 12 ? '...' : '';

    const userLink = isAdmin
        ? `<a href="/admin" class="top_menu__link top_menu__link_auth nowrap">Admin panel</a>`
        : `<a href="/my" class="top_menu__link top_menu__link_auth nowrap">${ userName.slice(0, 12) }${ ellipsis }</a>`;

    return `<div id="authMenuContent" class="display-flex">
                ${userLink}
                <a href="/logout" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
                    <img alt="" src="/images/accountExitIcon.svg" class="account_exit__icon">
                </a>
            </div>`;
}
