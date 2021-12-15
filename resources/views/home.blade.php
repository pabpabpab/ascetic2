@extends('layouts.main-layout')


@section('title')Личный кабинет@endsection


@section('content')

    @php
        $username = session('username');
        $admin = session('admin');
        $emailVerified = session('emailVerified');
    @endphp

    <h1>Привет {{ $username }}!</h1>
    @if ($admin)
        <div>Ты админ.</div>
    @else
        <div>Ты простой юзер.</div>
    @endif

    @if ($emailVerified)
        <div>Email подтвержден.</div>
    @else
        <div>
            <p>Email пока не подтвержден.</p>
            <p>
                На Ваш email было отправлено письмо с сылкой для подтверждения регистрации.
                Пожалуйста, проверьте Ваш email. Если письма нет, Вы можете запросить повторную его отправку.
            </p>

            <form method="POST" action="{{ route('verification.resend') }}">
                @csrf
                <button type="submit" name='submit' style="padding:10px 25px;margin:10px 0;">
                    Повторить отправку письма.
                </button>
            </form>
        </div>
    @endif

    @if (session('status'))
        <div style="background-color: #c0ced0; display: table; border-radius: 7px; padding: 15px; font-size: 15px; color: #000000;">
            {{ session('status') }}
        </div>
    @endif
@endsection
