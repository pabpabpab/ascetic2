@extends('layouts.app')

@section('title')Вход для пользователя@endsection

@section('content')
    <h1>Вход для пользователя</h1>


    <table>
        <tr style="vertical-align:top;">
            <td style="width:300px;">

                <form action='{{route('login.do')}}' method='post'>
                    @csrf


                    <label for="email">E-mail</label><br>
                    <input type='email' name='email' id='email'
                           value="{{ old('email') ?? session('email') }}"
                           @error('email')style="border:2px solid #c06000;"@enderror required><br>
                    @error('email')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <label for="password">Пароль</label><br>
                    <input type='password' name='password' id='password'
                           @error('password')style="border:2px solid #c06000;"@enderror required><br>
                    @error('password')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <input type="checkbox" name="remember" id="remember" value="1" {{ old('remember') ? 'checked' : '' }}>
                    <label for="remember">Запомнить меня</label><br>

                    <button type="submit" name='submit' style="padding:10px 25px;margin:10px 0;">
                        Войти
                    </button>
                </form>

            </td>


            <td style="padding:0 0 0 150px;">
                @if ($errors->any())
                    <ul style="color:#c06000;">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                @endif
            </td>

        </tr>

        <tr style="vertical-align:top;">
            <td colspan="2">
                <a href="{{ route('forgotPassword.showForm') }}">Забыли пароль?</a>
            </td>
        </tr>
    </table>



    <script src="//ulogin.ru/js/ulogin.js"></script>
    <div id="uLogin" style="padding: 20px 0;"
         data-ulogin="display=small;theme=classic;fields=first_name,last_name;
         providers=vkontakte,odnoklassniki,yandex,instagram,facebook,google;
         hidden=twitter,mailru,yandex,livejournal,openid,linkedin,youtube,webmoney,googleplus;
         redirect_uri=http%3A%2F%2F{{config("app.name")}}%2Fu-login%2Fresponse;mobilebuttons=0;"></div>
    </div>

    @if (session('status'))
        <div style="background-color: #c0ced0; display: table; border-radius: 7px; padding: 15px; font-size: 15px; color: #000000;">
            {{ session('status') }}
        </div>
    @endif
@endsection
