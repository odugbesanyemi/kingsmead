<template >
    <div>
        <router-view></router-view>
    </div>
</template>

<style lang="">
    
</style>
<script>
// we will run a test here to see if user is logged in
import cookie from 'js-cookie'
import loadingVue from './components/loading.vue'
export default {
    components: { loadingVue },
    data() {
        return {
            user: {}
        }
    },

}
</script>