<?php

namespace App\Http\Requests\Admin;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;

class CategorySaveRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    /*
    public function authorize()
    {
        return true;
    }
   */
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // если в роуте uri как save/{id}
        // Get the REQUEST (GET/POST) variable
        // $id = app('request')->get('id');
        // $id = request()->input('id');

        // если в роуте uri как save/{category}
        // $category = $this->route('category');
        // или даже так $this->category
        /*
         * Once you did your explicit binding
         * you actually can get your model directly with $this.
         *
         * Передавать в ignore() model instance безопаснее
         */
        return [
            'name' => [
                'required',
                'min:2',
                'max:50',
                Rule::unique('categories', 'name')->ignore($this->category)
            ],
        ];
    }

    public function attributes()
    {
        return [
            'name' => '«Название категории»',
            // 'description' => '«Описание категории»',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'заполните :attribute.',
            'min' => 'поле :attribute должно быть не менее :min символов.',
            'max' => 'поле :attribute должно быть не более :max символов.',
            'unique' => 'категория с таким названием уже существует.',
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
        /*
        throw new HttpResponseException(
            response()->json([
                'validatorErrors' => $errors
            ],
            Response::HTTP_UNPROCESSABLE_ENTITY)
        );
        */
    }

}
