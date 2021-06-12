<?php


namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

class AuthUpdatePasswordRequest extends FormRequest
{
    public function rules()
    {
        return [
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'confirmed'],
        ];
    }

    public function attributes()
    {
        return [
            'token' => 'токен',
            'email' => '«E-mail»',
            'password' => '«Пароль»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'некорректный :attribute.',
            'email' => 'некорректный :attribute.',
            'min' => 'нужен :attribute не менее :min символов.',
            'confirmed' => 'неверно подтвержден :attribute.',
        ];
    }
}
