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
    public function rules()
    {
        return [
            'category_id' => ['required', 'gt:0'],
            'name' => ['required', 'min:2', 'max:100'],
            'price' => ['required', 'numeric'],
            'description' => ['required', 'min:10'],
            'material_ids' => ['required'],
            'color_ids' => ['required'],
        ];
    }

    public function attributes()
    {
        return [
            'category_id' => '«Категория товара»',
            'name' => '«Название товара»',
            'description' => '«Описание товара»',
            'price' => '«Цена»',
            'material_ids' => '«Материал»',
            'color_ids' => '«Цвет»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'заполните :attribute.',
            'gt' => 'заполните :attribute.',
            'different' => 'заполните :attribute.',
            'min' => 'поле :attribute должно быть не менее :min символов.',
            'max' => 'поле :attribute должно быть не более :max символов.',
            'numeric' => 'неверное значение :attribute.',
        ];
    }


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
