<?php


namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class SendResetPasswordException extends Exception
{
    /**
     * Render the exception into an HTTP json response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'saveSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка отправить письмо для сброса пароля.'
        ]);
    }
}


