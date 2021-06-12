<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRegisterRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ];
    }

    public function attributes()
    {
        return [
            'name' => '«Имя»',
            'email' => '«E-mail»',
            'password' => '«Пароль»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'заполните :attribute.',
            'string' => 'заполните :attribute.',
            'email' => 'некорректный :attribute.',
            'max' => ':attribute должно быть не более :max символов.',
            'min' => 'нужен :attribute не менее :min символов.',
            'unique' => 'пользователь с таким e-mail уже существует.',
            'confirmed' => 'неверно подтвержден :attribute.',
        ];
    }
}
