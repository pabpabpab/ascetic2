<?php

namespace App\Rules;

use App\Models\Material;
use Illuminate\Contracts\Validation\Rule;

class NoProductsInTheMaterial implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */

    public function passes($attribute, $value): bool
    {
        $material = $value;
        return $material->products_count === 0;
    }


    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'В удаляемой категории не должно быть товаров.';
    }
}
