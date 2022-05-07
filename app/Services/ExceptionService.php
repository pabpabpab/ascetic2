<?php


namespace App\Services;


use Illuminate\Support\Facades\Log;
use Exception;

class ExceptionService
{
    /**
     * Log and throw custom exception.
     *
     * @param \Exception $nativeException
     * @param string $customExceptionClass
     * @param string $customMessage
     * @return void
     */
    static public function logAndThrowCustomException(Exception $nativeException, string $customExceptionClass, string $customMessage): void
    {
        $message = $nativeException->getMessage()."\nin ".$nativeException->getFile()."\n#";
        Log::emergency($message);
        throw new $customExceptionClass($customMessage);
    }
}
