<?php


namespace App\Services\User;


use App\Events\UserRegisteredEvent;
use App\Mail\PasswordResetLink;
use App\Models\User;
use App\Services\ExceptionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class SaveByAdminService
{
    /**
     * Create/update one user.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return array
     */
    public function saveOne(Request $request, $user = null): array
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
                Mail::to($user)->send(new PasswordResetLink($user));
                //$content = (new PasswordResetLink($user))->render();
                //info($content);
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


    /**
     * Create new use.
     *
     * @param \Illuminate\Http\Request $request
     * @return \App\Models\User
     */
    protected function _createUser(Request $request): User
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

    /**
     * Update user's email.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return void
     */
    protected function _editEmail(Request $request, User $user): void
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

    /**
     * Update user's role.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return void
     */
    protected function _editRole(Request $request, User $user): void
    {
        $user->role = $request->role === 'admin' ? 'admin' : 'user';
        $user->save();
    }

    /**
     * Update user's email.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return void
     */
    protected function _editPassword(Request $request, User $user): void
    {
        if (!empty($request->password)) {
            $user->password = Hash::make($request->password);
            $user->save();
        }
    }
}
