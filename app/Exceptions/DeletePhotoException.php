<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class DeletePhotoException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'deleteSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка удаления фото.'
        ]);
    }

}
