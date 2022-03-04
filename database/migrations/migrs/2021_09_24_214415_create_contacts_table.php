<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('ignored');
            $table->unsignedSmallInteger('new_message_count');

            $table->unsignedBigInteger('initiator_user_id');
            $table->decimal('initiator_cookie', $precision = 14, $scale = 2);
            $table->string('initiator_name', 50);
            $table->string('initiator_email');
            $table->unsignedBigInteger('initiator_phone');

            $table->unsignedBigInteger('responder_user_id');

            $table->timestamps();
            $table->softDeletes();

            $table->index('updated_at', 'updated_at_idx');
            $table->index('initiator_user_id', 'initiator_user_id_idx');
            $table->index('initiator_cookie', 'initiator_cookie_idx');
            $table->index('initiator_phone', 'initiator_phone_idx');
            $table->index('initiator_email', 'initiator_email_idx');
            $table->index('responder_user_id', 'responder_user_id_idx');
            $table->index('ignored', 'ignored_idx');
        });
    }
*/

/*
 * 3 варианта вывести контакты с последними сообщениями в них
// ===================================================
SELECT m.text, m.status, c.id, c.phone, c.email
FROM messages m JOIN contacts c ON m.contact_id = c.id
WHERE m.id IN (SELECT MAX(id) FROM messages GROUP BY contact_id)
ORDER BY m.create_at DESC;

SELECT m.text, m.status, c.id, c.phone, c.email
FROM messages m JOIN contacts c ON m.contact_id = c.id
GROUP BY m.contact_id
ORDER BY m.create_at DESC;

SELECT c.id, c.phone, c.email, m.text, m.status,
FROM contacts c LEFT JOIN messages m ON c.id = m.contact_id
WHERE m.id IN (SELECT MAX(id) FROM messages GROUP BY contact_id)
ORDER BY c.update_at DESC;
// ===================================================
*/

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    /*
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
    */
}


// php artisan make:migration create_contacts_table


// php artisan make:migration create_messages_table

