@extends('layouts.main')


@section('title')Создать новый пароль@endsection

@section('content')
    <h1>Создать новый пароль</h1>


    <table>
        <tr style="vertical-align:top;">
            <td style="width:300px;">

                <form action='{{route('resetPassword.update')}}' method='post'>
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">


                    <label for="email">E-mail</label><br>
                    <input type='email' name='email' id='email'
                           value="{{ $email ?? old('email') }}"
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


                    <label for="password_confirmation">Подтвердите пароль</label><br>
                    <input type='password' name='password_confirmation' id='password_confirmation'
                           @error('password_confirmation')style="border:2px solid #c06000;"@enderror required><br>
                    @error('password_confirmation')
                    <div style="font-size:13px;color:#c06000;">{{ $message }}</div>
                    @enderror


                    <button type="submit" name='submit' style="padding:10px 25px;margin:10px 0;">
                        Сохранить
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
@endsection
