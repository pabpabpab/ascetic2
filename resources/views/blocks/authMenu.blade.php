@guest
    <div id="authMenu">
        <div id="authMenuContent" class="mr15">
            <img alt="" src="{{ asset('images/accountIcon.svg') }}" class="personal_account__icon">
        </div>
    </div>
@else
    <a href="{{ route('home') }}" class="navBar__link">
        {{ Auth::user()->name }}
    </a>

    <a href="{{ route('logout') }}" title="Выйти из аккаунта" class="navBar__link navBar__link_account_exit">
        <img alt="" src="{{ asset('images/accountExitIcon.svg') }}" class="account_exit__icon mr15">
    </a>
@endguest
