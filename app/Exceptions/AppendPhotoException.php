<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class AppendPhotoException extends Exception
{
    /**
     * Render the exception into an HTTP json response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'addSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка сохранения фото.'
        ]);
    }

}
