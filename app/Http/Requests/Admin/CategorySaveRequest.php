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
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
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

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'name' => '«Название категории»',
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
            'min' => 'поле :attribute должно быть не менее :min символов.',
            'max' => 'поле :attribute должно быть не более :max символов.',
            'unique' => 'категория с таким названием уже существует.',
        ];
    }

    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
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
