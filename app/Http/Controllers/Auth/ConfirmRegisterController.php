<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class ConfirmRegisterController extends Controller
{

    /**
     * ЭТО ПЕРЕХОД ПО SIGNED URL ИЗ ПИСЬМА. ВЕРИФИЦИРУЕТСЯ ЕМАЙЛ ПОЛЬЗОВАТЕЛЯ.
     * Confirm user registration.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $fakeUserId
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function confirmRegister(Request $request, int $fakeUserId): RedirectResponse
    {
        $originalUserId = $fakeUserId - env('FAKE_ID_OFFSET');

        if (! $request->hasValidSignature()) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Ссылка больше не действительна. Пожалуйста введите логин и пароль.']);
        }

        $user = User::find($originalUserId);

        // если пользователь уже верифицировал емайл, то больше не пускать его по этой ссылке
        if (filled($user->email_verified_at)) {
            return redirect()->route('account.login.show')
                ->with(['authStatus' => 'Ссылка больше не действительна. Пожалуйста введите логин и пароль.']);
        }

        $user->markEmailAsVerified();

        Auth::login($user);

        return redirect()->route('my');
    }

}
