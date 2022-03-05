
@extends('layouts.main-layout')


@section('title')Регистрация@endsection

@section('content')
    <div class="auth_page">

        <h1 class="mt20 mb0">Войти или зарегистрироваться через</h1>

        <script src="//ulogin.ru/js/ulogin.js"></script>
        <div id="uLogin" class="auth_page__ulogin_div"
             data-ulogin="display=panel;theme=classic;fields=first_name,last_name;
            providers=vkontakte,odnoklassniki,yandex,mailru,google,youtube,livejournal;
            hidden=;
            redirect_uri={{env('APP_URL')}}/u-login/response;mobilebuttons=0;">
        </div>

    </div>

@endsection
