<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class RotatePhotoException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'rotateSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка повернуть фото.'
        ]);
    }

}
