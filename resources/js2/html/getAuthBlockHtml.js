export default function getFailedLoginHtml(css) {
    return `<div id="authBlock" class="${css.basicCss} ${css.showCss}">
                <div class="auth_block__header">
                    Личный кабинет
                </div>
                <div class="auth_block__content">
                    <a id="loginLink" href="/login" class="auth_block__link mr7">
                        Войти
                    </a>
                    или
                    <a id="registerLink" href="/register" class="auth_block__link ml7">
                        Зарегистрироваться
                    </a>
                </div>
            <div>`;
}
