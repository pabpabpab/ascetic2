<div style="padding: 30px 50px;background-color: #c0ced0;color: #000000;font-size: 17px;">
    <a href="{{config('app.url')}}">{{ config('app.name') }}</a>
</div>
<div style="padding: 10px 50px;background-color: #f7fafc;color: #000000;font-size: 14px;">
    Здравствуйте, {{$userName}}, для завершения регистрации на сайте {{ config('app.name') }},
    пожалуйста, перейдите по ссылке <a href="{{$confirmingUrl}}">{{$confirmingUrl}}</a>
</div>
