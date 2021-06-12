<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthEmailRequest extends FormRequest
{

    public function rules()
    {
        return [
            'email' => ['required', 'email'],
        ];
    }

    public function attributes()
    {
        return [
            'email' => '«E-mail»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'заполните :attribute.',
            'email' => 'некорректный :attribute.',
        ];
    }
}
