@guest
    <div id="authMenu">
        <div id="authMenuContent" class="mr15">
            <img alt="" src="{{ asset('images/accountIcon.svg') }}" class="personal_account__icon">
        </div>
    </div>
@else

    @php
        $userUrl = (session('isAdmin')) ? route('adminPanel') : route('my');
        $userText = (session('isAdmin')) ? 'Admin panel' : session('username'); // Auth::user()->name;
    @endphp

    <a href="{{ $userUrl }}" class="top_menu__link">
        {{ $userText }}
    </a>

    <a href="{{ route('account.logout') }}" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
        <img alt="" src="{{ asset('images/accountExitIcon.svg') }}" class="account_exit__icon mr15">
    </a>
@endguest
