<?php

namespace App\Listeners;

use App\Events\UserRegisteredEvent;
use App\Mail\ConfirmRegister;
use Illuminate\Support\Facades\Mail;

// use Illuminate\Contracts\Queue\ShouldQueue;
// use Illuminate\Queue\InteractsWithQueue;

class SendVerificationEmail
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

        //info($user);

        //Mail::to($user->email)->send(new ConfirmRegistration($user));

        $cntnt = (new ConfirmRegister($user))->render();
        info($cntnt);
    }
}


// php artisan make:listener SendVerificationEmail --event=UserRegisteredEvent

