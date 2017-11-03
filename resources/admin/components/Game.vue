
<script>

export  default {
        data: function() {
            return {
                tries:[],
                order:[],

                tryinfo:[],
                inputTry:[],
                bool:false,
                roomId:[],
                number:[],
                btnNewGame:false,


                errorInput:null,
                btnTryDisabled:[],
                infoInput:null,

                User:null,
                frmTry:true,
            };
        },
        
        mounted () {

            this.bool=this.$store.state.game.order == this.order;
            this.inputTry.length=0;
            this.btnTryDisable=true;
            // this.User=this.$store.state.
          
           
            // this.$http.get('getReadyPlayers/'+this.$store.state.room.id).then(function (response) {
            //         this.User = response.data;                    
            //     });

            setInterval(function () {

                if(this.inputTry==null)
                {
                    this.inputTry.length==0;
                }
                if(this.$store.state.room.number.toString().length == this.inputTry.toString().length)
                {
                    this.btnTryDisabled=false;
                }
                else
                {
                    this.btnTryDisabled=true;
                }

               // this.number=this.$store.state.room.number;
            }.bind(this), 1000);

        },
        
        methods: {
            getTries: function () {
                this.$http.get('getGameTries/'+this.$store.state.room.id).then(function (response) {

                        this.tries = response.data;
                });
             },

            SendTry:function() {

                this.bool = false;
                this.tryinfo.push({
                    number:this.inputTry,
                    game_id:this.$store.state.game.id,
                    lengthNumber:this.$store.state.room.number.toString().length});



                this.$http.post('/try', this.tryinfo[this.tryinfo.length-1]).then(function(response) {
                     this.infoInput=response.datanumber;

                    if(response.status==200)
                    {
                        this.$store.commit('setRoom', response.data['room']);
                    }

                    if(this.inputTry==this.$store.state.room.number )
                    {
                        var username=this.$localStorage.get('user');
                        this.infoInput=username+ " win this game!";
                        this.frmTry=false;
                        

                        swal(
                          username +' win this game',
                          '',
                          'info'
                        );
                       
                        this.btnNewGame=true;

                    }
                    this.inputTry=[];                  
                })

                this.getTries();

            },
        }
    }
    
</script>

<template  src="./templates/game.html">

</template>

<style>
	.game{}

</style>