
<template>
  <nav class="bg-white border-b">
    <div class="w-10/12 mx-auto py-3 flex flex-row justify-between items-center px-3">
      <div class="max-md:hidden">
        <p class="text-slate-600 text-sm">EMAIL</p>
        <p class="font-semibold text-lg">enquiries@Kingsmeadcollege.org</p>
      </div>
      <p class="border-l h-5 max-md:hidden"></p>
      <div class="">
        <p class="text-slate-600 text-sm">PHONE</p>
        <p class="font-semibold text-lg max-md:text-sm">(+234) 01 906 0000</p>
      </div>
      <p class="border-l h-5 max-md:hidden"></p>
      <div class="group relative">
        <span
          class="group-hover:before:absolute group-hover:before:inset-0 group-hover:before:w-full before:w-0 group-hover:before:bg-blue-100 group-hover:before:-z-10"></span>
        <p
          class="flex gap-1 max-md:p-2 p-3 rounded bg-transparent border font-semibold border-blue-300/50 z-10 max-md:text-sm">
          Student Portal
          <PlayIcon class="text-blue-400 w-6 " />
        </p>
      </div>
    </div>
  </nav>
  <HomeNavbarComponentVue
    :class="{ 'fixed w-full top-0 bg-white/80 backdrop-blur-sm text-blue-900 z-20': isFixed, 'bg-gray-700 text-white z-20': !isFixed }" />
  <RouterView class="z-0" />
  <!-- add footer -->
  <footerComponentVue />
</template>

<style scoped>

</style>
<script>
import { RouterView } from 'vue-router'
import HomeNavbarComponentVue from '../components/HomeViewNavbarComponent.vue';
import footerComponentVue from '../components/footerComponent.vue';
export default {
  components: {
    HomeNavbarComponentVue, footerComponentVue
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