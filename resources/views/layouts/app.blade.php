<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link rel="stylesheet" href="{{ mix('css/index.css') }}">
    <script src="{{ mix('js2/index.js') }}" defer></script>

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
