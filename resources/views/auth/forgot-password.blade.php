@extends('layouts.main-layout')

@section('title')Забыл пароль@endsection

@section('content')
    <h1>Забыли пароль?</h1>


    <table>
        <tr style="vertical-align:top;">
            <td style="width:300px;">

                <form action='{{route('forgotPassword.sendResetLink')}}' method='post'>
                    @csrf

                    <div style="font-size:13px;color:#000;">
                        Введите e-mail который Вы указали при регистрации,
                        отправим Вам ссылку для создания нового пароля.
                    </div>
                    <label for="email">E-mail</label><br>
                    <input type='email' name='email' id='email'
                           value="{{old('email')}}"
                           @error('email')style="border:2px solid #c06000;"@enderror required><br>
                    @error('email')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <button type="submit" name='submit' style="padding:10px 25px;margin:10px 0;">
                        Отправить
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

