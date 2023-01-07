<template >
    <div>
        <siteHeader title="Curriculum" prev-page-name="About" curr-page-name="Curriculum" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl text-blue-800 mb-10">Curriculum Overview</h1>
                    <div class="md:flex items-center gap-7 ">
                        <div class="md:w-3/5 text-justify">
                            <p class="leading-loose pb-3">At our school, we believe that a strong educational foundation is crucial for the success of our students. That's why we have developed a comprehensive and challenging curriculum that is designed to prepare our students for academic success in college and beyond.</p>
                            <p class="leading-loose pb-3">Our curriculum is structured around the core subjects of math, science, English, and social studies. Within each of these subjects, we offer a range of courses at different levels to meet the needs and abilities of all our students. For example, in math, we offer courses ranging from basic arithmetic to advanced calculus, and in science, we offer courses in biology, chemistry, and physics.</p>
                            <p class="leading-loose pb-3">In addition to the core subjects, we also offer a wide range of elective courses, such as art, music, and physical education, to help our students explore their passions and develop new skills.</p>
                            <p class="leading-loose "></p>
                        </div>
                        <div class="class md:w-2/5">
                            <div class="grid grid-cols-2">
                                <div
                                    class="bg-red-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <LightBulbIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Admission Guidlines</p>
                                </div>
                                <div
                                    class="bg-purple-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <UserGroupIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Pastoral Care Unit</p>
                                </div>
                                <div
                                    class="bg-blue-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <ArrowRightOnRectangleIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Portal Login</p>
                                </div>
                                <div
                                    class="bg-indigo-500 flex flex-col tems-center justify-center p-10 hover:bg-opacity-90">
                                    <ChatBubbleBottomCenterIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Join Our community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10 mt-20">
                    <h1 class="my-10 text-blue-800 text-center text-4xl">Our Curriculums</h1>
                    <div class="grid md:grid-cols-4  border border-dashed">
                        <div class="p-5" v-for="x in curriculumData" :key="x.id">
                            <h3 class="subject font-bold text-xl mb-5">{{x.title}}</h3>
                            <ul class="">
                                <li v-for="y in x.subjects">{{y}}</li>
                            </ul>
                        </div>
                        <div class="p-5 flex justify-center bg-blue-900">
                            <div>
                                <p class="font-bold leading-loose mb-7 text-white">To Download all contents of our updated curriculum, Kindly click button below</p>
                                <button class="p-4 rounded hover:bg-red-600 text-white bg-red-500 w-full">
                                    Download Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96">
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
                        <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register
                            Today</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, LightBulbIcon,UserGroupIcon, ArrowRightOnRectangleIcon,ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon,LightBulbIcon,UserGroupIcon,ArrowRightOnRectangleIcon,ChatBubbleBottomCenterIcon
    },
    data() {
        return {
            headerImg, defaultPic,
            curriculumData:[
                {
                    id:1,
                    title:"General Subjects",
                    subjects:[
                        'English Language','General Mathematics','Computer Studies','Data Processing','Civic Education','Biology','Economics'
                    ]
                },
                {
                    id:2,
                    title:"Science Subjects",
                    subjects:[
                        'Chemistry','Further-Mathematics','Physics','Geography','Agric.Sci/Food & Nutrition'
                    ]
                },
                {
                    id:3,
                    title:"Technical Subjects",
                    subjects:[
                        'Technical Drawing','Physics','Chemistry','Further Mathematics','Geography'
                    ]
                },
                {
                    id:4,
                    title:"Commercial Subjects",
                    subjects:[
                        'Commerce','Accounting','French/Yoruba','Agric. Sci/Food & Nutrition','Further Mathematics','Geography'
                    ]
                },
                {
                    id:5,
                    title:"Art Subjects",
                    subjects:[
                        'Literature','Yoruba','French','Visual Arts','C.R.S','Government','History'
                    ]
                },
            ],
        }
    },
}
</script>
<style>

</style>