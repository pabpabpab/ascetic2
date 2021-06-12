<?php


namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

class AuthULoginRequest extends FormRequest
{

    // post-данные от сервиса ulogin.ru
    public function rules()
    {
        return [
            'token' => ['required', 'string'],
        ];
    }

    public function attributes()
    {
        return [
            'token' => 'Токен',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Не удалось получить данные от социальной сети.',
            'string' => 'Не удалось получить данные от социальной сети.',
        ];
    }
}
