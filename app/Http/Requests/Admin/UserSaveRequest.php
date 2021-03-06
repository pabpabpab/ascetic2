<?php


namespace App\Http\Requests\Admin;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserSaveRequest extends FormRequest
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
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($this->user)
            ],
            'password' => [
                //'string',
                //'min:6'
                Rule::requiredIf(!$this->user)
            ],
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
            'name' => '«Имя пользователя»',
            'email' => '«E-mail»',
            'password' => '«Пароль для входа»',
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
        $errors = $validator->errors();

        throw new HttpResponseException(
            response()->json([
                'backValidatorErrors' => $errors
            ])
        );
    }
}
