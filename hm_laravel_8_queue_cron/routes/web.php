<?php

use Illuminate\Support\Facades\Route;
use App\Jobs\SendingEmail;
use App\Models\giamdocModel;
use Illuminate\Queue\Queue;
use Illuminate\Support\Facades\Mail;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('sendMailQueue', function() {
    $mailForTesting = new SendingEmail();
    // dispatch($mailForTesting);  //  dispatch :cử đi
    dispatch($mailForTesting)->onQueue('sendEmailsAll');
});

Route::get('sendMailNormal', function () {
    $data = [];
        for ($i=0; $i <  20; $i++) { 
            Mail::send('sendMail', $data, function ($message) {
                $message->from('nguyenminhhieu28092001k3@gmail.com', 'HM test');
                $message->to('nguyenminhhieuk3@gmail.com', 'nguyen hieu');
                $message->subject('Hello');
            });
        }   
});
Route::get('test', function () {
    $giamdoc = new giamdocModel();
    $giamdoc->name ='teo';
    $giamdoc->save();
});
