<template >
    <div>
        <siteHeader title="Registration Form" prev-page-name="About" curr-page-name="Registration Form"
            :img-name="headerImg" />
    </div>

    <div>
        <div class="md:flex max-w-7xl mx-auto md:py-20 gap-10 ">
            <div class="md:w-4/6 max-md:p-5">
                <!-- advert -->
                <div class="">
                    <div class="rounded-3xl shadow p-10 relative">
                        <img src="../assets/images/DSC_0568.jpg" class=" absolute inset-0 w-full h-full object-cover z-0" alt="">
                        <span
                            class="absolute bg-gradient-to-r from-blue-600 to-blue-900/70 inset-0 w-full h-full z-0"></span>
                        <div class="relative">
                            <h2 class="text-5xl text-white md:w-4/6 z-10">Admission in Progress</h2>
                            <p class="md:w-3/6 mt-2 text-white/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tempore,</p>

                        </div>
                    </div>
                </div>
                <div class="mt-8 text-xl text-slate-500">
                    <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus totam beatae quo esse dolorem id magni deserunt. Velit dignissimos beatae magni atque, nesciunt dolor, commodi ut aut accusamus saepe ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit accusantium pariatur veniam porro mollitia architecto quos, quae aperiam accusamus dolorem molestias eos error sunt commodi laborum reiciendis amet minus.</p>
                </div>
                <!--grids for actions -->
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10 ">
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-orange-300">
                        <div class="bg-orange-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/814848.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-orange-600">Download Admission Form</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-blue-300">
                        <div class="bg-blue-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/5179190.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-blue-600">Start Online Registration</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-red-300">
                        <div class="bg-red-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/854878.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-red-600">Visit nearest Branch/ Annex</h2>
                        </div>
                    </div>
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