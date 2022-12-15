<template >
    <div>
        <siteHeader title="Alumni" prev-page-name="About" curr-page-name="Alumni" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20">
                <div class="max-w-7xl mx-auto">
                    <div class="mb-10">
                        <h1 class="text-5xl font-bold text-blue-800 ml-3 px-4 ">Alumni</h1>
                        <p class="mt-4 ml-3 px-4">A showcase of our leaders who have earned their positions as Leaders
                            at
                            Kingsmead Schools</p>
                    </div>

                    <div class="relative w-full mx-auto bg-white drop-shadow-md border-radius rounded-md py-24 p-5">
                        <div class="mx-auto text-center">
                            <h1 class="text-4xl text-blue-900 font-black">KINGSMEAD</h1>
                            <p class="font-black mt-1">The Bold Future Of Students</p>
                            <div class="p-2 text-xl py-5 w-full text-blue-400">
                                <p>At Creighton, our Jesuit mission shapes our vision. But our alumni and friends — our
                                    one-</p>
                                <p>of-a-kind community — you make that vision a reality. You can help us forge a bold
                                    new</p>
                                <p>chapter in Creighton’s extraordinary story. Learn how you can support Forward Blue —
                                    the</p>
                                <p>largest and most comprehensive fundraising campaign in Creighton's history.</p>
                            </div>


                            <div class="bg-indigo-800 mt-10">
                                <div class="max-w-7xl mx-auto py-20 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                                    <div class="max-w-4xl mx-auto text-center">
                                        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers
                                            from over 80 planets</h2>
                                        <p class="mt-3 text-xl text-indigo-200 sm:mt-4">Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Repellendus repellat laudantium.</p>
                                    </div>
                                    <dl
                                        class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                                        <div class="flex flex-col">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                                                PARTICIPANTS</dt>
                                            <dd class="order-1 text-5xl font-extrabold text-white">45,450</dd>
                                        </div>
                                        <div class="flex flex-col mt-10 sm:mt-0">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                                                RAISED</dt>
                                            <dd class="order-1 text-5xl font-extrabold text-white">$563M</dd>
                                        </div>
                                        <div class="flex flex-col mt-10 sm:mt-0">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">TO
                                                GOAL</dt>
                                            <dd class="order-1 text-5xl font-extrabold text-white">92%</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-2/5 max-md:-top-16 md:-top-12  md:mx-auto md:py-4 mx-2 relative -top-6 font-bold ">
                        <button
                            class="hover:bg-blue-900 bg-white  hover:text-white text-blue-900 text-xl max-md:w-full shadow rounded-md md:p-4 p-4 md:px-20 outline outline-blue-800">Learn
                            more about Kingsmead</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <h1>FUNDRAISING PRIORITIES</h1>
    <div class="relative " style="height:700px">
        <div class="w-full h-full absolute">
            <img class="w-full h-full object-cover" src="../assets/images/alunmi.jpg" >
        </div>
        <div class="bg-blue-900 text-white absolute right-20 top-2/3 -translate-y-1/2 w-2/5 px-10 py-5 opacity-90">
            <p class="py-2"> Under the auspices of Life Skills Education, we inculcate in the learners eternal values to boost their self-esteem. </p>
            <p class="py-2">We prepare them to develop a stable mental health attitude towards life. </p>
            <p class="py-2"> They are disciplined to destroy the fear of any type and the phobia of learning.</p>
            <p class="py-2"> We prepare them to develop a stable mental health attitude towards life.</p>
            <div class="py-10 ">
                <button class=" rounded hover:bg-white hover:text-blue-900 outline outline-yellow-500 p-5 text-2xl font-black">Learn more about our scholarship</button>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96">
        <span class="absolute -z-10 w-full h-full inset-0 opacity-20"><img
                src="../assets/images/ass. class cpt g2 phlox.jpeg" alt=""
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