<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Support\Facades\Log;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $exception) {
            //
        });
    }


    // кастомный overridden
    public function report(\Throwable $exception)
    {
        // Remove stack-trace
        Log::error(
            sprintf(
                "\n%s: %s\nin %s:%d\n",
                get_class($exception),
                $exception->getMessage(),
                $exception->getFile(),
                $exception->getLine()
            )
        );
        //parent::report($exception);
    }


    // кастомный overridden
    public function render($request, \Throwable $exception)
    {
        if ($exception instanceof TokenMismatchException) {
            if ($request->wantsJson()) {
                return response()->json([
                    'saveSuccess' => false,
                    'customExceptionMessage' => 'Несоответствие защитного токена. Перезагрузите страницу.'
                ]);
            }  else {
                return back()->withErrors(['result' => 'Сервер закрыл сессию. Перезагрузите страницу.']);
            }
        }

        return parent::render($request, $exception);
    }


}
