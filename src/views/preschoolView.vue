
<template>
  <nav class="bg-white text-sm">
    <div class="w-10/12 mx-auto py-2 flex flex-row justify-between items-center px-3">
      <div class="max-md:hidden">
        <p class="text-slate-600 ">EMAIL</p>
        <p class="font-semibold">enquiries@Kingsmeadcollege.org</p>
      </div>
      <p class="border-l h-5 max-md:hidden"></p>
      <div class="">
        <p class="text-slate-600 ">PHONE</p>
        <p class="font-semibold ">(+234) 01 906 0000</p>
      </div>
      <p class="border-l h-5 max-md:hidden"></p>
      <div class="group relative">
        <span
          class="group-hover:before:absolute group-hover:before:inset-0 group-hover:before:w-full before:w-0 group-hover:before:bg-blue-100 group-hover:before:-z-10"></span>
        <p
          class="flex gap-1 max-md:p-2 p-2 px-3 text-sm rounded items-center bg-transparent border font-semibold border-blue-300/50 z-10 ">
          Student Portal
          <PlayIcon class="text-blue-400 w-5 " />
        </p>
      </div>
    </div>
  </nav>
  <NavbarComponentVue :is-fixed="isFixed" :class="{ 'fixed w-full top-0 bg-white/80 backdrop-blur-sm text-blue-900 z-20 transition-all duration-300 shadow-sm': isFixed, 'bg-blue-900 text-white z-20 transition-all duration-300': !isFixed }" />
  <RouterView  />
  <!-- add footer -->
  <footerComponentVue />
</template>

<style scoped>

</style>
<script>
import { RouterView } from 'vue-router'
import NavbarComponentVue from '../components/HomeViewNavbarComponent.vue';
import footerComponentVue from '../components/footerComponent.vue';
import { PlayIcon } from "@heroicons/vue/24/solid"
export default {
  components: {
    NavbarComponentVue, footerComponentVue, PlayIcon
  },
  data() {
    return {
      isFixed: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        if (!this.isFixed)
          this.isFixed = true
      } else {
        if (this.isFixed)
          this.isFixed = false
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>