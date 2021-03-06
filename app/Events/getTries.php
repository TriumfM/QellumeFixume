<?php

namespace App\Events;

use App\Models\Room;
use App\User;
use App\Models\Game;
use App\Models\Tries;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class getTries implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * receiverId.
     *
     * @var receiverId
     */
    
    public $receiverId;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($receiverId)
    {
        $this->receiverId=$receiverId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel_getTries.' . $this->receiverId);
    }
}
