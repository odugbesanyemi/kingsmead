<template >
    <!-- hero section -->
    <section class="school title ">
        <div class="relative">
            <div class="h-72">
                <img src="/img/cultural4.jpeg" alt="" class="absolute w-full h-full object-cover">
            </div>
            <span class="absolute inset-0 w-full bg-black/10 backdrop-blur-sm"></span>
            <div class="w-4/5 mx-auto flex gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center">
                <div class="text-center w-9/12">
                    <p class="font-bold text-5xl mb-1 text-white">COLLEGE</p>
                    <p class="desc text-white">As an international school we are proud to provide the highest possible standard of
                        education to our students</p>
                </div>
                <div class="gap-4 text-white items-center w-3/12">
                    <p class="font-bold text-xl text-white flex items-center justify-center bg-blue-400"><span class="p-2 text-center">ADMISSION PROCEDURE</span> <ArrowRightOnRectangleIcon class="bg-blue-600 p-2 px-4 w-1/2" /></p>
                </div>
            </div>
        </div>
        
    </section>

</template>
<script>
import { LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon } from '@heroicons/vue/24/outline'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export default {
    components: {
        Swiper, SwiperSlide, LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon
    },
    data() {
        return {
            modules: [Autoplay, Navigation, Pagination],
            slides: [
                {
                    img: "/src/assets/images/DSC_0544.jpg",
                    title: "Learning is not a Choice, it's a Life",
                    btn1: {
                        name: "Learn More",
                        to: "/"
                    },
                    btn2: {
                        name: "Take a tour",
                        to: "/"
                    }
                },
                {
                    img: "/src/assets/images/DSC_0511.jpg",
                    title: "School of Your Child's Dream",
                    btn1: {
                        name: "Get Started",
                        to: "/"
                    },
                    btn2: {
                        name: "Call us Today",
                        to: "/"
                    }
                },
                {
                    img: "/src/assets/images/DSC_0515.jpg",
                    title: "Enroll Today to Begin Learning",
                    btn1: {
                        name: "Begin Today",
                        to: "/"
                    },
                    btn2: {
                        name: "Take a tour",
                        to: ""
                    }
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>