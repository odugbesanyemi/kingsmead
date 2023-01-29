
<template>
  <HomeNavbarComponentVue
    :class="{ 'fixed w-full top-0 bg-white/80 backdrop-blur-sm text-blue-900 z-20': isFixed, 'bg-gray-700 text-white z-0': !isFixed }" />
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