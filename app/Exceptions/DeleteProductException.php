<?php


namespace App\Exceptions;


use Exception;
use Illuminate\Http\JsonResponse;

class DeleteProductException extends Exception
{
    /**
     * Render the exception into an HTTP json response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function render(): JsonResponse
    {
        return response()->json([
            'deleteSuccess' => false,
            'customExceptionMessage' => 'Неудачная попытка удаления товара.'
        ]);
    }
}
