<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

<!--<script src="{{ asset('js/app.js') }}" defer></script>-->

    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="wrapper">

        <div class="header">
            @include('blocks.menu')
        </div>

        <main class="py-4">
            @yield('content')
        </main>

    </div>
</body>
</html>
