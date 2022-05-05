<?php


namespace App\Services\Category;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;

class CategoryService
{
    /**
     * The difference between the previous and next position value.
     *
     * @var int
     */
    protected $positionStep = 10;

    /**
     * Creating new category.
     *
     * @param string $modelClassName
     * @param string $name
     * @return array
     */
    public function createOne(string $modelClassName, string $name): array
    {
        $model = new $modelClassName();
        $model->name = $name;
        $model->slug = Str::slug($name, '-');
        $model->position = static::calcNewAddedPosition($modelClassName);
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }

    /**
     * Updating new category.
     *
     * @param \App\Models\Category|\App\Models\Material|\App\Models\Color $model
     * @param string $name
     * @return array
     */
    public function saveOne($model, string $name): array
    {
        $model->name = $name;
        $model->slug = Str::slug($name, '-');
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }

    /**
     * Get listing of categories.
     *
     * @param string $modelClassName
     * @return \Illuminate\Support\Collection
     */
    public function getAll(string $modelClassName): Collection
    {
        return $modelClassName::query()
            ->orderBy('position', 'asc')
            ->get();
    }

    /**
     * Calculate the position value for the newly created category.
     *
     * @param string $modelClassName
     * @return int
     */
    protected function calcNewAddedPosition(string $modelClassName): int
    {
        return static::getMaxPosition($modelClassName) + $this->positionStep;
    }

    /**
     * Get maximum position value in database.
     *
     * @param string $modelClassName
     * @return int
     */
    protected function getMaxPosition(string $modelClassName): int
    {
        $count = $modelClassName::count();
        if ($count === 0) {
            return 0;
        }
        $maxModel = $modelClassName::query()
            ->orderBy('position', 'desc')
            ->first();
        return $maxModel->position;
    }

    /**
     * Exchange of position values for the current and previous records.
     *
     * @param string $modelClassName
     * @param \App\Models\Category|\App\Models\Material|\App\Models\Color $currentModel
     * @return array
     */
    public function upPosition(string $modelClassName, $currentModel): array
    {
        $currentPosition = $currentModel->position;

        $previousModel = $modelClassName::query()
            ->where('position', '<', $currentPosition)
            ->orderBy('position', 'desc')
            ->first();

        if (!$previousModel) {
            return ['success' => false];
        }

        $previousPosition = $previousModel->position;

        $currentModel->position = $previousPosition;
        $previousModel->position = $currentPosition;

        return [
            'success' => $currentModel->save() && $previousModel->save()
        ];
    }

    /**
     * Exchange of position values for the current and next records.
     *
     * @param string $modelClassName
     * @param \App\Models\Category|\App\Models\Material|\App\Models\Color $currentModel
     * @return array
     */
    public function downPosition(string $modelClassName, $currentModel): array
    {
        $currentPosition = $currentModel->position;

        $nextModel = $modelClassName::query()
            ->where('position', '>', $currentPosition)
            ->orderBy('position','asc')
            ->first();

        if (!$nextModel) {
            return ['success' => false];
        }

        $nextPosition = $nextModel->position;

        $currentModel->position = $nextPosition;
        $nextModel->position = $currentPosition;

        return [
            'success' => $currentModel->save() && $nextModel->save()
        ];
    }

    /**
     * Assign a position for the record located next to the specified record.
     *
     * @param string $modelClassName
     * @param \App\Models\Category|\App\Models\Material|\App\Models\Color $currentModel
     * @return array
     */
    public function move(string $modelClassName, $currentModel): array
    {
        $closestTopCategoryId = request()->input('closestTopCategoryId');

        $closestTopPosition = $closestTopCategoryId === 0
            ? 0
            : $modelClassName::find($closestTopCategoryId)->position;


        //$closestTopModel = $modelClassName::find($closestTopCategoryId);
        $table = request()->input('entity');

        // сдвинуть все нижестоящие, чтобы освободить место для draggable категории
        DB::table($table)
            ->where('position', '>', $closestTopPosition)
            ->update(['position' =>  DB::raw('position + 10')]); // 10 - positionStep

        // назначить позицию следующую от позиции рядом с которой вставляем
        $currentModel->position = $closestTopPosition + $this->positionStep;

        return [
            'success' => $currentModel->save()
        ];
    }

}
