<script>
  export default {

 		data: function() {
            return {  
            	Level:[],


            }
        },
        methods: {
            Level_singel: function(param) {
        		
            this.$http.post('/singleStart',{level:param}).then(function(response) {
                
                this.$store.commit('setRoom', response.data['room']);
                this.$store.commit('setGame', response.data['game']);
                    
                })
            },
        }
    }
</script>

<template  src="./templates/singel_player.html">

</template>

<style>
	.singelplayer{margin-bottom: 100px;}

</style>