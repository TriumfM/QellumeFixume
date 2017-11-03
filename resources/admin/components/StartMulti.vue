<script>
    export default {

		
        data: function() {
            return {
            	  ReadyPlayers:[],
                  bool:false, 
                  abc:[],
                  room_id:0,
                  loading:true,
            }
        },

        computed: {
           
        },

        created(){
            this.getReadyPlayers(); 

            this.abc = setInterval(function () {
                if(this.$store.state.room != null)
                {   
                    this.initGame();
                    this.getReadyPlayers(); 
                    // this.initGame(this.room_id);
                }

            }.bind(this), 100);

            console.log('hej');

        },
		mounted () {
    
        },

        methods:{       	

            getReadyPlayers:function() {

                this.$http.get('getReadyPlayers/'+this.room_id).then(function (response) {
                    this.ReadyPlayers=response.data;
                    this.bool = this.ReadyPlayers.length == this.$store.state.room.maxPlayers;
                });
            },
            startGame:function() {
                this.ReadyPlayers=[];
            },

            initGame: function () {
                this.room_id = this.$store.state.room.id;
                this.loading = false;

                Echo.private(`private-room.${this.room_id}`)
                    .listen('getPlayers', (e) => {

                        this.getReadyPlayers();
                    });

                clearInterval(this.abc);
            }

        },    	
    }
</script>

<template src="./templates/start_multi.html">

</template>

<style>
	
</style>