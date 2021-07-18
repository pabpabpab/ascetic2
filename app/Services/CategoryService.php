<?php


namespace App\Services;


use App\Models\Category;
use Illuminate\Support\Facades\Log;

class CategoryService
{
    public function saveOne($category, string $name): array {
        $model = $category->id > 0 ? $category : new Category();
        $model->name = $name;
        $model->position = $model->id > 0 ? $model->position : static::calcNewAddedPosition();
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }

    public function getAll()
    {
        return Category::query()
            ->orderBy('position', 'asc')
            ->get();
    }


    protected function calcNewAddedPosition(): int {
        return static::getMaxPosition() + 100;
    }


    protected function getMaxPosition(): int {
        $count = Category::count();
        if ($count === 0) {
            return 0;
        }
        $maxCategory = Category::query()
            ->orderBy('position', 'desc')
            ->first();
        return $maxCategory->position;
    }


    public function upPosition($currentCategory): array {
        $currentPosition = $currentCategory->position;

        $previousCategory = Category::query()
            ->where('position', '<', $currentPosition)
            ->orderBy('position','desc')
            ->first();

        if (!$previousCategory) {
            return ['success' => false];
        }

        $previousPosition = $previousCategory->position;

        $currentCategory->position = $previousPosition;
        $previousCategory->position = $currentPosition;

        return [
            'success' => $currentCategory->save() && $previousCategory->save()
        ];
    }


    public function downPosition($currentCategory): array {
        $currentPosition = $currentCategory->position;

        $nextCategory = Category::query()
            ->where('position', '>', $currentPosition)
            ->orderBy('position','asc')
            ->first();

        if (!$nextCategory) {
            return ['success' => false];
        }

        $nextPosition = $nextCategory->position;

        $currentCategory->position = $nextPosition;
        $nextCategory->position = $currentPosition;

        return [
            'success' => $currentCategory->save() && $nextCategory->save()
        ];
    }

}
