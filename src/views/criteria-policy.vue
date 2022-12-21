<template >
    <div>
        <siteHeader title="Criteria & Policy" prev-page-name="About" curr-page-name="Criteria & Policy"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50 py-5">
                
            </div>
        </div>
    </div>

    <section>
        <div class="flex max-md:flex-col">
            <div class="max-md:w-11/12 px-20 max-md:px-10 w-9/12">
                 <h1 class="md:text-3xl font-bold py-3">Admissions Criteria</h1>
                 <div class="">
                    <p class="py-3">KINGSMEAD will admit students in line with the school’s philosophy and professional discretion of the Principal.</p>
                    <p class="py-3">Students seeking admission into Year 7 at the start of a school year in September must reach the age of 11 years by the 30th September in that same year.</p>
                    <p class="py-3">Similarly, students seeking admission into Year 8, 9 and 10 at the start of a school year in September must reach the age of 12, 13 and 14 years respectively by the 30th  September of the year of entry.</p>
                </div>

                    <h1 class="md:text-3xl font-bold mt-5">Admissions Policy</h1>
                <div class="">
                        <p class="py-3">KINGSMEAD is a selective school, in terms of seeking students with sound academic ability as well as strengths in the areas of sports and the arts.</p>
                        <p class="py-3">KINGMEAD offers a broad, rigorous programme and is looking for evidence of a student’s preparation to succeed at Kingsmead, paying particular attention to:</p>
                    <ul class="p-2 max-md:p-5 list-disc">
                        <li class="py-2">Enthusiasm, curiosity & a passion for learning</li>
                        <li class="py-2">Intellect, evidenced by a history of academic success</li>
                        <li class="py-2">Ability to fit into a boarding environment</li>
                        <li class="py-2">Well-disciplined, social and respectful</li>
                        <li class="py-2">Ability in sports or the arts</li>
                        <li class="py-2">Leadership potential</li>
                    </ul>
                    
                    <h3 class="mt-5">For more information about KINGMEAD Admissions please contact the Admissions Officer @ <button class="text-red-700">Kingsmead.com</button></h3>

                </div>   
            </div>

            <div class="w-96 mr-20">
                <div class="max-md:p-5">
                    <button class="py-2 text-xl hover:text-blue-800 underline decoration-blue-600">Examination Centres</button> <br>
                    <button class="py-2 text-xl hover:text-blue-800 underline decoration-blue-600">Admissions Criteria & Policy</button><br>
                    <button class="py-2 text-xl hover:text-blue-800 underline decoration-blue-600">Online Application Form</button>
                </div>
                <div class="bg-blue-900 p-5 text-white py-10 md:mt-10 ">
                    <h1 class="py-2 text-2xl font-bold">Admissions Department</h1>
                    <p class="">Lorem ipsum dolor sit.</p>
                    <p>Admissions Officer</p>
                    <p class="mt-7">+234XXXXXXX</p>
                    <p class="">Kingmead.com</p>
                    <p class="mt-7">Mon – Fri 9:00A.M. – 4:00P.M.</p>

                        <h1 class="mt-10 text-xl font-bold">Social Info</h1>
                     <div class="md:flex justify-between md:mt-5 mt-3">
                        <p><button class="hover:text-blue-400">Facebook</button> </p>
                        <p><button class="hover:text-blue-400">Twitter</button> </p>
                        <p><button class="hover:text-blue-400">Instagram</button> </p>
                    </div>
                    <button class="mt-10 bg-blue-600 p-4 py-5 hover:bg-blue-400">Apply to KINGSMEAD</button>
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