<?php


namespace App\Http\Requests\Admin;


use App\Rules\NoProductsInTheCategory;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserSaveRequest2 extends FormRequest
{


    public function rules()
    {
        return [
            'category' => [
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
