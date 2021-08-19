<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class AppendPhotoException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'addSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка сохранения фото.'
        ]);
    }

}
