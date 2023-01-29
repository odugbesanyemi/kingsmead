<template >
    <!-- hero section -->
    <div class="">
        <section class="relative">
            <Swiper :modules="modules" :slides-per-view="1"  class="md:h-screen " :autoplay='{ "delay": 1500 }'>
                <swiper-slide class="relative h-full" v-for="item in slides">
                    <div class="relative h-full">
                        <img :src="item.img" class="w-full md:h-screen object-cover" alt="" style="min-height:300px;">
                        <span class="absolute bg-gradient-to-tr from-blue-900 to-blue-800/20 max-md:hidden w-full h-full top-0 "></span>
                    </div>
                </swiper-slide>
            </Swiper>
            <div class="absolute z-10 bottom-0 max-md:bg-blue-900/80 max-md:p-3 max-md:w-full md:top-1/2 md:-translate-y-1/2 w-10/12 md:w-8/12 xl:w-6/12 md:left-28 ">
                <h1 class="text-4xl md:text-6xl xl:text-8xl text-blue-50 ">Learning is not a <span class="max-md:text-blue-300">Choice</span> , It's a Life</h1>
                <div class="btn-group my-8 text-lg relative max-md:hidden">
                    <Router-link to="/about"
                        class="md:py-4  p-3 px-16 md:w-2/5 max-md:inline-block bg-gradient-to-r from-blue-600 to-blue-900 rounded-full mr-4 hover:bg-transparent text-white text-center hover:ring ring-white">Get
                        Started</Router-link>
                    <Router-link to="/tour" class="md:py-4 p-3 px-16 md:w-2/5 max-sm:mt-5 max-md:inline-block text-white rounded-full mr-4 text-center">Take a tour</Router-link>
                </div>            
            </div>
        </section>
        <!-- Video plaback section -->
        <section id="tour">
            <div class="relative bg-slate-50 min-h-5/6 md:py-20">
                <div class="md:max-w-7xl mx-auto md:flex">
                    <div class="md:w-3/4 max-md:h-96 md:py-16 max-md:order-last">
                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div class="content md:w-1/2 p-5 md:px-10 md:py-16 text-2xl text-blue-900">
                        <p class="text-blue-900 md:text-md text-lg">Kingsmead school was established in July, 2017
                            to provide qualitative educational opportunity for increasing number of primary school leavers
                            within and outside Nigeria who have academic excellence as their focus.</p>
                        <Router-link to="/about/history">
                            <p
                                class="text-sm inline-block rounded-sm md:rounded-full p-2 px-8 my-4 shadow-sm hover:bg-blue-600 transition-all bg-blue-400 text-white">
                                Read more</p>
                        </Router-link>
                        <div class="grid grid-cols-2 ">
                            <Router-link to='/admissions/criteria-policy'
                                class="bg-red-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-red-600  transition-all m-2 rounded">
                                <LightBulbIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Admission Guidlines</p>
                            </Router-link>
                            <Router-link to="life-at-kingsmead/pastoral-unit"
                                class="bg-purple-500 flex md:border-l flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600">
                                <UserGroupIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Pastoral Care Unit</p>

                            </Router-link>
                            <Router-link to="/"
                                class="bg-blue-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:blue-600">
                                <ArrowRightOnRectangleIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Portal Login</p>
                            </Router-link>

                            <Router-link to="/Life-at-Kingsmead/Alumni"
                                class="bg-indigo-500 flex flex-col md:border-l items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600 m-2 rounded">
                                <ChatBubbleBottomCenterIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Join Our community</p>
                            </Router-link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- partners section -->
        <section class="bg-blue-50">
            <div class=" md:max-w-7xl mx-auto md:py-28 py-10 max-md:px-5">
                <h2 class="text-5xl text-blue-800 mb-14">Accredited By:</h2>
                <div class="grid md:grid-cols-4 max-md:grid-cols-2  group mix-blend-multiply justify-center">
                    <div class="grayscale hover:grayscale-0 flex-col flex items-center justify-center p-10 border">
                        <img src="../assets/logos/British_Council_logo.svg.png" alt="">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed">
                        <img src="../assets/logos/cambridge.jpg" alt="">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed">
                        <img src="../assets/logos/Coat_of_arms_of_Nigeria.svg.png" alt="">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed">
                        <img src="../assets/logos/IELTS_logo.svg.png" alt="">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed">
                        <img src="../assets/logos/lagos-state.webp" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed" >
                        <img src="../assets/logos/neco.jfif" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="grayscale hover:grayscale-0 flex items-center justify-center p-10 border border-black/20 border-dashed">
                        <img src="../assets/logos/waec.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- contact section -->
        <section>
            <div class="md:bg-green-100">
                <div class="md:max-w-7xl mx-auto md:p-20 md:flex gap-2 md:gap-5">
                    <div class="grid md:grid-cols-2 md:gap-5 grid-cols-1 md:w-1/2 gap-3 max-md:p-5">
                        <div class="bg-white p-10 hover:shadow-xl text-center rounded-tl-3xl border transition-all">
                            <MapIcon class="w-10 h-10 mb-4 mx-auto text-blue-500" />
                            <p class="text-gray-500">9, Hon. N. S. Sholaja Street, off Erunwen Road, </p>
                        </div>
                        <div class="bg-white p-10 hover:shadow-xl text-center border transition-all">
                            <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-green-500" />
                            <p class="text-gray-500  flex-wrap ">Kingsmeadelementary lagos@gmail.com</p>
                            <!-- <p class="text-gray-500"></p> -->
                        </div>
                        <div class="bg-white p-10 hover:shadow-xl text-center border transition-all">
                            <PhoneIcon class="w-10 h-10 mb-4 mx-auto text-yellow-500" />
                            <p class="text-gray-500 tracking-wide">+234 09060407160</p>
                            <p class="text-gray-500 tracking-wide">+234 09060407160</p>
                        </div>
                        <div class="bg-white p-10 hover:shadow-xl text-center border transition-all">
                            <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-purple-500" />
                            <p class="text-gray-500">Write to us</p>
                            <Router-link class="underline p-3 bg-text-green-500 rounded-full my-2"
                                to="/about/contact-us">Click here</Router-link>
                        </div>
                    </div>
                    <div class="imgflexed md:w-1/2">
                        <div class="grayscale h-full ">
                            <img src="../assets/images/DSC_0515.jpg" alt=""
                                class="w-full h-full object-cover md:rounded-br-3xl">
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    </div>

</template>
<script>
import { LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Navigation, Pagination, Autoplay,EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// import 'swiper/css/effect'
export default {
    components: {
        Swiper, SwiperSlide, LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon, PhoneIcon, ArrowRightIcon,EffectFade
    },
    data() {
        return {
            modules: [Autoplay, Navigation, Pagination],
            slides: [
                {
                    img: "img/kingsmead_front-page.jpg",
                },
                {
                    img: "img/DSC_0610.jpg",
                },
                {
                    img: "img/DSC_0621.jpg",
                },
                {
                    img: "img/cultural6.jpeg",
                },
                {
                    img: "img/sport7.jpeg",
                },
                {
                    img: "img/DSC_0637.jpg",
                },
                {
                    img: "img/DSC_0511.jpg",
                },
            ]
        }
    }
}
</script>
<style>

</style>