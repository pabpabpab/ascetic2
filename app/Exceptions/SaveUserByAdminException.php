<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class SaveUserByAdminException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'saveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка сохранения пользователя.'
        ]);
    }
}
