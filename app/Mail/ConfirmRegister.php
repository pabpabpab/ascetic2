<?php

namespace App\Mail;

// use Illuminate\Bus\Queueable;
// use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
// use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class ConfirmRegister extends Mailable
{
    //use Queueable, SerializesModels;
    //use SerializesModels;


    /**
     * This user instance will be available in mail blade template.
     */
    public $user;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $fakeUserId = $this->user->id + env('FAKE_ID_OFFSET');

        return $this->view('emails.confirm-registration')
            ->with([
                'userName' => $this->user->getUserName(),
                'confirmingUrl' => URL::signedRoute('account.register.confirm', ['fakeUserId' => $fakeUserId]),
            ]);
    }
}
