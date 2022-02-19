export default function getAuthenticatedMenuHtml(userName, isAdmin) {

    const ellipsis = userName.length > 12 ? '...' : '';

    const userLink = isAdmin
        ? `<a href="/admin" data-menu-user-link="desktop" class="top_menu__link nowrap">Admin panel</a>`
        : `<a href="/my" data-menu-user-link="desktop" class="top_menu__link nowrap">${ userName.slice(0, 12) }${ ellipsis }</a>`;

    const mobileUserLink = isAdmin
        ? `<a href="/admin" data-menu-user-link="mobile" class="top_menu__link nowrap">Admin</a>`
        : `<a href="/my" data-menu-user-link="mobile" class="top_menu__link nowrap">${ userName.slice(0, 1) }...</a>`;

    return `<div id="authMenuContent" class="display-flex">
                ${userLink}
                ${mobileUserLink}
                <a href="/logout" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
                    <img alt="" src="/images/accountExitIcon.svg" class="account_exit__icon mr15">
                </a>
            </div>`;
}
