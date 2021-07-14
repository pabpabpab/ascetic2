<nav class="navbar">
    <div class="container" style="display: flex;justify-content: space-between;">
        <a class="navbar-brand" href="{{ url('/') }}">
            {{ config('app.name', 'Laravel') }}
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->

            <!-- Authentication Links -->
            @guest
                <div id="authMenu">

                    <div id="authMenuContent">
                        <img alt="Личный кабинет" src="images/lk.jpg" class="personal_account__icon">
                    </div>
                    {{--
                    <div id="authMenuContent">
                       @if (Route::currentRouteName() !== 'login.show')
                           <a id="loginLink" href="{{ route('login.show') }}">Логин</a>
                       @endif

                       @if (Route::currentRouteName() !== 'register.show')
                           <a id="registerLink" href="{{ route('register.show') }}">Регистрация</a>
                       @endif
                    </div>
                    --}}
                </div>
            @else
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="{{ route('home') }}">
                            {{ Auth::user()->name }}
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                                Выйти
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </li>
                </ul>
            @endguest
        </div>
    </div>
</nav>
