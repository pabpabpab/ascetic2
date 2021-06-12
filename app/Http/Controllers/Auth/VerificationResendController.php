<?php


namespace App\Http\Controllers\Auth;


use App\Events\UserRegisteredEvent;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerificationResendController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    // ПО КНОПКЕ ПОВТОРИТЬ ОТПРАВКУ ПИСЬМА С verification link'ом
    public function resend(Request $request)
    {
        $user = Auth::user();

        if (blank($user)) {
            return redirect()->route('login.show')
                ->with(['status' => 'Сессия недействительна. Перелогиньтесь пожалуйста.']);
        }

        // Если не прошло 60 секунд с последней отправки verification link'а
        if ($this->_mailWasRecentlySent($user)) {
            return back()->with(['status' => 'Письмо отправлено.']);
        }

        // обновить updated_at у юзера
        $user->touch();


        event(new UserRegisteredEvent($user));

        return back()->with(['status' => 'Письмо отправлено.']);
    }


    // ПРОШЛО 60 СЕКУНД С ПОСЛЕДНЕГО ОБНОВЛЕНИЯ UPDATED_AT У ЮЗЕРА? (ПРОТЕКТЕД)
    protected function _mailWasRecentlySent($user) {
        $secondsLimit = 60;

        // updated_at из таблицы users переделать в timestamp
        $updated_at = Carbon::createFromFormat(
            'Y-m-d H:i:s',
            $user->updated_at
        )->timestamp;

        // timestamp сейчас
        $now = now()->timestamp;

        // не прошло 60 секунд с последнего обновления updated_at у юзера?
        if ($now - $updated_at < $secondsLimit) {
            return true;
        }

        // прошло больше чем 60 секунд с последнего обновления updated_at у юзера
        return false;
    }

}
