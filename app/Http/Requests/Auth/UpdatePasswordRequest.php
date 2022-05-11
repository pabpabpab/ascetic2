<?php


namespace App\Http\Requests\Auth;


use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'confirmed'],
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
            'token' => 'токен',
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
            'required' => 'некорректный :attribute.',
            'email' => 'некорректный :attribute.',
            'min' => 'нужен :attribute не менее :min символов.',
            'confirmed' => 'неверно подтвержден :attribute.',
        ];
    }
}
