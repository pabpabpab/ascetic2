<div style="margin: 0;padding: 0;background-color: #ffffff;">
    <div style="padding: 30px 30px;background-color: #f0f0f0;color: #000000;font-size: 17px;">
        <a href="{{ config('app.url') }}" style="text-decoration: none; color: #000000;">{{ config('app.name') }}</a>
    </div>
    <div style="padding: 20px 30px;color: #000000;font-size: 16px;">
        Здравствуйте, {{ $userName }}, для завершения регистрации на сайте {{ config('app.name') }},
        пожалуйста, перейдите по ссылке <a href="{{ $confirmingUrl }}">{{ $confirmingUrl }}</a>
    </div>
    <div style="padding: 0 30px 20px 30px;color: #000000;font-size: 16px;">
        Если Вы не регистрировались на нашем сайте, просто проигнорируйте это письмо.
    </div>
</div>
