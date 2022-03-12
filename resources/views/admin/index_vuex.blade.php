<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

<!--<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet">-->

    <link rel="stylesheet" href="{{ secure_asset('css/admin-fonts.css') }}" />
    <link rel="stylesheet" href="{{ secure_asset('css/admin.css') }}?t=@php echo time(); @endphp" />
    <title>Admin panel</title>
</head>
<body>
<div id="app">
    <app></app>
</div>

<script src="{{ secure_asset('admin-js/app.js') }}?t=@php echo time(); @endphp"></script>
</body>
</html>
