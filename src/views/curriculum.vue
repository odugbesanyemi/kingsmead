<template >
    <div>
        <siteHeader title="Curriculum" prev-page-name="About" curr-page-name="Curriculum" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-8 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl max-md:text-3xl text-blue-800 mb-10 text-center">Curriculum Overview</h1>
                    <div class="md:flex items-center gap-7 ">
                        <div class=" text-justify text-slate-600 text-lg max-md:text-md">
                            <p class="pb-2">At our school, we believe that a strong educational foundation is crucial for the success of our students. That's why we have developed a comprehensive and challenging curriculum that is designed to prepare our students for academic success in college and beyond.</p>
                            <p class="pb-2">Our curriculum is structured around the core subjects of math, science, English, and social studies. Within each of these subjects, we offer a range of courses at different levels to meet the needs and abilities of all our students. For example, in math, we offer courses ranging from basic arithmetic to advanced calculus, and in science, we offer courses in biology, chemistry, and physics.</p>
                            <p class="pb-2">In addition to the core subjects, we also offer a wide range of elective courses, such as art, music, and physical education, to help our students explore their passions and develop new skills.</p>
                            <p class=""></p>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10 mt-8">
                    <h1 class="my-4 text-blue-800 text-center text-4xl">Our Curriculums</h1>
                    <div class="grid md:grid-cols-4  ">
                        <div class="p-5 border rounded-lg m-1" v-for="x in curriculumData" :key="x.id">
                            <h3 class="subject font-bold text-xl mb-3">{{x.title}}</h3>
                            <ul class="text-slate-700">
                                <li v-for="y in x.subjects">{{y}}</li>
                            </ul>
                        </div>
                        <div class="p-5 flex justify-center bg-blue-900 rounded-lg">
                            <div class="flex flex-col justify-center">
                                <p class="font-bold leading-loose mb-5 text-white">To Download all contents of our updated curriculum, Kindly click button below</p>
                                <button class="p-4 rounded hover:bg-red-600 text-white bg-red-500 w-full font-bold">
                                    Download Now
                                </button>
                            </div>
                        </div>
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