<template>
    <div class="event-header relative h-72 ">
      <img src="../assets/images/staff1.jpeg" alt="" class="w-full h-full object-cover object-top">
      <span class="absolute inset-0 bg-black/20 backdrop-blur-md"></span>
      <div class="content absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h2 class="text-6xl text-white">Kingsmead News</h2>
      </div>
    </div>
    <div class="bg-slate-100">
      <div class="max-w-6xl mx-auto py-10 p-5">
        <!-- <Swiper :modules="modules" :slides-per-view="1" navigation class="h-80" :autoplay='{ "delay": 4500 }'
          :pagination="{ clickable: true }">
          <swiper-slide class="relative " v-for="event in featured">
            <div class="relative h-full bg-purple-100">
              <img src="../assets/images/kingsmead_front-page.jpg" class="w-full h-full object-cover object-top" alt="">
              <span class="bg-black/50 absolute h-full w-full inset-0 mix-blend-multiply"></span>
              <div class="absolute bottom-5 w-full py-5 px-10 text-white">
                <h1 class="text-4xl">{{ event.title }}</h1>
                <p class="md:w-1/2 py-3">{{ event.desc }}</p>
                <p class="font-bold">{{ event.date }}</p>
              </div>
            </div>
          </swiper-slide>
        </Swiper> -->
        <div class="py-5">
          <div class="event bg-white p-8  mt-5">
            <h2 class="text-2xl">Tinubu Memorial Visits</h2>
            <p class="text-slate-500 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, veniam
              quisquam. Facilis recusandae aperiam inventore corrupti facere accusamus. Voluptatibus debitis quos eum
              provident maiores asperiores saepe, explicabo nam inventore magni.</p>
            <p class="text-slate-700">24th September, 2023</p>
            <span class="my-5 p-3 gap-4 bg-slate-200 inline-block">
              <router-link to="/" class="">Read More</router-link> <ChevronRightIcon class="w-6 h-6 inline-block"/>
            </span>
          </div>
          
          <div class="footer ">
            <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              aria-label="Pagination">
              <div class="hidden sm:block">
                <p class="text-sm text-gray-700">
                  Showing
                  {{ ' ' }}
                  <span class="font-medium">1</span>
                  {{ ' ' }}
                  to
                  {{ ' ' }}
                  <span class="font-medium">10</span>
                  {{ ' ' }}
                  of
                  {{ ' ' }}
                  <span class="font-medium">20</span>
                  {{ ' ' }}
                  results
                </p>
              </div>
              <div class="flex-1 flex justify-between sm:justify-end">
                <a href="#"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous </a>
                <a href="#"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next </a>
              </div>
            </nav>  
          </div>
        </div>
      </div>
    </div>
  
  </template>
  <script>
  import {ChevronRightIcon} from "@heroicons/vue/24/solid"
  import { Navigation, Pagination, Autoplay } from 'swiper'
  import { Swiper, SwiperSlide } from "swiper/vue"
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/autoplay'
  export default {
    components: { Swiper, SwiperSlide, Navigation, Pagination, Autoplay,ChevronRightIcon },
    data() {
      return {
        featured: [
          {
            img: "",
            title: "Home Coming",
            desc: "Home coming is an event giving due time let all student come back from their holidays signup to join the event",
            date: new Date(1990, 11, 23),
          },
          {
            img: "",
            title: "Home Coming 2",
            desc: "Home coming 2 is an event giving due time let all student come back from their holidays signup to join the event",
            date: "24th Sept, 2024",
          }
        ]
      }
    }
  }
  </script>
  