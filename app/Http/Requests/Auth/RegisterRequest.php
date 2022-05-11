<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'name' => '«Имя»',
            'email' => '«E-mail»',
            'password' => '«Пароль»',
        ];
    }

    /**
     * Get the validation error message.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'required' => 'Заполните :attribute.',
            'string' => 'Заполните :attribute.',
            'email' => 'Некорректный :attribute.',
            'max' => ':attribute должно быть не более :max символов.',
            'min' => 'Нужен :attribute не менее :min символов.',
            'unique' => 'Пользователь с таким e-mail уже существует.',
            'confirmed' => 'Неверно подтвержден :attribute.',
        ];
    }

    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator $validator
     * @return void
     *
     * @throws \Illuminate\Http\Exceptions\HttpResponseException
     */
    protected function failedValidation(Validator $validator): void
    {
        if (request()->expectsJson()) {
            $response = response()->json(['backValidatorErrors' => $validator->errors()]);
        } else {
            request()->flashOnly(['name', 'email']);
            $response = back()->withErrors($validator->errors());
        }

        throw new HttpResponseException($response);
    }
}
