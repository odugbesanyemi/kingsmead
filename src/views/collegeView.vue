
<template>
    <NavbarComponentVue :class="{'fixed w-full top-0 bg-white/80 backdrop-blur-sm text-blue-900 z-20 transition-all duration-300':isFixed, 'bg-blue-900 text-white z-20 transition-all duration-300':!isFixed}" />
    <RouterView class="-z-20"/>
    <!-- add footer -->
    <footerComponentVue class=""/>
  </template>
  
  <style scoped>
  
  </style>
  <script>
  import { RouterView } from 'vue-router'
  import NavbarComponentVue from '../components/collegeViewNavbar.vue';
  import footerComponentVue from '../components/footerComponent.vue';
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