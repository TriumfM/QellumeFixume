<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';


    import HeaderComponent from '../components/includes/HeaderComponent.vue'

    import TextEditor from './helpers/TextEditor.vue'

    Vue.component('HeaderComponent',HeaderComponent);
    // Vue.component('PageOne',PageOne);

    export default {

        data: function() {
            return {
                  frmChoose:[],

            }
        },

        mounted () {
            this.frmChoose=false;

            if(this.$route.path=="/dashboard")
            {
                this.frmChoose=true;
            }

        },

    }


    new Vue({
        el: '#admin',

    })

  

</script>



<template>
	<div class="container1">
		<header-component></header-component>
		<div class="container">
    		<div class="starter-template">
                <router-view></router-view>
            </div>
        </div>
	</div>
</template>