<?php


namespace App\Services;


use App\Models\Product;
use App\Services\PhotoManager\PhotoTrait;
use Illuminate\Support\Facades\DB;

class ProductForceDeleteService
{
    use PhotoTrait;


    public function forceDeleteOne($productId): array
    {
        $product = Product::onlyTrashed()->find($productId);

        if (!$product) {
            return [
                'deleteSuccess' => false,
                'productName' => ''
            ];
        }

        $productName = $product->name;


        try {
            $photoNames = $this->_getPhotoNamesArray($product);
            foreach ($photoNames as $photoName) {
                $this->_deletePhotoFromDisk($productId, $photoName);
            }
        }
        catch (\Exception $e) {
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\DeletePhotoException',
                'DeletePhotoException occurs.'
            );
        }


        DB::beginTransaction();

        try {

            DB::table('photo')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_descriptions')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_materials')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_colors')
                ->where('product_id', $productId)
                ->delete();

            if ($product->forceDelete()) {
                DB::commit();
                return [
                    'deleteSuccess' => true,
                    'productName' => $productName
                ];
            }
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\DeleteProductException',
                'DeleteProductException occurs.'
            );
        }

        DB::rollback();
        return [
            'deleteSuccess' => false,
            'productName' => $productName
        ];
    }
}
