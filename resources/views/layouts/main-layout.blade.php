@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    if (!isset($jsAppName)) {
        $jsAppName = "menuApp.js";
    }
    $jsAppName = "js2/".$jsAppName;
@endphp
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
    <link rel="stylesheet" href="{{ mix('css/index.css') }}?t=@php echo time(); @endphp">
    <script src="{{ mix($jsAppName) }}?t=@php echo time(); @endphp" defer></script>
</head>
<body>

@include('menu.top-menu')

<main class="content_wrapper">
    @yield('content')
</main>

@include('blocks.viewed-products-summary')

@include('menu.bottom-menu')

@if (session('flashMessage'))
    <div id="flashMessage">{{ session('flashMessage') }}</div>
@endif

</body>
</html>
