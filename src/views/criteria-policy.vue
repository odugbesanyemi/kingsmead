<template >
    <div>
        <siteHeader class="w-full" title="Criteria & Policy" prev-page-name="Admission" curr-page-name="Criteria & Policy"
            :img-name="headerImg" />
    </div>

    <section>
        <div class="md:flex max-w-6xl mx-auto md:py-20 gap-10 ">
            <div class="md:w-4/6 max-md:p-5">
                <h2 class="text-4xl text-blue-800 py-3">Admissions Criteria</h2>
                <div class="md:text-lg">
                    <ul class="p-2 list-disc text-slate-600">
                        <li class="py-2">KINGSMEAD will admit students in line with the school’s philosophy and
                            professional discretion of the Principal.</li>
                        <li class="py-2">Students seeking admission into Year 7 at the start of a school year in
                            September must reach the age of 10 years by the 30th September in that same year.</li>
                        <li class="py-2">Similarly, students seeking admission into Year 8, 9 and 10 at the start of a
                            school year in September must reach the age of 11, 12 and 13 years respectively by the 30th
                            September of the year of entry.</li>
                    </ul>
                </div>
                <h2 class="text-3xl text-blue-900 mt-5 mb-8">Admissions Policy</h2>
                <div class="md:text-lg text-slate-600">
                    <p class="py-3">KINGSMEAD is a selective school, in terms of seeking students with sound academic
                        ability as well as strengths in the areas of sports and the arts.</p>
                    <p class="py-3">KINGMEAD offers a broad, rigorous programme and is looking for evidence of a
                        student’s preparation to succeed at Kingsmead, paying particular attention to:</p>
                    <ul class="p-2 max-md:p-5 list-disc">
                        <li class="py-2">Enthusiasm, curiosity & a passion for learning</li>
                        <li class="py-2">Intellect, evidenced by a history of academic success</li>
                        <li class="py-2">Well-disciplined, social and respectful</li>
                    </ul>

                    <h3 class="mt-5">For more information about KINGMEAD Admissions please contact the Admissions
                        Officer at <button class="text-red-700">admissions@Kingsmead.edu.ng</button></h3>
                </div>
            </div>
            <sidebar/>
        </div>
    </section>
</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import sidebar from "../components/admissionSidebar.vue"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon,sidebar
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