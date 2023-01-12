<template >
    <div>
        <siteHeader title="Learning Environment" prev-page-name="Academics" curr-page-name="Learning Environment"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-10 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <!-- <h1 class="text-5xl font-bold text-blue-800 mb-10">Learning Environment</h1> -->
                    <div class="">
                        <div class="md:flex items-center gap-7">
                            <div class="md:w-1/2 md:pr-5 text-lg text-slate-600">
                                <h2 class="lg:text-3xl text-center mb-8 text-blue-800"><span class="text-red-500">Empower Your Education:</span> A Collaborative and Hands-On Learning Experience</h2>
                                <p class="pb-3 max-md:text-md">Welcome to our school's learning environment! We are excited to have you join us and are committed to providing you with a high-quality education and a supportive learning experience.</p>
                                <p class="pb-3 max-md:text-md">Our learning environment is designed to be interactive and engaging, with a focus on collaborative learning and hands-on activities. We believe that learning should be an active process and that students learn best when they are actively involved in their own education.</p>
                                <p class="pb-3 max-md:text-md"></p>
                            </div>
                            <div class="class md:w-1/2">
                                <div class="relative">
                                    <img src="../assets/images/DSC_0579.jpg" class="rounded border" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10 py-14">
                    <div class=" bg-white rounded-lg ">
                        <span
                            class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block">
                            <span class="relative text-white text-5xl font-bold">Features</span>
                        </span>
                        <div class="grid max-lg:cols-2 lg:grid-cols-2 mt-8 gap-10">
                            <div class="rounded" v-for="feature in features" :key="feature.id">
                                <div class="img">
                                    <img :src="feature.img" alt="">
                                </div>
                                <div class="title">
                                    <h3 class="text-2xl font-bold py-3 text-blue-800">{{ feature.title }}</h3>
                                    <p class="text-md text-slate-500">{{ feature.desc }}</p>
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
            features: [
                {
                    id: 1,
                    img: "/src/assets/",
                    title: "Our Physical Learning Space",
                    desc: "At our school, we are committed to providing our students with a comfortable and well-equipped learning environment. Our classrooms are spacious and filled with natural light, and we have state-of-the-art technology, such as interactive whiteboards and computers, to support our students' learning. We also have a range of resources, including books, games, and hands-on materials, to help our students engage with the material in meaningful ways."
                }, 
                {
                    id: 2,
                    img: "",
                    title: "Our Culture of Respect and Support",
                    desc: "In addition to the physical space, we also strive to create a culture of respect and support at our school. We believe that our students learn best when they feel safe, supported, and valued, and we work hard to foster a positive and inclusive learning environment. Our teachers and staff are dedicated to helping our students succeed and are always available to offer guidance and support."
                },
                {
                    id: 3,
                    img: "",
                    title: "Our Code of Conduct",
                    desc: "To ensure that our learning environment remains positive and respectful, we have a strict code of conduct that all students, teachers, and staff are expected to follow. This code of conduct outlines the behavior and expectations that we have for all members of our community, and helps to create a safe and welcoming environment for everyone."
                },
            ]
        }
    },
}
</script>
<style>

</style>