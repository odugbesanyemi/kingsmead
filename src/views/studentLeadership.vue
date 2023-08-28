<template >
    <div>
        <siteHeader title="Student Leadership" prev-page-name="About" curr-page-name="Student Leadership"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-10 md:py-20">
                <div class="max-w-6xl mx-auto max-md:p-2 sm:px-10">
                    <div class="bg-white max-md:p-5 p-10 rounded-xl">
                        <h1 class="text-5xl max-md:text-3xl text-blue-800 mb-5 text-center">Embracing the power of student voice</h1>
                        <div class="my-5 overflow-hidden rounded-lg">
                            <img src="../assets/images/student-leadership.jpeg" alt="">
                        </div>
                        <div class="text-lg max-md:text-md text-slate-600 mb-5">
                            <p class="py-2">As student leaders at Kingsmead Schools, they will have the opportunity to
                                make a positive impact on their school community. They will be responsible for
                                representing the interests and concerns of their peers, and for fostering a culture of
                                collaboration and mutual respect.</p>
                            <p class="py-2">In this role, they will work closely with the school administration and
                                faculty to identify and address issues of concern to students, and to promote the values
                                and mission of the school. They will also have the opportunity to develop their
                                leadership skills and to serve as role models for their peers.</p>
                            <p class="py-2">We are looking for students who are proactive, positive, and committed to
                                making a difference. If they are interested in this opportunity, we encourage them to
                                apply as our leaders are selected by election which prepares them for a democratic and inclusive society.</p>
                        </div>

                    </div>

                    <div class="my-10">
                        <!-- <div class="title text-3xl font-bold text-slate-500">What they are Saying</div> -->
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