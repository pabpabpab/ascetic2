<?php


namespace App\Http\Requests\Admin;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductSaveRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'category_ids' => ['required'],
            'name' => ['required', 'min:2', 'max:100'],
            'price' => ['required', 'numeric'],
            'description' => ['required', 'min:10'],
            'material_ids' => ['required'],
            'color_ids' => ['required'],
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
            'category_ids' => '«Категория товара»',
            'name' => '«Название товара»',
            'description' => '«Описание товара»',
            'price' => '«Цена»',
            'material_ids' => '«Материал»',
            'color_ids' => '«Цвет»',
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
            'required' => 'заполните :attribute.',
            'different' => 'заполните :attribute.',
            'min' => 'поле :attribute должно быть не менее :min символов.',
            'max' => 'поле :attribute должно быть не более :max символов.',
            'numeric' => 'неверное значение :attribute.',
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
