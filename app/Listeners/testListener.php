<?php

namespace App\Listeners;

use App\Events\getRooms;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class testListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  getRooms  $event
     * @return void
     */
    public function handle(getRooms $event)
    {
        //
    }
}
