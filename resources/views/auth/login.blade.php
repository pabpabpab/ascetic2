@extends('layouts.main-layout')

@section('title')Вход для пользователя@endsection

@section('content')
    <div class="auth_page">


        @if (session('authStatus'))
            <div class="auth_page__auth_status">
                {{ session('authStatus') }}
            </div>
        @endif


        <h1>Вход для пользователя</h1>

        <form action='{{route('account.login.do')}}' method='post'>
            @csrf

            <label for="email" class="auth_page__text_input__label">
                E-mail
            </label>
            <input type='email' name='email' id='email'
                   class="auth_page__text_input"
                   value="{{ old('email') ?? session('email') }}" required>
            @error('email')
                <p class="auth_page__text_input__error_msg">{{ $message }}</p>
            @enderror


            <label for="password" class="auth_page__text_input__label">
                Пароль
            </label>
            <input type='password'
                   name='password' id='password'
                   class="auth_page__text_input" required>
            <div class="auth_page__change_password_type__wrapper">
                <img alt="" src="images/closedEye.svg" class="auth_page__closed_eye_img">
                <img alt="" src="images/openedEye.svg" class="auth_page__opened_eye_img">
            </div>
            @error('password')
                <p class="auth_page__text_input__error_msg">{{ $message }}</p>
            @enderror


            <p class="auth_page__remember_me">

                <input type="checkbox" name="remember" id="remember"
                       class="auth_page__remember_me__checkbox"
                       value="1" {{ old('remember') ? 'checked' : '' }}>

                <label for="remember" class="auth_page__remember_me__label" >
                    Запомнить меня
                </label>
            </p>


            <button type="submit" name='submit' class="auth_page__button">
                Войти
            </button>
        </form>

        <a href="{{ route('account.forgotPassword.showForm') }}"
            class="auth_page__forgot_password__link">
            Забыли пароль?
        </a>


        <h1 class="mt50 mb0">Войти через</h1>

        <script src="//ulogin.ru/js/ulogin.js"></script>
        <div id="uLogin" class="auth_page__ulogin_div"
             data-ulogin="display=panel;theme=classic;fields=first_name,last_name;
            providers=vkontakte,odnoklassniki,yandex,mailru,google;
            hidden=;
            redirect_uri={{env('APP_URL')}}/u-login/response;mobilebuttons=0;">
        </div>

    </div>
@endsection
