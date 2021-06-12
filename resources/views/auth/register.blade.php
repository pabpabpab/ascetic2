@extends('layouts.app')


@section('title')Регистрация@endsection

@section('content')
    <h1>Регистрация</h1>


    <table>
        <tr style="vertical-align:top;">
            <td style="width:300px;">

                <form action='{{route('register.store')}}' method='post'>
                    @csrf

                    <label for="name">Ваше имя</label><br>
                    <input type='text' name='name' id='name'
                           value="{{old('name')}}"
                           @error('name')style="border:2px solid #c06000;"@enderror required autofocus><br>
                    @error('name')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <label for="email">E-mail</label><br>
                    <input type='email' name='email' id='email'
                           value="{{old('email')}}"
                           @error('email')style="border:2px solid #c06000;"@enderror required><br>
                    @error('email')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <label for="password">Пароль</label><br>
                    <input type='password' name='password' id='password'
                           value="{{old('password')}}"
                           @error('password')style="border:2px solid #c06000;"@enderror required><br>
                    @error('password')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <label for="password_confirmation">Подтвердите пароль</label><br>
                    <input type='password' name='password_confirmation' id='password_confirmation'
                           value="{{old('password_confirmation')}}"
                           @error('password_confirmation')style="border:2px solid #c06000;"@enderror required><br>
                    @error('password_confirmation')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <button type="submit" name='submit' style="padding:10px 25px;margin:10px 0;">
                        Зарегистрироваться
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
    </table>

    @if (session('status'))
        <div style="background-color: #c0ced0; display: table; border-radius: 7px; padding: 15px; font-size: 15px; color: #000000;">
            {{ session('status') }}
        </div>
    @endif
@endsection
