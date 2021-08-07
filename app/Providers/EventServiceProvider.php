<?php

namespace App\Providers;

use App\Events\ProductModifiedEvent;
use App\Events\UserRegisteredEvent;
use App\Listeners\ProductModifiedListener;
use App\Listeners\SendVerificationEmail;
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
        ],
        ProductModifiedEvent::class => [
            ProductModifiedListener::class,
        ],
        /*
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
