<template >
    <div>
        <siteHeader title="Curriculum" prev-page-name="About" curr-page-name="Curriculum" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl font-bold text-blue-800 mb-10">Curriculum Overview</h1>
                    <div class="md:flex items-center gap-7">
                        <div class="md:w-1/2">
                            <p class="leading-loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus impedit placeat nemo
                                veritatis aliquid quaerat ratione necessitatibus nulla aut inventore animi deserunt
                                debitis dolorem, explicabo natus magni expedita? Ex, facere?
                            </p>
                            <p class="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda
                                molestias ut ullam voluptate, enim reiciendis corrupti, voluptatibus fugiat sunt quas
                                deserunt animi error quae quisquam eveniet quam, autem aspernatur?</p>
                        </div>
                        <div class="class md:w-1/2">
                            <div class="grid grid-cols-2">
                                <div
                                    class="bg-red-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <LightBulbIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Admission Guidlines</p>
                                </div>
                                <div
                                    class="bg-purple-500 flex md:border-l flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <UserGroupIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Pastoral Care Unit</p>
                                </div>
                                <div
                                    class="bg-blue-500 flex flex-col items-center justify-center p-10 hover:bg-opacity-90">
                                    <ArrowRightOnRectangleIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Portal Login</p>
                                </div>
                                <div
                                    class="bg-indigo-500 flex flex-col md:border-l items-center justify-center p-10 hover:bg-opacity-90">
                                    <ChatBubbleBottomCenterIcon class="text-white w-10 h-10 mb-4" />
                                    <p class="text-white text-sm font-bold">Join Our community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10 mt-20">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img src="../assets/images/dsc_053.jpg" class="w-full h-full" alt="">
                        </div>
                        <div class="bg-blue-800 md:p-20 p-5 md:w-1/2">
                            <h2 class="text-3xl font-bold mb-7 text-white w">Personalize</h2>
                            <p class="text-white leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo maxime ex optio explicabo voluptas, quidem quas harum vel mollitia expedita, accusantium qui blanditiis aliquam doloremque! Omnis quae deserunt qui cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum ab dolorem dicta dolor omnis laborum praesentium debitis odit, saepe, officia ratione voluptatum quo velit quaerat optio esse, blanditiis odio.</p>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10 mt-20">
                    <h1 class="my-10 text-slate-600 text-center text-4xl font-bold">Our Curriculums</h1>
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