<template>
  <div class="event-header relative h-72 ">
    <img src="../assets/images/staff1.jpeg" alt="" class="w-full h-full object-cover object-top">
    <span class="absolute inset-0 bg-black/10 backdrop-blur-sm "></span>
    <div class="content absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
      <h2 class="md:text-6xl text-4xl text-white">Kingsmead Events</h2>
    </div>
  </div>
  <div class="bg-gray-50">
    <div class="max-w-6xl mx-auto py-10 p-5 flex md:flex-row flex-col relative -top-24">
      <div class="sidebar w-3/3 grid grid-cols-1 gap-5 max-md:order-last">
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
            <router-link to="/gallery/category">Gallery</router-link>
            <router-link to="/events">Our Events</router-link>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="settings bg-gray-700 p-2 flex justify-between items-center w-full text-white">
          <div>
            <p class="font-medium text-xl">All Events</p>
          </div>
          <div class="display-settings flex items-center space-x-3">
            <span>Display | </span>
            <span class="controls flex items-center space-x-3"><button class="flex items-center" @click="viewOptions.displayType='list'"><i class="fi fi-rr-list"></i></button> <button class="flex" @click="viewOptions.displayType='grid'"><i class="fi fi-br-layout-fluid"></i></button></span>
          </div>
        </div>
        <div class="p-5 bg-white grid grid-cols-3">
          <div class="gridElem">
            {{ viewOptions.displayType }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ChevronRightIcon, ArrowRightIcon } from "@heroicons/vue/24/solid"
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export default {
  components: { Swiper, SwiperSlide, Navigation, Pagination, Autoplay, ChevronRightIcon, ArrowRightIcon },
  data() {
    return {
      posts: [],
      pagination: {
        currPage: 0,
        limit: 10,
        viewOptions:{
          displayType:""
        }
      }
    }
  }, methods: {
    getAllPosts() {
      axios.post(`${import.meta.env.VITE_SERVER_API_URL}/getpostsByStatus`, { status: 'published' })
        .then(result => {
          this.posts = result.data
        }).catch(err => {
          // 
        })
    },

  },
  mounted() {
    this.getAllPosts()
  },
}
</script>
  