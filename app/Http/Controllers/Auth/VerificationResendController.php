<?php


namespace App\Http\Controllers\Auth;


use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use App\Services\Auth\VerificationResendService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerificationResendController extends Controller
{
    /**
     * Assigning middleware to the controller's actions.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * ПО КНОПКЕ ПОВТОРИТЬ ОТПРАВКУ ПИСЬМА С verification link'ом.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function resend(Request $request): \Illuminate\Http\RedirectResponse
    {
        $user = Auth::user();

        if (blank($user)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Сессия недействительна. Перелогиньтесь пожалуйста.']);
        }

        // Если не прошло 60 секунд с последней отправки verification link'а
        if ((new VerificationResendService())->mailWasRecentlySent($user)) {
            return back()->with(['authStatus' => 'Письмо отправлено.']);
        }

        // обновить updated_at у юзера
        $user->touch();

        event(new UserRegisteredEvent($user));

        return back()->with(['authStatus' => 'Письмо отправлено.']);
    }
}
