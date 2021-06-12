<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class SaveUploadedPhotoException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'saveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка сохранения фото товара.'
        ]);
    }
}
