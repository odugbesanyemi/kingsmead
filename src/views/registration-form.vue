<template >
    <div>
        <siteHeader title="Registration Form" prev-page-name="Admission" curr-page-name="Registration Form"
            :img-name="headerImg" />
    </div>

    <div>
        <div class="md:flex max-w-6xl mx-auto md:py-20 gap-10 ">
            <div class="md:w-4/6 max-md:p-5">
                <!-- advert -->
                <div class="">
                    <div class="rounded-3xl shadow p-5 relative">
                        <img src="../assets/images/DSC_0568.jpg" class=" absolute inset-0 w-full h-full object-cover overflow-hidden z-0" alt="">
                        <span
                            class="absolute bg-gradient-to-r from-blue-600 to-blue-900/70 inset-0 w-full h-full overflow-hidden z-0"></span>
                        <div class="relative rounded-lg">
                            <h2 class="text-5xl text-white md:w-4/6 z-10">Admission is in Progress</h2>
                            <!-- <p class="md:w-3/6 mt-2 text-white/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tempore,</p> -->
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-lg max-md:text-sm text-slate-600">
                    <p class="mb-2">Welcome to Kingsmead Schools! We are delighted that you are considering joining our community.</p>
                    <p class="mb-2">At Kingsmead Schools, we pride ourselves in providing a high-quality education and a supportive learning environment. We are committed to helping our students reach their full potential and to preparing them for success in the world beyond our walls.</p>
                    <p class="mt-10 font-bold">Ready to apply? <Router-link class="underline" to="/admissions/registration-form">Download Application Form</Router-link></p>
                    <p class="mt-5 font-bold">Have more questions? <Router-link class="underline" to="/about/contact-us">Contact us</Router-link></p>
                </div>
                <!--grids for actions -->
                <!-- <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-10 ">
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-orange-300">
                        <div class="bg-orange-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/814848.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-orange-600 text-center">Download Admission Form</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-blue-300">
                        <div class="bg-blue-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/5179190.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-blue-600 text-center">Start Online Registration</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-red-300">
                        <div class="bg-red-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/854878.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-red-600 text-center align-middle">Get Directions</h2>
                        </div>
                    </div>
                </div> -->
            </div>
            <admissionSidebarVue />
        </div>
    </div>


</template>


<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import admissionSidebarVue from '../components/admissionSidebar.vue'
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, admissionSidebarVue
    },
    data() {
        return {
            headerImg, defaultPic,
            users: [
                {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                },
                {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                }, {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                },
            ]
        }
    },
}
</script>
<style>

</style>