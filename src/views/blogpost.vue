<template>
  <div class="bg-gray-50">
    <!-- page -title -->
    <div class="h-96 relative">
      <img :src="filteredPost.post_image" alt="" class="absolute w-full h-full object-cover">
      <span
        class="bg-gradient-to-tr from-blue-500 via-gray-500 to-blue-400 absolute inset-0 h-full w-full mix-blend-multiply"></span>
      <div
        class="content absolute top-1/2 left-1/2 text-white text-center -translate-y-1/2 -translate-x-1/2 max-md:w-full max-md:p-5">
        <p class="text-md mb-5">{{ new Date(filteredPost.post_date).toDateString() }}</p>
        <p class="text-5xl font-bold">{{ filteredPost.post_title }}</p>
      </div>
      <!-- <img src="../assets/icon_star.svg" alt="" class="inset-0 absolute"> -->
    </div>
    <!-- page content -->
    <div class="max-w-6xl mx-auto ">
      <div class="max-w-6xl mx-auto py-10 p-5 flex md:flex-row flex-col items-start relative -top-24">
        <div class="sidebar md:p-5 w-3/3 grid grid-cols-1 gap-5 max-md:order-last sticky top-16">
          <div class="planvisit p-10 bg-blue-900 text-blue-50 relative overflow-hidden">
            <span class="absolute opacity-10 top-0 left-28 bottom-0 z-0"><img src="../assets/kingsmead.svg" alt=""
                class="w-full h-full"></span>
            <h2 class="text-3xl mb-5">Need to ask Questions?</h2>
            <router-link to="/about/contact-us" class="text-xs flex gap-2 items-center">Contact us
              <ArrowRightIcon class="w-4" />
            </router-link>
          </div>
          <div class="planvisit p-10 bg-white text-blue-700 border-blue-100 border">
            <h2 class="text-3xl mb-5">Apply to Kingsmead Schools?</h2>
            <router-link to="/admissions/registration-form" class="text-xs flex gap-2 items-center">Apply
              <ArrowRightIcon class="w-4" />
            </router-link>
          </div>
          <div class="QuickLinks px-3">
            <h2 class="text-2xl text-gray-500 mb-5 ">Quick Links</h2>
            <div class="grid grid-cols-1 gap-3 text-sm">
              <router-link to="/about/history">About Kingsmead</router-link>
              <router-link to="/admissions/criteria-policy">Admissions</router-link>
              <router-link to="/academics/student-leadership">Academics</router-link>
              <router-link to="/academics/library">Library</router-link>
              <router-link to="/gallery/categories">Gallery</router-link>
            </div>
          </div>
        </div>
        <div class="py-5 w-full">
          <div class="post-content bg-white md:p-10 max-md:py-10 grid grid-cols-1 gap-4" v-html="filteredPost.post_content">
          </div>
          <div class="other-post mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-2">
            <div class="p-5 border  hover:border-blue-600 hover:shadow-2xl transition-all bg-white"
              v-for="item, i in featuredPosts" :key="i" v-if="featuredPosts.length"
              @click="this.$router.push({ path: `/news/${item.id}` })">
              <h2 class="text-2xl mb-3">{{ item.post_title }}</h2>
              <p class="text-slate-500">{{ new Date(item.post_date).toDateString() }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- go back -->

    <!-- more events -->
  </div>
  <loadingComponent v-if="isLoading"/>
</template>
<script>
import axios from 'axios'
import loadingComponent from '../components/loadingComponent.vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
export default {
  components: { ArrowRightIcon,loadingComponent },
  data() {
    return {
      post: {},
      allPosts: [],
      isLoading:false,
    }
  },
  methods: {
    async getPosts() {
      // console.log("Heeleo")
      try {
        const post_id = this.$route.params.id
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/post/${post_id}`)
        this.post = response.data[0]
        console.log(response.data[0])
      }
      catch (err) {
        console.log(err)
      }
    },
    getAllPosts() {
      axios.post(`${import.meta.env.VITE_SERVER_API_URL}/getpostsByStatus`, { status: 'published' })
        .then(result => {
          this.allPosts = result.data
        }).catch(err => {
          // 
        })
    },
  },
  updated() {
    document.title = `${this.filteredPost.post_title} | Kingsmead Schools`
  },
  async mounted() {
    this.isLoading = true,
    await this.getPosts()
    await this.getAllPosts()
    this.isLoading = false
  },
  computed: {
    filteredPost() {
      const paramsId = this.$route.params.id;
      const filteredArray = this.allPosts.filter(item => item.id == paramsId);
      return filteredArray.length > 0 ? filteredArray[0] : ''
    },
    featuredPosts() {
      return this.allPosts.filter(item => {
        return item.id != this.$route.params.id
      }).slice(0, 3)
    }
  }
}
</script>
<style lang="">
    
</style>