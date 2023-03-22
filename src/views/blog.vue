<template>
  <div class="event-header relative h-72 ">
    <img src="../assets/images/staff1.jpeg" alt="" class="w-full h-full object-cover object-top">
    <span class="absolute inset-0 bg-black/20 backdrop-blur-sm mix-blend-multiply"></span>
    <div class="content absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
      <h2 class="md:text-6xl text-4xl text-white">Kingsmead News</h2>
    </div>
  </div>
  <div class="bg-gray-50">
    <div class="max-w-6xl mx-auto py-10 p-5 flex md:flex-row flex-col relative -top-24">
      <div class="sidebar md:p-5 w-3/3 grid grid-cols-1 gap-5 max-md:order-last">
        <div class="planvisit p-10 bg-blue-900 text-blue-50 relative overflow-hidden" >
          <span class="absolute opacity-10 top-0 left-28 bottom-0 z-0"><img src="../assets/kingsmead.svg" alt="" class="w-full h-full"></span>
          <h2 class="text-3xl mb-5">Need to ask Questions?</h2>
          <router-link to="/about/contact-us" class="text-xs flex gap-2 items-center">Contact us <ArrowRightIcon class="w-4"/> </router-link >
        </div>
        <div class="planvisit p-10 bg-white text-blue-700 border-blue-100 border">
          <h2 class="text-3xl mb-5">Apply to Kingsmead Schools?</h2>
          <router-link to="/admissions/registration-form" class="text-xs flex gap-2 items-center">Apply <ArrowRightIcon class="w-4"/></router-link >
        </div>
        <div class="QuickLinks px-3">
          <h2 class="text-2xl text-gray-500 mb-5 ">Quick Links</h2>
          <div class="grid grid-cols-1 gap-3 text-sm">
            <router-link to="/about/history">About Kingsmead</router-link>
            <router-link to="/admissions/criteria-policy">Admissions</router-link>
            <router-link to="/academics/student-leadership">Academics</router-link>
            <router-link to="/academics/library">Library</router-link>
            <router-link to="/gallery/category">Gallery</router-link>
            <router-link to="/events">Our Events</router-link>
          </div>
        </div>
      </div>
      <div class="py-5 w-full">
        <div class="event bg-white grid grid-cols-1 gap-4">
          <div class="content border-b border-b-blue-900/10 text-xs  p-5 hover:border-l-4 transition-all border-blue-900" v-for="post,i in posts.slice(pagination.currPage * pagination.limit,(pagination.currPage + 1 )* pagination.limit )" :key="i">
            <router-link :to="/news/+ post.id">
              <h2 class="text-2xl">{{post.post_title}}</h2>
              <p class="text-slate-500 py-3">{{post.post_excerpt}}</p>
              <p class="text-slate-700">{{new Date(post.post_date).toLocaleString()}}</p>
            </router-link>
          </div>
          <div class="p-10" v-if="!posts.length">
            <h2 class="text-3xl">Nothing to see here!</h2>
            <button @click="$router.go(-1)">go back</button>
          </div>
        </div>
        <div class="footer ">
          <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            aria-label="Pagination">
            <div class="hidden sm:block">
              <p class="text-sm text-gray-700">
                Showing
                {{ ' ' }}
                <span class="font-medium">{{ pagination.currPage * pagination.limit + 1  }}</span>
                {{ ' ' }}
                to
                {{ ' ' }}
                <span class="font-medium">{{(pagination.currPage + 1) * pagination.limit >posts.length?posts.length:(pagination.currPage +1 )*pagination.limit}}</span>
                {{ ' ' }}
                of
                {{ ' ' }}
                <span class="font-medium">{{posts.length}}</span>
                {{ ' ' }}
                results
              </p>
            </div>
            <div class="flex-1 flex justify-between sm:justify-end">
              <button href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" :disabled="pagination.currPage <= 0" @click="pagination.currPage--" >
                Previous </button>
              <button href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" :disabled="posts.length <= pagination.currPage+1 * pagination.limit" @click.prevent=" pagination.currPage++">
                Next </button>
            </div>
          </nav>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ChevronRightIcon,ArrowRightIcon } from "@heroicons/vue/24/solid"
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export default {
  components: { Swiper, SwiperSlide, Navigation, Pagination, Autoplay, ChevronRightIcon,ArrowRightIcon },
  data() {
    return {
      posts:[],
      pagination:{
        currPage:0,
        limit:10,
      }
    }
  },   methods: {
      getAllPosts() {
         axios.post(`${import.meta.env.VITE_SERVER_API_URL}/getpostsByStatus`,{status:'published'})
            .then(result=>{
                this.posts = result.data
            }).catch(err=>{
                // 
            })
      },

   },
   mounted() {
      this.getAllPosts()
   },
}
</script>
  