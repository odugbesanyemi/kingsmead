
<template>
  <NavbarComponentVue class="bg-gray-700 z-40" :class="{'fixed w-full top-0 bg-gray-500/20 backdrop-blur-sm':isFixed}"/>
  <RouterView class="-z-20"/>
  <!-- add footer -->
  <footerComponentVue class=""/>
</template>

<style scoped>

</style>
<script>
import { RouterView } from 'vue-router'
import NavbarComponentVue from './components/NavbarComponent.vue';
import footerComponentVue from './components/footerComponent.vue';
export default{
  components:{
    NavbarComponentVue,footerComponentVue
  },
  data(){
    return{
      isFixed:false,
    }
  },
  methods: {
    handleScroll(){
      if(window.scrollY>50){
        if(!this.isFixed)
        this.isFixed = true
      }else{
        if(this.isFixed)
        this.isFixed = false
      }
    }
  },
  beforeMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
}
</script>