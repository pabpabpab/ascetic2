@guest
    <div id="authMenu">
        <div id="authMenuContent">
            <img alt="" src="{{ asset('/images/accountIcon.svg') }}" class="personal_account__icon">
        </div>
    </div>
@else

    @php
        $isAdmin = \Illuminate\Support\Facades\Auth::user()->_hasRole('admin');
        $userUrl = $isAdmin ? route('adminPanel') : route('my');
        $userName = $isAdmin ? 'Admin panel' : \Illuminate\Support\Facades\Auth::user()->name;
    @endphp

    <a href="{{ $userUrl }}" class="top_menu__link nowrap">
        {{ $userName }}
    </a>

    <a href="{{ route('account.logout') }}" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
        <img alt="" src="{{ asset('/images/accountExitIcon.svg') }}" class="account_exit__icon mr15">
    </a>
@endguest
