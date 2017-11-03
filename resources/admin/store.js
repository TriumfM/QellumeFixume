import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
	state:{
		playersInRoom : [],
		idRoom : [],
		user:"Triumf ",

		room:null,
		game:[],

		msg:null,
		qelluar:null,
		boolean:true,


	},
    
	mutations: {
        setRoom(state, room) {
          state.room=room;
        },
        setGame(state, game) {
          state.game=game;
        },

        setMsg(state,msg)
        {
        	state.msg=msg;
        },
        setBoolean(state,boolean){
        	state.boolean=boolean;
        },
	},
    // getters: {
    //     getRoom(state) {
    //         return 
    //     }
    // }

})
