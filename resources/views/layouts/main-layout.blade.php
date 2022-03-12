@php
    $currentRouteName = \Illuminate\Support\Facades\Route::currentRouteName();

    if (!isset($jsAppName)) {
        $jsAppName = "menuApp.js";
    }
    $jsAppName = "public-js/".$jsAppName;
@endphp
<!doctype html>
<html lang="ru">
<head>
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto:wght@300;400&display=swap" rel="stylesheet">

<!--<link rel="stylesheet" href="{{ secure_asset('css/public-fonts.css') }}" />-->
    <link rel="stylesheet" href="{{ secure_asset('css/public.css') }}?t=@php echo time(); @endphp">
    <script src="{{ secure_asset($jsAppName) }}?t=@php echo time(); @endphp" defer></script>
</head>
<body>

@include('menu.top-menu')

<div class="content_wrapper {{ $additionalContentWrapperCss }}">
    <main class="content_main_tag">
        @yield('content')
    </main>

    @include('blocks.viewed-products-summary')
</div>


@include('menu.bottom-menu')

@if (session('flashMessage'))
    <div id="flashMessage">{{ session('flashMessage') }}</div>
@endif


<div id="loadingScreen">Загрузка . . .</div>

</body>
</html>
