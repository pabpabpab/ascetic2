<?php

namespace App\Http\Requests\Admin;

use App\Rules\NoProductsInTheCategory;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;
use Symfony\Component\Console\Input\Input;

class ColorDeleteRequest extends FormRequest
{


    protected function prepareForValidation(): void
    {
        $this->merge([
            'category' => $this->route('color'),
        ]);
    }


    public function rules()
    {
        return [
            'category' => [
                'required',
                new NoProductsInTheCategory()
            ],
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
