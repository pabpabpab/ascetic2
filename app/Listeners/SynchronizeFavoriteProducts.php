<?php

namespace App\Listeners;

use App\Events\UserRegisteredEvent;
use App\Services\User\FavoriteProductsSynchronizer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SynchronizeFavoriteProducts
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
     * @param  UserRegisteredEvent  $event
     * @return void
     */
    public function handle(UserRegisteredEvent $event)
    {
        $user = $event->user;

        // с фронта favoriteIds (которые могут быть) в реквест добавлен при register
        // для записи в бэк
        (new FavoriteProductsSynchronizer())
            ->mixFrontAndBackUserFavoriteIds($user->id, (string) request()->favoriteIds);
    }
}

// php artisan make:listener SynchronizeFavoriteProducts --event=UserRegisteredEvent
