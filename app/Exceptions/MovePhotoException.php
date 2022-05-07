<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class MovePhotoException extends Exception
{
    /**
     * Render the exception into an HTTP json response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'moveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка переместить фото.'
        ]);
    }
}
