<?php


namespace App\Services\Product;


use App\Models\Product;
use App\Services\ExceptionService;
use App\Services\PhotoManager\PhotoTrait;
use Illuminate\Support\Facades\DB;

class ForceDeleteService
{
    use PhotoTrait;

    /**
     * Force deleting the specified product.
     *
     * @param int $productId
     * @return array
     */
    public function forceDeleteOne(int $productId): array
    {
        $product = Product::onlyTrashed()->find($productId);

        if (!$product) {
            return [
                'deleteSuccess' => false,
                'productName' => ''
            ];
        }

        $productName = $product->name;

        // $photoNameArr для удаления файлов фото
        [$photoNameArr, $photoAltArr] = $this->_getPhotoNamesAndAltsAsArrays($product);


        DB::beginTransaction();

        try {

            foreach ($product->photo as $photo) {
                $photo->seoText()->delete();
            }

            DB::table('products_seo_texts')
                ->where('product_id', $productId)
                ->delete();

            DB::table('photo')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_descriptions')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_categories')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_materials')
                ->where('product_id', $productId)
                ->delete();

            DB::table('products_colors')
                ->where('product_id', $productId)
                ->delete();

            DB::table('users_favorite_products')
                ->where('product_id', $productId)
                ->delete();

            if ($product->forceDelete()) {
                DB::commit();
                foreach ($photoNameArr as $photoName) {
                    $this->_deletePhotoFromDisk($productId, $photoName);
                }
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
