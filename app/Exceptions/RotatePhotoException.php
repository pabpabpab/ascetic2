<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class RotatePhotoException extends Exception
{
    /**
     * Render the exception into an HTTP json response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'rotateSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка повернуть фото.'
        ]);
    }

}
