@extends('layouts.main-layout')


@section('title')Личный кабинет@endsection


@section('content')
    <div class="my_page">
        <h1>Привет {{ session('username') }}!</h1>

        @if (session('authStatus'))
            <div class="my_page__auth_status">
                {{ session('authStatus') }}
            </div>
        @endif
    </div>
@endsection
