<?php

namespace App\Observers;

use App\Events\ProductModifiedEvent;
use App\Models\Product;

class ProductObserver
{

 /*
  * НЕ ДЕЛАТЬ ЗДЕСЬ НИЖЕУКАЗАННЫЕ СОБЫТИЯ, т.к. при сохранении product они происходят много раз
    creating : before a record has been created.
    created : after a record has been created.
    updating : before a record is updated.
    updated : after a record has been updated.
    saving : before a record is saved (either created or updated).
    saved : after a record has been saved (either created or updated).
    ProductModifiedEvent просто вызывается один раз в SaveService товара
*/

    public function deleting(Product $product)
    {
        // конечные действия в App\Listeners\ProductModifiedListener
        event(new ProductModifiedEvent($product));
    }

    public function deleted(Product $product)
    {
        // конечные действия в App\Listeners\ProductModifiedListener
        event(new ProductModifiedEvent($product));
    }

    public function restored(Product $product)
    {
        // конечные действия в App\Listeners\ProductModifiedListener
        event(new ProductModifiedEvent($product));
    }

    public function forceDeleted(Product $product)
    {
        // конечные действия в App\Listeners\ProductModifiedListener
        event(new ProductModifiedEvent($product));
    }
}

// php artisan make:observer ProductObserver --model=Product

/*
retrieved : after a record has been retrieved.
creating : before a record has been created.
created : after a record has been created.
updating : before a record is updated.
updated : after a record has been updated.
saving : before a record is saved (either created or updated).
saved : after a record has been saved (either created or updated).
deleting : before a record is deleted or soft-deleted.
deleted : after a record has been deleted or soft-deleted.
restoring : before a soft-deleted record is going to be restored.
restored : after a soft-deleted record has been restored.
*/
