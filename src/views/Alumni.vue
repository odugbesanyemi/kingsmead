<template >
    <div>
        <siteHeader title="Alumni" prev-page-name="Life at Kingsmead" curr-page-name="Alumni" :img-name="headerImg" />
    </div>

    <section>
        <div class="bg-white md:p-20 p-5">
            <div class="max-w-6xl mx-auto">
                <div class="border">
                    <div class="title p-4 text-center bg-slate-100">
                        <h3 class="font-bold text-3xl text-slate-600">KINGSMEAD COLLEGE ALUMNAE</h3>
                    </div>
                    <div class="content p-5 md:px-20 md:py-10 text-justify text-slate-600">
                        <p class="font-bold text-xl text-slate-800  ">
                            The alumni of the Kingsmead Schools are an impressive group of scientists, technology
                            professionals, engineers, artists, Media practictioners and many more who are making a
                            difference in their fields around the world.
                        </p>
                        <p class="mt-4">
                            Kingsmead College is dedicated to staying connected with its alumni community and encourages
                            them to visit the school, get involved in annual events and fundraisers, and stay in touch
                            through social media and email updates.
                        </p>
                        <p class="py-4">
                            If you are an Alumni of Kingsmead College and have any questions, ideas for improving the
                            alumni program, or would like to schedule a tour of the school's modern facility, please
                            don't hesitate to reach out to us.
                        </p>
                        <p class="py-4">
                            communications and Marketing <br> +234 700 300 4300
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-100 md:p-20 p-5 transition-all duration-300">
            <div class="max-w-6xl mx-auto">
                <accordionComponentVue :data="accordionArray" />
            </div>
        </div>
        <div class="alumni-spotlight relative">
            <img src="../assets/images/DSC_0621.jpg" alt="" class="absolute w-full h-full object-cover bg-scroll">
            <span class="bg-blue-800/70 absolute w-full h-full"></span>
            <div class="max-w-7xl mx-auto">
                <div class="relative p-5 md:p-10">
                    <div class="py-4 text-white text-2xl font-bold text-center">Alunmi Spotlight</div>
                    <div class="grid grid-cols-3">
                        <div class="relative cursor-pointer" v-for="item in alumniSpotlight" :key="item.id">
                            <img :src="item.imgName" alt=""
                                class="relative h-72 w-full object-cover ">
                            <span class="absolute bg-gradient-to-t from-black/80 to-white/0 w-full h-full inset-0"></span>
                            <div class="absolute p-5 text-white bottom-0">
                                <h3 class="text-xl font-bold">{{item.title}}</h3>
                                <p class="py-2 text-small underline">Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="alumni-updates bg-slate-50 py-10">
            <div class="max-w-6xl mx-auto">
                <h2 class="py-10 text-center text-3xl">ALUMNI UPDATES</h2>
                <div class="update p-4 border-b cursor-pointer" v-for="item in alumniUpdates">
                    <div class="title">
                        <h3 class="font-bold text-2xl text-slate-600">{{item.title}}</h3>
                    </div>
                    <p class="date text-slate-400 py-2">{{item.date}}</p>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, PlusIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import accordionComponentVue from '../components/accordionComponent.vue'
import AlumniTodoListVue from '../components/AlumniTodoList.vue'
import AlumniTranscriptFormVue from '../components/AlumniTranscriptForm.vue'
import AlumnicontactFormVue from '../components/AlumnicontactForm.vue'
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, PlusIcon, accordionComponentVue, AlumniTodoListVue, AlumniTranscriptFormVue, AlumnicontactFormVue
    },
    data() {
        return {
            headerImg, defaultPic,
            accordionArray: [
                {
                    title: "TODO LIST",
                    body: AlumniTodoListVue,
                    collapsed: false,
                },
                {
                    title: "CONTACT PROFILE",
                    body: AlumnicontactFormVue,
                    collapsed: false,
                },
                {
                    title: "TRANSCRIPT REQUEST",
                    body: AlumniTranscriptFormVue,
                    collapsed: false,
                },
            ],
            alumniSpotlight:[
                {
                    id:1,
                    imgName:"/src/assets/images/ass._class_cpt_g3_jasmine.jpeg",
                    title:"Bummi 2022 Graduation Set Won the AFFAR Awards",
                    to:"",
                },
                {
                    id:1,
                    imgName:"/src/assets/images/ass._class_cpt_g3_jasmine.jpeg",
                    title:"Bummi 2022 Graduation Set Won the AFFAR Awards",
                    to:"",
                },
                {
                    id:1,
                    imgName:"/src/assets/images/ass._class_cpt_g3_jasmine.jpeg",
                    title:"Bummi 2022 Graduation Set Won the AFFAR Awards",
                    to:"",
                },
            ],
            alumniUpdates:[
                {
                    id:1,
                    title:"Quest for Success Teacher",
                    date:"December 7, 2022",
                    link:"",
                },
                {
                    id:2,
                    title:"Quest for Success Teacher",
                    date:"December 7, 2022",
                    link:"",
                },
            ],
        }
    },
}
</script>
<style>

</style>