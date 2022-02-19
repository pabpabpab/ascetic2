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

        $userName = \Illuminate\Support\Facades\Auth::user()->name;
        $ellipsis = strlen($userName) > 12 ? '...' : '';
        $userName = $isAdmin ? 'Admin panel' : substr($userName, 0, 12) . $ellipsis;
        $mobileUserName = $isAdmin ? 'Admin' : substr($userName, 0, 1) . '...';
    @endphp

    <a href="{{ $userUrl }}" data-menu-user-link="desktop" class="top_menu__link nowrap">
        {{ $userName }}
    </a>

    <a href="{{ $userUrl }}" data-menu-user-link="mobile" class="top_menu__link nowrap">
        {{ $mobileUserName }}
    </a>

    <a href="{{ route('account.logout') }}" title="Выйти из аккаунта" class="top_menu__link top_menu__link_account_exit">
        <img alt="" src="{{ asset('/images/accountExitIcon.svg') }}" class="account_exit__icon">
    </a>
@endguest
