<template >
    <div>
        <siteHeader title="Pastoral Care Unit" prev-page-name="About" curr-page-name="Pastoral Care Unit"
            :img-name="headerImg" />
        <!-- <div class="page-content">
            <div class="bg-blue-50  py-10 md:py-">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class="">
                        <h1 class="text-5xl font-bold text-blue-800 ">Pastoral Care Unit</h1>
                        <p class="mt-4">A showcase of our leaders who have earned their positions as Leaders at
                            Kingsmead Schools</p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

    <section>
        <div class="flex max-md:flex-col py-10">
             <div class="md:w-full  text-justify bg-gradient-to-tr from-blue-500 to-blue-400 text-white max-md:p-10 p-10">
                <p>The Pastoral Care Unit of Kingsmead College is an all-inclusive emotional intelligence programme which is designed to identify, nurture and transform learners to excel in academics, character and morality. Our focus here is to inspire, guide and support the students to trust in their God and believe in the latent gem of greatness in them.</p>
                <p class="mt-7">Under the auspices of Life Skills Education, we inculcate in the learners eternal values to boost their self-esteem. We prepare them to develop a stable mental health attitude towards life. They are therefore vaccinated with courage, determination, persistence, faith, poise and hard work to  rule and dominate the ever-challenging world. They are disciplined to destroy the fear of any type and the phobia of learning. We build in them unflinching self-image in a distressed and competitive world. Hence, our students enjoy schooling in a friendly, caring and loving environment where"school is a place to be" and a home to grow in.</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-blue-500 max-md:p-5">
                <img class="" src="../assets/images/DSC_0049.jpg" alt="" srcset="">
                <div>
                    <p class="text-center text-white p-3 text-xl">Mr Ene Raphael - <span class="text-gray-700">Vice-Principal</span></p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96 mt-10">
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
                    <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register Today</button>
                </div>
            </div>
        </div>
    </section>

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
            
        }
    },
}
</script>
<style>

</style>