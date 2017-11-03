<script>
	export default {

 		data: function() {
            return {

            	rooms:[],
                players:[],
                searchInput:[],

                abc:[],

            }
        },

        mounted () {      
            
        },

        computed: {
            filteredList() {
                return this.rooms.filter(room => {
                return room.name.toLowerCase().includes(this.searchInput) || room.id.toString().includes(this.searchInput);
              })
            }  
        },
        created(){
            this.GetRooms();

            Echo.join('channel_getRoom')
            .listen('getRooms', (e) => {
               this.GetRooms();
               console.log(e);
            });
        },

        methods: {

            tableFilter: function (room) {
               return room.name.indexOf(this.searchInput) != -1 || room.id.indexOf(this.searchInput) != -1;
            },

            JoinRoom: function(param) {
                clearInterval(this.abc);

                this.$http.get('enterRoom/'+param).then(function (response) {

                    this.$store.commit('setRoom', response.data.room);
                    this.$store.commit('setGame', response.data.game);
                    
                });
            },

            GetRooms: function(){
                 this.$http.get('getRooms').then(function (response) {
                        this.rooms = response.data;
                    });
            }

        },
           

        filters: {
            toString1:function(value)
            {
                var a = value.toString().length;
                if(a==2)
                    return "Easy";
                if(a==3)
                    return "Medium";
                if(a==4)
                    return "Hard";
            },
        },
    }
    
</script>

<template  src="./templates/find_game.html">
</template>

<style>
</style>