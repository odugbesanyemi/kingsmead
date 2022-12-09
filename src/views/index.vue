<template >
    <!-- hero section -->
    <section class="">
        <div class="relative bg-blue-900 -z-10">
            <Swiper :modules="modules" :slides-per-view="1" navigation class="h-screen" :autoplay='{
                "delay": 2500
            }'>
                <swiper-slide class="relative" v-for="item in slides">
                    <div class="relative h-full bg-purple-100">
                        <img src="../assets/images/kingsmead_front-page.jpg" class="w-full h-screen object-cover"
                            alt="">
                        <span
                            class="absolute bg-gradient-to-tr from-blue-900 to-blue-800/50 mix-blend-multiply  w-full h-full top-0"></span>
                        <div class="absolute top-1/2 -translate-y-1/2 w-10/12 md:w-8/12 xl:w-5/12 md:left-28 left-10">
                            <h1 class="text-5xl xl:text-8xl font-extrabold text-blue-50">{{ item.title }}</h1>
                            <div class="btn-group max-sm:flex-col flex flex-row my-8 text-3xl">
                                <button
                                    class="py-4 md:w-1/2 text-blue-800 bg-white rounded-full mr-4 hover:bg-transparent hover:text-white hover:ring ring-white">{{
                                            item.btn1.name
                                    }}</button>
                                <button
                                    class="py-4 md:w-1/2 max-sm:mt-5 text-white rounded-full mr-4 max-sm:ring hover:ring ring-white">{{
                                            item.btn2.name
                                    }}</button>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </Swiper>

        </div>
    </section>
    <!-- Video plaback section -->
    <section>
        <div class="relative bg-slate-50 min-h-5/6 md:py-20">
            <div class="md:max-w-7xl mx-auto md:flex">
                <div class="md:w-3/4 max-md:h-96 md:py-16">
                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
                <div class="content md:w-1/2 p-10 md:px-10 md:py-16 text-2xl text-blue-900">
                    <p class="text-gray-400 max-sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maiores magni voluptatibus error minus debitis, odio atque totam, modi animi exercitationem praesentium omnis maxime aperiam culpa ratione, esse dolore. Cumque!</p>
                    <p class="font-bold my-8">Enroll Today to Register your child and wards</p>
                    <div class="grid grid-cols-2">
                        <div class="bg-red-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                            <LightBulbIcon class="text-white w-10 h-10 mb-4"/>
                            <p class="text-white text-sm font-bold">Admission Guidlines</p>
                        </div>
                        <div class="bg-purple-500 flex md:border-l flex-col items-center justify-center p-10 hover:bg-opacity-90">
                            <UserGroupIcon class="text-white w-10 h-10 mb-4"/>
                            <p class="text-white text-sm font-bold">Pastoral Care Unit</p>
                        </div>
                        <div class="bg-blue-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                            <ArrowRightOnRectangleIcon class="text-white w-10 h-10 mb-4"/>
                            <p class="text-white text-sm font-bold">Portal Login</p>
                        </div>
                        <div class="bg-indigo-500 flex flex-col md:border-l items-center justify-center p-10 hover:bg-opacity-90">
                            <ChatBubbleBottomCenterIcon class="text-white w-10 h-10 mb-4"/>
                            <p class="text-white text-sm font-bold">Join Our community</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- partners section -->
    <section class="bg-blue-50">
        <div class=" md:max-w-7xl mx-auto md:py-36 py-20 max-md:px-10">
             <h2 class="text-5xl font-extrabold text-blue-800 mb-14">Accredited By:</h2>
             <div class="grid md:grid-cols-4 max-md:grid-cols-2 gap-5 group mix-blend-multiply justify-center">
                <div class="grayscale hover:grayscale-0 flex-col flex items-center justify-center">
                    <img src="../assets/logos/British_Council_logo.svg.png" alt="" >
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/cambridge.jpg" alt="">
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/Coat_of_arms_of_Nigeria.svg.png" alt="">
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/IELTS_logo.svg.png" alt="">
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/lagos-state.webp" alt="" class="w-full h-full object-cover">
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/neco.jfif" alt="" class="w-full h-full object-cover">
                </div>
                <div class="grayscale hover:grayscale-0 flex items-center justify-center">
                    <img src="../assets/logos/waec.jpg" alt="">
                </div>
             </div>
        </div>
    </section>
    <!-- contact section -->
    <section>
        <div class="bg-green-100">
            <div class="md:max-w-7xl mx-auto md:p-20 md:flex gap-2 md:gap-5">
                <div class="grid md:grid-cols-2 md:gap-5 grid-cols-1 md:w-1/2">
                    <div class="bg-white p-10 hover:shadow-xl text-center ">
                        <MapIcon class="w-10 h-10 mb-4 mx-auto text-blue-500"/>
                        <p class="text-gray-500">24, Agunfoye Road, Adamo, Ikorodu, lagos State</p>
                    </div>
                    <div class="bg-white p-10 hover:shadow-xl text-center ">
                        <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-green-500"/>
                        <p class="text-gray-500">Kingsmead.org@gmail.com</p>
                        <p class="text-gray-500">080234589123</p>
                        <p class="text-gray-500">080234589123</p>
                    </div>
                    <div class="bg-white p-10 hover:shadow-xl text-center ">
                        <MapIcon class="w-10 h-10 mb-4 mx-auto text-yellow-500"/>
                        <p class="text-gray-500">24, Agunfoye Road, Adamo, Ikorodu, lagos State</p>
                    </div>
                    <div class="bg-white p-10 hover:shadow-xl text-center ">
                        <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-purple-500"/>
                        <p class="text-gray-500">Kingsmead.org@gmail.com</p>
                        <p class="text-gray-500">080234589123</p>
                        <p class="text-gray-500">080234589123</p>
                    </div>
                </div>
                <div class="imgflexed md:w-1/2">
                    <div class="grayscale h-full ">
                        <img src="../assets/images/DSC_0515.jpg" alt="" class="w-full h-full object-cover rounded-br-3xl">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {LightBulbIcon,UserGroupIcon,ArrowRightOnRectangleIcon,ChatBubbleBottomCenterIcon,MapIcon} from '@heroicons/vue/24/outline'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export default {
    components: {
        Swiper, SwiperSlide,LightBulbIcon,UserGroupIcon,ArrowRightOnRectangleIcon,ChatBubbleBottomCenterIcon,MapIcon
    },
    data() {
        return {
            modules: [Autoplay, Navigation, Pagination],
            slides: [
                {
                    img: "",
                    title: "Leaning is not a CHOICE, it's a LIFE",
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
                    img: "",
                    title: "School of Your Child's DREAM",
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
                    img: "",
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