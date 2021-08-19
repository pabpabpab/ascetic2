<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class MovePhotoException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'moveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка переместить фото.'
        ]);
    }
}
