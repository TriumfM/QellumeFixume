<script>
    export default {

    		data: function() {
            return {
                players:[],
                tries:[],
                order:0,

                tryinfo:[],
                inputTry:null,
                bool:false,
                room_id:0,
                game_order:[],

                initGameInRoom:[],
            }
        },

        created() {

            // this.getPlayersInRoom();


            // this.initGameInRoom = setInterval(function () {
            //     if(this.$store.state.game.order!=null && this.order!=null && this.$store.state.room.id)
            //     {
            //         this.initGame();
            //     }

            // }.bind(this), 100);
            // // this.GetRoomOrder();
            // // this.getTries(); 

            // // this.interval_RoomID = setInterval(function () {
            // //       if(this.$store.state.room != null)
            // //       {   
            // //           this.initGame();
                      
            // //       }

            // // }.bind(this), 10);

        },

        mounted () {

            this.getTries();

            this.initGameInRoom = setInterval(function () {
                if(this.$store.state.game.order!=null && this.order!=0 && this.$store.state.room.id)
                {
                    this.initGame();
                }
            }.bind(this), 100);

            

            // Echo.private(`channel_getOrderInRoom`)
            //     .listen('getOrderInRoom', (e) => {
            //          console.log("asdad");
            //          this.getTries();
                   
            //     });

            // this.getTries();
            this.GetRoomOrder();
            this.getPlayersInRoom();

            
                
        },

        methods:{

            getTries:function() {
                this.$http.get('getGameTries/'+this.$store.state.room.id).then(function (response) {
                    this.tries = response.data;

                });
             },

            getPlayersInRoom:function () {
                this.$http.get('getReadyPlayers/'+this.$store.state.room.id).then(function (response) {
                    this.players = response.data; 

                });
             },

            SendTry:function() {

                this.bool = false;
                this.tryinfo.push({
                    number:this.inputTry,
                    game_id:this.$store.state.game.id,
                    lengthNumber:this.$store.state.room.number.toString().length
                });

                this.$http.post('/try', this.tryinfo[this.tryinfo.length-1]).then(function(response) {
                  if(response.data.fitore)
                  {
                      console.log('ju keni Triumfuar!')
                  }

                });

                console.log('dadadad');


             },

            GetRoomOrder:function(response) {
                this.$http.get('getRoom/'+this.$store.state.room.id).then(function (response) {
                    this.order = response.data.orders;
                    this.bool=this.$store.state.game.order == this.order;
                    console.log(this.order);
                });
                
            },

            initGame:function() {
                this.GetRoomOrder();

                this.room_id =this.$store.state.room.id ;
                this.game_order=this.$store.state.game.order;
                this.bool=this.$store.state.game.order == this.order;

                console.log(this.room_id);

                Echo.private(`channel_getTries.${this.room_id}`)
                .listen('getTries', (e) => {
                     console.log("asdad");
                     this.getTries();
                     this.GetRoomOrder();
                   
                });

                clearInterval(this.initGameInRoom);

            }       
        },

    }

</script>

<template src="./templates/game_multi_player.html">
</template>

<style>
</style>