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
                    <div class="rounded-lg shadow p-5 relative overflow-hidden">
                        <img src="../assets/images/DSC_0568.jpg" class=" absolute inset-0 w-full h-full object-cover overflow-hidden z-0" alt="">
                        <span
                            class="absolute bg-gradient-to-r from-blue-600 to-blue-900/70 inset-0 w-full h-full overflow-hidden z-0"></span>
                        <div class="relative rounded-lg">
                            <h2 class="md:text-5xl text-3xl text-white md:w-4/6 z-10">Admission is in Progress</h2>
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