<?php

namespace App\Rules;

use App\Models\Color;
use Illuminate\Contracts\Validation\Rule;

class NoProductsInTheColor implements Rule
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

    public function passes($attribute, $value)
    {
        $color = $value;
        return $color->products_count === 0;
    }


    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'В удаляемой категории не должно быть товаров.';
    }
}
