<template>
<div>
<div class="container">
 
</div>
   
</div>

</template>

<script>
export default {
    data:() => ({
        
    }),
    methods:{
        async getAllUser () {
            const user = await this.$axios.$get('user/all')
            console.log(user)
        }
    },
    mounted() {
        this.getAllUser()
    }
    
}
</script>
