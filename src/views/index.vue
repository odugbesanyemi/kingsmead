<template >
    <!-- hero section -->
    <div class="">
        <section class="relative ">
            <Swiper :modules="modules" :slides-per-view="1"  class="md:h-screen " :autoplay='{ "delay": 4500 }'>
                <swiper-slide class="relative h-full" v-for="item in slides">
                    <div class="relative h-full">
                        <img :src="item.img" class="w-full md:h-screen object-cover" alt="" style="min-height:300px;">
                        <span class="absolute bg-gradient-to-tr from-gray-900 to-blue-800/20 max-md:hidden w-full h-full top-0 mix-blend-multiply"></span>
                    </div>
                </swiper-slide>
            </Swiper>
            <div class="max-w-6xl mx-auto md:px-10">
                <div class="absolute z-10 bottom-0 max-md:bg-blue-900/80 max-md:p-3  max-md:w-full md:top-1/2 md:-translate-y-1/2 ">
                    <h1 class="text-4xl md:text-6xl xl:text-7xl text-white ">Learning is not a <span class="max-md:text-blue-300 block">Choice,</span>  It's a Life</h1>
                    <div class="btn-group my-8  gap-4 text-lg relative max-md:hidden">
                        <Router-link draggable=false to="/about" class="font-bold md:py-3 p-3 px-10 md:w-2/5 max-md:inline-block rounded-lg mr-2  text-white text-center bg-indigo-800 hover:bg-indigo-700 transition-all">Get Started</Router-link>
                        <Router-link draggable="false" to="/tour" class="font-bold ml-2 bg-gradient-to-t from-white to-gray-100 shadow-inner text-blue-600 md:py-3 p-3 px-10 md:w-2/5 max-sm:mt-5 max-md:inline-block rounded-lg mr-4 text-center">Take a tour</Router-link>
                    </div>            
                </div>                
            </div>

        </section>
        <!-- Video plaback section -->
        <section id="tour">
            <div class="relative bg-slate-50 min-h-5/6 md:py-20">
                <div class="md:max-w-7xl mx-auto md:flex px-10 max-md:px-0">
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
                        <div class="grid grid-cols-2 gap-2">
                            <Router-link to='/admissions/criteria-policy'
                                class="bg-red-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-red-600  transition-all rounded">
                                <LightBulbIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Admission Guidlines</p>
                            </Router-link>
                            <Router-link to="life-at-kingsmead/pastoral-unit"
                                class="bg-purple-500 flex md:border-l flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600 rounded">
                                <UserGroupIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Pastoral Care Unit</p>
                            </Router-link>
                            <Router-link to="/"
                                class="bg-blue-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:blue-600 rounded">
                                <ArrowRightOnRectangleIcon class="text-white w-10 h-10 mb-4" />
                                <p class="text-white text-sm font-bold text-center">Portal Login</p>
                            </Router-link>

                            <Router-link to="/Life-at-Kingsmead/Alumni"
                                class="bg-indigo-500 flex flex-col md:border-l items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600  rounded">
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
            <div class=" md:max-w-7xl mx-auto md:py-28 py-10 max-md:px-5 px-10 ">
                <!-- <h2 class="text-5xl text-blue-800 mb-14">Accredited By:</h2> -->
                <div class="grid md:grid-cols-4 max-md:grid-cols-2  group mix-blend-multiply justify-center">
                    <div class="flex-col flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/British_Council_logo.svg.png"  alt="">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/cambridge.jpg"  alt="">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/Coat_of_arms_of_Nigeria.svg.png" alt="">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/IELTS_logo.svg.png"  alt="">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/lagos-state.webp"  alt="" class=" object-cover">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed" >
                        <img src="../assets/logos/neco.jfif"  alt="" class=" object-cover">
                    </div>
                    <div class="flex items-center justify-center p-5 border border-black/10 border-dashed">
                        <img src="../assets/logos/waec.jpg"  alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial section -->
        <div class="bg-blue-200 relative">
            <span class="absolute inset-0 mix-blend-multiply opacity-20 z-0"> <img src="../assets/rough texture.webp" class="w-full h-full" alt=""></span>
            <testimonial class=""/>
        </div>
        <!-- contact section -->
        <section>
            <div class="md:bg-blue-100">
                <div class="md:max-w-7xl mx-auto md:p-20 md:flex ">
                    <div class="grid md:grid-cols-2  grid-cols-1 md:w-1/2 max-md:p-5">
                        <div class="bg-white p-10 hover:outline outline-blue-600 text-center  transition-all">
                            <MapIcon class="w-10 h-10 mb-4 mx-auto text-blue-500" />
                            <p class="text-gray-500">9, Hon. N. S. Sholaja Street, off Erunwen Road, </p>
                        </div>
                        <div class="bg-white p-10 hover:outline outline-blue-600 text-center  transition-all">
                            <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-green-500" />
                            <p class="text-gray-500  flex-wrap ">Kingsmeadelementarylagos@gmail.com</p>
                            <!-- <p class="text-gray-500"></p> -->
                        </div>
                        <div class="bg-white p-10 hover:outline outline-blue-600 text-center  transition-all">
                            <PhoneIcon class="w-10 h-10 mb-4 mx-auto text-yellow-500" />
                            <p class="text-gray-500 tracking-wide">+234 09060407160</p>
                            <p class="text-gray-500 tracking-wide">+234 09060407160</p>
                        </div>
                        <div class="bg-white p-10 hover:outline outline-blue-600 text-center  transition-all">
                            <ChatBubbleBottomCenterIcon class="w-10 h-10 mb-4 mx-auto text-purple-500" />
                            <p class="text-gray-500">Write to us</p>
                            <Router-link class="underline p-3 bg-text-green-500 rounded-full my-2"
                                to="/about/contact-us">Click here</Router-link>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="grayscale h-full ">
                            <img src="../assets/images/DSC_0515.jpg" alt=""
                                class="w-full h-full object-cover ">
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    </div>
    <transition  name="walk">
        <popup @close="isPopup = !isPopup" v-if="isPopup" class=""/>    
    </transition>

</template>
<script>
import popup from '../components/popup.vue'
import { LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Navigation, Pagination, Autoplay,EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import testimonial from '../components/testimonial.vue'
// import 'swiper/css/effect'
export default {
    components: {
        Swiper,popup, SwiperSlide, LightBulbIcon, UserGroupIcon, ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, MapIcon, PhoneIcon, ArrowRightIcon,EffectFade,testimonial
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
            ],
            isPopup:false,
        }
    },
    methods:{

    },
    mounted(){
        const hasPopped = false
        if(!hasPopped){
            setTimeout(()=>{
                this.isPopup = true
            },1000)            
        }else{
            
        }

    }
}
</script>
<style scoped>
    .walk-enter-active,.walk-leave-active{
        transition: opacity 2.5s ease;
    }
    .walk-enter-from{
        transition: 2.5s ease;
        transform: translateY(0%);
    }
    .walk-leave-to{
        transition: 2.5s ease;
        transform: translateX(-50%);
        opacity: 0;
    }
</style>