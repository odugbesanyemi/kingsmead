<template >
    <div>
        <siteHeader title="Learning Environment" prev-page-name="Academics" curr-page-name="Learning Environment"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <!-- <h1 class="text-5xl font-bold text-blue-800 mb-10">Learning Environment</h1> -->
                    <div class="">
                        <div class="md:flex items-center gap-7">
                            <div class="md:w-1/2 md:pr-5">
                                <h2 class="lg:text-5xl mb-5 text-blue-800 lg:w-4/5">How our students Learn</h2>
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
                                    <img src="../assets/images/DSC_0072.jpg" alt=""
                                        class="absolute inset-0 w-1/2 -top-20 h-full object-cover -left-10 rounded-xl shadow-lg">
                                    <img src="../assets/images/DSC_0579.jpg" class="rounded border" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white py-20 md:py-12">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class=" bg-white rounded-lg lg:p-12">
                        <span
                            class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block">
                            <span class="relative text-white text-5xl font-bold">Features</span>
                        </span>
                        <div class="grid max-lg:cols-2 lg:grid-cols-3 mt-8 gap-10">
                            <div class="rounded">
                                <div class="img">
                                    <img src="../assets/images/DSC_0548.jpg" alt="">
                                </div>
                                <div class="title">
                                    <h3 class="text-2xl font-bold py-3">Conducive</h3>
                                    <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quibusdam dicta officia consequatur porro consectetur itaque
                                        impedit repudiandae accusantium deleniti, consequuntur soluta aliquam,
                                        perspiciatis exercitationem suscipit eius saepe ducimus, doloremque omnis?</p>
                                </div>
                            </div>
                            <div class="rounded">
                                <div class="img">
                                    <img src="../assets/images/DSC_0548.jpg" alt="">
                                </div>
                                <div class="title">
                                    <h3 class="text-2xl font-bold py-3">Conducive</h3>
                                    <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quibusdam dicta officia consequatur porro consectetur itaque
                                        impedit repudiandae accusantium deleniti, consequuntur soluta aliquam,
                                        perspiciatis exercitationem suscipit eius saepe ducimus, doloremque omnis?</p>
                                </div>
                            </div>
                            <div class="rounded">
                                <div class="img">
                                    <img src="../assets/images/DSC_0548.jpg" alt="">
                                </div>
                                <div class="title">
                                    <h3 class="text-2xl font-bold py-3">Conducive</h3>
                                    <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quibusdam dicta officia consequatur porro consectetur itaque
                                        impedit repudiandae accusantium deleniti, consequuntur soluta aliquam,
                                        perspiciatis exercitationem suscipit eius saepe ducimus, doloremque omnis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <joinUsAdVue />
        </div>
    </div>
</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import joinUsAdVue from '../components/joinUsAd.vue'
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, joinUsAdVue,
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