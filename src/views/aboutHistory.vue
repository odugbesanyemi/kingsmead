<template >
    <div>
        <siteHeader title="About Kingsmead" prev-page-name="About" curr-page-name="History" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class="md:flex">
                        <div class="md:w-1/2 max-sm:text-base text-slate-600 text-justify text-lg">
                            <h2 class="text-blue-800 text-5xl mb-4 text-center">The Great Journey</h2>
                            <p class="pt-3 pb-3 leading-relaxed">The school was established in July, 2017 to provide
                                qualitative
                                educational opportunity for increasing number of primary school leavers within and
                                outside Nigeria who have academic excellence as their focus.</p>
                            <p class="pb-3 leading-relaxed">The school is a purpose built college and is located in a
                                serene and
                                conducive environment devoid of distractions of a bustling city life. It is focused on
                                students' needs for proper learning and sound upbringing. The school has supporting
                                standard facilities and staff with passion for human development.</p>
                            <p class="pb-3 leading-relaxed">The idea that resulted in the establishment of KINGSMEAD
                                COLLEGE, Ikorodu
                                was based on the demand of the parents of Kingsmead Primary School - the Elementary wing
                                of the Kingsmead Educational Trust- and the immediate community for a sound secondary
                                education comparable with what is obtained in the elementary school. More importantly,
                                it came as a result of an objective assessment of the future education needs of the
                                Nigerian State.</p>
                            <p class="pb-3 leading-relaxed">KINGSMEAD COLLEGE, IKORODU opened its doors for academic
                                activities in July,
                                2017. All necessary facilities required for a fulfilling basic and secondary education
                                has been in place prior to the official people.</p>
                            <div class="grid md:grid-cols-2 mt-4 gap-4 max-md:mb-10 text-sm">
                                <div class="p-5 bg-white/50 backdrop-blur-sm rounded-lg flex flex-col justify-center">
                                    <span class="absolute w-10 h-10 top-0 right-0 p-2 bg-red-300 rounded-bl-full ">
                                        <AcademicCapIcon class="text-white" />
                                    </span>
                                    <h3 class="text-4xl font-bold mb-3 text-red-500 z-10">
                                        200+
                                    </h3>
                                    <p><span class="font-bold">Graduated</span> Students are all doing fine in their
                                        various fields</p>
                                </div>
                                <div class="p-5 bg-white/50 backdrop-blur-sm rounded-lg bg-orange-100">
                                    <span class="absolute w-10 h-10 top-0 right-0 p-2 bg-orange-300 rounded-bl-full ">
                                        <GlobeEuropeAfricaIcon class="text-white" />
                                    </span>
                                    <h3 class="text-xl font-bold text-orange-500 mb-3">
                                        Our Mission
                                    </h3>
                                    <p><span class="font-bold"></span> To inspire students to achieve the highest
                                        standard of intellectual and personal development through a stimulating and
                                        comprehensive programme.</p>
                                </div>
                                <div class="p-5 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <span class="absolute w-10 h-10 top-0 right-0 p-2 bg-purple-300 rounded-bl-full ">
                                        <EyeIcon class="text-white" />
                                    </span>
                                    <h3 class="text-xl font-bold mb-3 text-purple-500">
                                        Our Vision
                                    </h3>
                                    <p><span class="font-bold"></span> To be an outstanding value-based school striving
                                        for Excellence thereby, enabling our students achieve greatness.</p>
                                </div>
                                <div class="p-5 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <span class="absolute w-10 h-10 top-0 right-0 p-2 bg-blue-300 rounded-bl-full ">
                                        <BookOpenIcon class="text-white" />
                                    </span>
                                    <h3 class="text-4xl font-bold text-blue-500 mb-3">
                                        30+
                                    </h3>
                                    <p class="mb-4"><span class="font-bold">Courses</span> Our Students Curriculum are
                                        well designed to handle Local and Foreign Learning experience</p>
                                    <RouterLink class="underline text-slate-600 mt-6 py-5" to="/academics/curriculum">
                                        View Curriculum</RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-10 grayscale hover:grayscale-0">
                            <img src="../assets/images/DSC_0075.jpg" alt="" class="rounded-tl-3xl h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gradient-to-tr from-yellow-100 via-indigo-500 to-yellow-500 py-20 md:py-32 backdrop-blur-md">
                <div class="max-w-6xl mx-auto max-sm:px-5 sm:px-16 md:px-0">
                    <div class="md:flex">
                        <div class="md:w-1/2 md:pr-10">
                            <img src="../assets/images/DSC_0515.jpg" alt=""
                                class="rounded-xl rounded-tr-3xl h-full object-cover shadow-md">
                        </div>
                        <div class="md:p-10 max-md:mt-8 ">
                            <h2 class="text-4xl text-white mb-8">Our Core Values</h2>
                            <div class="grid max-md:grid-cols-2 grid-cols-3 gap-3">
                                <div
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center ring-white border border-opacity-50 hover:shadow-lg">
                                    <h3 class="font-bold text-xl text-white">INTEGRITY</h3>
                                </div>
                                <div
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center  ring-white border border-opacity-50 hover:shadow-lg">
                                    <h3 class="font-bold text-xl text-white">DILIGENCE</h3>
                                </div>
                                <div
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center  ring-white border border-opacity-50 hover:shadow-lg">
                                    <h3 class="font-bold text-xl text-white">DISCIPLINE</h3>
                                </div>
                                <div
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center  ring-white border border-opacity-50 hover:shadow-lg">
                                    <h3 class="font-bold text-xl text-white">COMMITEMENT</h3>
                                </div>
                                <div
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center  ring-white border border-opacity-50 hover:shadow-lg">
                                    <h3 class="font-bold text-xl text-white">TEAM WORK</h3>
                                </div>
                                <Router-link to="/admissions/registration-form"
                                    class="bg-white/10 backdrop-blur-md p-10 rounded flex items-center justify-center  ring-white border border-opacity-50 hover:shadow-lg">
                                    <p class="text-white">join us</p>
                                    <ArrowRightCircleIcon class="w-9 h-9 ml-4 text-white" />
                                </Router-link>
                            </div>
                        </div>

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
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon
    },
    data() {
        return {
            headerImg
        }
    },
}
</script>
<style>

</style>