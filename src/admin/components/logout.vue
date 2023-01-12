<template></template>
<script>
import cookie from 'js-cookie'
export default{
    mounted(){
        // logout user session 
        cookie.remove('jwt','user')
        this.isloggedIn()
    }
}
</script>
