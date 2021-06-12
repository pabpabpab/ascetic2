<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<!--<meta name="csrf-token" content="{{ csrf_token() }}">-->
<!--<link rel="shortcut icon" href="logo.png" type="image/x-icon">-->
    <script src="https://kit.fontawesome.com/861e78b781.js" crossorigin="anonymous"></script>
<!--<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">-->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
<!--<title>{{env('APP_ADMIN_NAME')}}</title>-->
    <title>Admin area</title>
</head>
<body>
<div id="app">
    <app></app>
</div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
