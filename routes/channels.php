<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

use App\Models\Game;
use App\Models\Tries;

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('channel_getRoom', function ($response) {
    return $response;
});

Broadcast::channel('channel_getOrderInGame', function ($response) {
    return $response;
});

Broadcast::channel('channel_try', function ($rooms) {
    return $rooms;
});

Broadcast::channel('private-room.{receiverId}', function ($user, $receiverId) {
     // this is just for debugging to allow anyone to listen on this channel
    // return true;

    $user_id = $user->id;
    $room_id = $receiverId;

    $a = Game::where('user_id',$user_id)->where('room_id',$room_id)->first();
    return $a!=null;
});

Broadcast::channel('channel_getTries.{receiverId}', function ($user, $receiverId) {

	$user_id = $user->id;
    $room_id = $receiverId;

    $a = Game::where('user_id',$user_id)->where('room_id',$room_id)->first();

    return $a!=null;
    
});