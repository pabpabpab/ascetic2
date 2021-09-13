<?php


namespace App\Services\Category;


use App\Models\Category;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CategoryService
{
    protected $positionStep = 10;


    public function saveOne($model, $modelClassName, string $name): array
    {
        $model = $model->id > 0 ? $model : new $modelClassName();
        $model->name = $name;
        $model->position = $model->id > 0 ? $model->position : static::calcNewAddedPosition($modelClassName);
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }

    public function getAll($modelClassName)
    {
        return $modelClassName::query()
            ->orderBy('position', 'asc')
            ->get();
    }


    protected function calcNewAddedPosition($modelClassName): int
    {
        return static::getMaxPosition($modelClassName) + $this->positionStep;
    }


    protected function getMaxPosition($modelClassName): int
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


    public function upPosition($modelClassName, $currentModel): array
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


    public function downPosition($modelClassName, $currentModel): array
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


    public function move($modelClassName, $currentModel): array
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
