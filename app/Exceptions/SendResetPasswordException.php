<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class SendResetPasswordException extends Exception
{
    public function render($request): JsonResponse
    {
        return response()->json([
            'saveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка отправить письмо для сброса пароля.'
        ]);
    }
}


