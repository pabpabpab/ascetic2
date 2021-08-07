<?php


namespace App\Services;


use Illuminate\Support\Facades\Log;

class ExceptionService
{
    static public function logAndThrowCustomException($nativeException, $customExceptionClass, $customMessage)
    {
        $message = $nativeException->getMessage()."\nin ".$nativeException->getFile()."\n#";
        Log::emergency($message);
        throw new $customExceptionClass($customMessage);
    }
}
