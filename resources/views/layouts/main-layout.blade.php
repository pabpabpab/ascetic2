<!doctype html>
<html lang="ru">
<head>
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

<!--
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
-->

    <link rel="stylesheet" href="{{ asset('css/fonts2.css') }}" />
    <link rel="stylesheet" href="{{ mix('css/index.css') }}">
    <script src="{{ mix('js2/index.js') }}" defer></script>

</head>
<body>

@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();
@endphp

@if ($currentRouteName === 'products.singlePhotoPage')
    @include('blocks.easy-top-menu')
@else
    @include('blocks.top-menu')
@endif

<main class="content_wrapper">
    @yield('content')
</main>


@include('blocks.viewed-products-summary')


@include('blocks.bottom-menu')

@if (session('flashMessage'))
    <div id="flashMessage">{{ session('flashMessage') }}</div>
@endif

</body>
</html>
