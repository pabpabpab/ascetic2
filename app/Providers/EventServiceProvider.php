<?php

namespace App\Providers;

use App\Events\ProductModifiedEvent;
use App\Events\UserIsLoggedInEvent;
use App\Events\UserRegisteredEvent;
use App\Listeners\ProductModifiedListener;
use App\Listeners\SendVerificationEmail;
use App\Listeners\SynchronizeFavoriteProducts;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        UserRegisteredEvent::class => [
            SendVerificationEmail::class,
            SynchronizeFavoriteProducts::class,
        ],
        ProductModifiedEvent::class => [
            ProductModifiedListener::class,
        ],
        /*
        UserIsLoggedInEvent::class => [
            SynchronizeFavoriteProducts::class,
        ],
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        */
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
