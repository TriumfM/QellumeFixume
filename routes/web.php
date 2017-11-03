<?php

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

use App\Models\Room;
use App\User;
use App\Models\Game;
use App\Models\Tries;

// LOGIN ROUTES
Route::get('login','AuthController@showLoginForm');
Route::post('login','AuthController@authenticate');
Route::get('signUp','AuthController@showRegisterForm');
Route::post('signUp','AuthController@signUp');
Route::get('getRooms','MainController@getRooms');
Route::post('createRoom','MainController@createRoom');
Route::get('enterRoom/{id}','MainController@enterRoom');
Route::get('getReadyPlayers/{room_id}','MainController@getReadyPlayers');
Route::get('startGame/{room_id}','MainController@startGame');
Route::get('getGameTries/{room_id}','MainController@getGameTries');
Route::get('getRoom/{room}','MainController@getRoom');
Route::post('try','MainController@try');
Route::post('singleStart','MainController@singleStart');
Route::get('ses',function(){
    return session()->get('username');
});

Route::get('/test1',function (){
    // return "asd";
    function gjenero(){
    $a = rand(1,9);
    $b = $a;
     while ($b==$a) {
      $b = rand(1,9);     
     }
     $c=$a;
     while ($c==$a || $c== $b) {
      $c = rand(1,9);
     }
     $d=$a;
     while ($d==$a || $d== $b ||$d==$c) {
      $d = rand(1,9);
     }
     return $a.$b.$c;
     return $a.$b.$c.$d;
    }

    function testo ($a,$b){
        $fix = 0;
        $qell = 0;
     for ($i=0; $i < 3; $i++) { 
         if($a[$i]==$b[$i]){
             $fix++;
         }
         else if ($a[$i] == $b[0] || $a[$i] == $b[1] || $a[$i] == $b[2]){
             $qell++;
         }
     }
     return array('f' => $fix, 'q'=> $qell);
    }

    $asd = '457';
    $a = '000';
    $array = [];
    while($a != $asd){
        $a = gjenero();
        if(count($array)==0){
                $array[0] = $a;
                echo "<br> ". $a;
            }
        else{ 

            for ($i=0; $i < count($array) ; $i++) { 
                if($a != $array[$i]){
                    $test1 = testo($array[$i],$a);
                    $test2 = testo($array[$i],$asd);
                    if($test1 == $test2){
                        $array[count($array)] = $a;
                        echo "<br> ". $a;
                    }
                }

            }
        }
    }
    // echo "string";
    for ($i=0; $i < count($array); $i++) { 
        
        echo "<br>". $array[$i];
    }



});

Route::get('/test',function(){

    
    return Game::where('id','<','5')->get();

    return Auth::user();
    $users = Game::where('room_id',2)->with('tries','user','room')->get();
    return $users;
    // dd(json_decode($users));
    $fix = 0;
    $qell = 0;
    $a = '123';
    $b = '723';
        for ($i=0; $i < strlen($a); $i++) { 
            if($a[$i]==$b[$i]){
                $fix++;
            }
            else{
                for ($j=0; $j < strlen($a) ; $j++) { 
                    if($a[$i] == $b[$j])
                        $qell++;
                }
            }

        }
        return $fix . " te fiksuara dhe ".$qell . " te qelluara.";


});



// ADMIN ROUTES
Route::group(['middleware' => ['auth']], function () {

    Route::get('logout','AuthController@logout');
    Route::post('createRoom','MainController@createRoom');
    Route::get('enterRoom/{id}','MainController@enterRoom');
    Route::get('dashboard',function(){
        return view ('admin.dashboard');
    });

});














// Vue js route logic
Route::get('/{vue_capture?}', function () {

    $user = \Auth::user();

    if($user!= null){
        return redirect('dashboard');
    }
    else{
        return redirect('login');
    }
})->where('vue_capture','[\/\w\.-]*');

// WEBSITE ROUTES
//Route::get('/{vue_capture?}', function () {
//    return view('index');
//})->where('vue_capture', '[\/\w\.-]*');


// Auth::ro