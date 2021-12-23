<?php


namespace App\Mail;


use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class PasswordResetLink extends Mailable
{
    //use Queueable, SerializesModels;


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

        return $this->view('emails.password-reset-link')
                    ->with([
                        'userName' => $this->user->getUserName(),
                        'resetPasswordUrl' => URL::signedRoute('account.resetPassword.showForm',['fakeUserId' => $fakeUserId]
                        ),
                    ]);

        /*
         * 'resetPasswordUrl' => URL::temporarySignedRoute(
                    'account.resetPassword.showForm', now()->addHours(12), ['fakeUserId' => $fakeUserId]
                )
         */
    }
}
