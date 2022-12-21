<template >
    <div>
        <siteHeader title="Learning Environment" prev-page-name="About" curr-page-name="Learning Environment"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <!-- <h1 class="text-5xl font-bold text-blue-800 mb-10">Learning Environment</h1> -->
                    <div class="">
                        <div class="md:flex items-center gap-7">
                            <div class="md:w-1/2 md:pr-5">
                                <p class="leading-loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Possimus impedit placeat nemo
                                    veritatis aliquid quaerat ratione necessitatibus nulla aut inventore animi deserunt
                                    debitis dolorem, explicabo natus magni expedita? Ex, facere?
                                </p>
                                <p class="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                                    assumenda
                                    molestias ut ullam voluptate, enim reiciendis corrupti, voluptatibus fugiat sunt
                                    quas
                                    deserunt animi error quae quisquam eveniet quam, autem aspernatur?</p>
                            </div>
                            <div class="class md:w-1/2">
                                <div class="relative">
                                    <img src="../assets/images/DSC_0072.jpg" alt="" class="absolute inset-0 w-1/2 -top-20 h-full object-cover -left-10 rounded-xl shadow-lg">
                                    <img src="../assets/images/DSC_0579.jpg" class="rounded border" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96">
                <span class="absolute -z-10 w-full h-full inset-0 opacity-20"><img
                        src="../assets/images/ass._class_cpt_g2_phlox.jpeg" alt=""
                        class="w-full h-full object-cover -z-10"></span>
                <span class="absolute -z-10 inset-0 bg-gradient-to-t from-indigo-500/80 to-purple-900/80 "></span>
                <div class="max-w-6xl mx-auto max-sm:px-5 sm:px-16 md:px-0 z-50">
                    <h3 class="max-md:text-3xl text-4xl text-white ">
                        “Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a
                        lifetime.” — Maimonides
                    </h3>
                    <div class="btnGrp mt-8">
                        <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register
                            Today</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon
    },
    data() {
        return {
            headerImg, defaultPic,
        }
    },
}
</script>
<style>

</style>