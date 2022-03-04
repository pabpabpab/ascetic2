<?php


namespace App\Services\User;


use App\Events\UserRegisteredEvent;
use App\Mail\PasswordResetLink;
use App\Models\User;
use App\Services\ExceptionService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class SaveByAdminService
{
    public function saveOne($request, $user = null): array
    {

        DB::beginTransaction();

        try {

            if (blank($user)) {
                $user = $this->_createUser($request);
            } else {
                $methodName = "_".$request->editTask; // editEmail / editRole / editPassword
                $this->$methodName($request, $user);
            }

        } catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SaveUserByAdminException',
                'SaveUserByAdminException occurs.'
            );
        }


        try {
            if ($request->send_confirm_registration) {
                event(new UserRegisteredEvent($user));
            }
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SendConfirmRegistrationException',
                'SendConfirmRegistrationException occurs.'
            );
        }


        try {
            if ($request->send_reset_password) {
                // отправить письмо юзеру с reset link (с линком для создания нового пароля)
                //Mail::to($user->email)->send(new PasswordResetLink($user));
                $cntnt = (new PasswordResetLink($user))->render();
                //info($cntnt);
            }
        }
        catch (\Exception $e) {
            DB::rollback();
            ExceptionService::logAndThrowCustomException(
                $e,
                '\App\Exceptions\SendResetPasswordException',
                'SendResetPasswordException occurs.'
            );
        }


        DB::commit();

        return [
            'saveSuccess' => true,
            'user' => $user
        ];
    }


    protected function _createUser($request)
    {
        $user = new User();
        $user->fill($request->input());
        $user->role = $request->role === 'admin' ? 'admin' : 'user';
        $user->password = Hash::make($request->password);
        $user->save(); // теперь у $user есть id при create
        if ($request->email_verified) {
            $user->markEmailAsVerified();
        }
        return $user;
    }

    protected function _editEmail($request, $user)
    {
        $user->email = $request->email;
        $user->name = $request->name;
        $user->save();
        if ($request->email_verified) {
            $user->markEmailAsVerified();
        } else {
            $user->email_verified_at = null;
            $user->save();
        }
    }

    protected function _editRole($request, $user)
    {
        $user->role = $request->role === 'admin' ? 'admin' : 'user';
        $user->save();
    }

    protected function _editPassword($request, $user)
    {
        if (!empty($request->password)) {
            $user->password = Hash::make($request->password);
            $user->save();
        }
    }
}
