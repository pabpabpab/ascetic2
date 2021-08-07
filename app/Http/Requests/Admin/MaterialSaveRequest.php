<?php


namespace App\Http\Requests\Admin;


use App\Models\Color;
use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;

class MaterialSaveRequest extends FormRequest
{

    public function rules()
    {
        return [
            'name' => [
                'required',
                'min:2',
                'max:50',
                Rule::unique('materials', 'name')->ignore($this->material)
            ],
        ];
    }

    public function attributes()
    {
        return [
            'name' => '«Материал»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'заполните :attribute.',
            'min' => 'поле :attribute должно быть не менее :min символов.',
            'max' => 'поле :attribute должно быть не более :max символов.',
            'unique' => 'такой материал уже добавлен.',
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
