<?php

namespace App\Listeners;

use App\Events\ProductModifiedEvent;
use App\Models\Product;
use App\Services\Product\ObserverService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProductModifiedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ProductModifiedEvent  $event
     * @return void
     */
    public function handle(ProductModifiedEvent $event)
    {
        $product = $event->product;
        ObserverService::saveProductsCountForCategory($product);
        ObserverService::saveProductsCountForMaterial($product);
        ObserverService::saveProductsCountForColor($product);
    }
}


// php artisan make:listener ProductModifiedListener --event=ProductModifiedEvent
