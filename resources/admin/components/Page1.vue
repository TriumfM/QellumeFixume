<script>
	export default {
		
		data: function() {
            return {
            
            }
        },

		mounted () {

			this.$http.get('ses').then(function (response) {
                this.$localStorage.set('user', response.data);

            });	

        },
        methods:{

        },
	}
</script>

<template  src="./templates/page1_multi_or_singel.html">

</template>

<style>
	
</style>