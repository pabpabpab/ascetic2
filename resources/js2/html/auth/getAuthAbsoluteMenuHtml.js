export default function getAuthAbsoluteMenuHtml(css) {
    return `<div id="authAbsoluteMenu" class="${css.basicCss} ${css.showCss}">
                <div class="auth_absolute_menu__header">
                    Личный кабинет
                </div>
                <div class="auth_absolute_menu__content">
                    <a id="loginLink" href="/login" class="auth_absolute_menu__link mr7">
                        Войти
                    </a>
                    или
                    <a id="registerLink" href="/register" class="auth_absolute_menu__link ml7">
                        Зарегистрироваться
                    </a>
                </div>
            <div>`;
}
