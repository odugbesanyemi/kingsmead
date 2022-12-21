<template >
    <div>
        <siteHeader title="School Report" prev-page-name="About" curr-page-name="School Report" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class="mb-10">
                        <h1 class="text-5xl font-bold text-blue-800 ">School Report</h1>
                        <p class="mt-4">A showcase of our leaders who have earned their positions as Leaders at
                            Kingsmead Schools</p>
                    </div>


                </div>
            </div>
        </div>

        <section>
            <div class="md:grid grid-cols-2 pb-20">
                <div class="md:p-10 max-md:px-10">
                    <h1 class="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit, ullam facere
                        eligendi delectus, voluptas quis perspiciatis natus rerum ipsa eius magni molestiae voluptate
                        modi sequi debitis exercitationem. Quas, architecto?</h1>
                    <h1 class="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magni omnis
                        explicabo maxime voluptatibus deleniti, sequi quo, soluta culpa, veniam beatae accusamus
                        delectus incidunt laudantium! Et labore ratione voluptatibus nesciunt.</h1>
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus quidem molestias dolor,
                        nisi ipsum impedit fuga sunt ea accusantium soluta consectetur, iusto suscipit? Dolore impedit
                        quae inventore quaerat explicabo.</h1>
                </div>
                <div class="relative max-md:pb-72">
                    <div class="absolute md:h-full w-full">
                        <img class=" md:w-9/12 py-10" src="../assets/images/DSC_0703.JPG">
                        <div class="absolute bg-blue-900 p-12 max-md:top-44 top-56 text-white md:h-44 ">
                            <h1 class="font-bold mt-10">Term Date</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div class="w-10/12 mx-auto py-10">
                <ul class="text-sky-900 p-5 outline outline-1">
                <li class="mt-7" v-for="(question, index) in questions" v-bind:key="index">
                    <button v-on:click="toggleAnswer(index)">{{ question.title }}</button>
                    <p v-if="question.isOpen">{{ question.answer }}</p>
                </li>
                </ul>
            </div>
        </section>

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
                    <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register
                        Today</button>
                </div>
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
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon,
       

    },
    data() {
        return {
          
            questions: [
        {
          title: '1.CAT4 Assessment/ Progress Test',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse dolore voluptates deserunt sequi neque explicabo asperiores quia adipisci provident ipsam iusto!',
          isOpen: false
        },
        {
          title: '2.Forms Order Assessment',
          answer: 'To get started with Vue.js, you can install it using a package manager like npm or yarn, and then create a new Vue project using the Vue CLI.',
          isOpen: false
        },
        {
          title: '3.End of Term Assessment',
          answer: 'Some features of Vue.js include reactive components, a template-based syntax, and a modular architecture.',
          isOpen: false
        },
        {
          title: '4.External Examination',
          answer: 'Some features of Vue.js include reactive components, a template-based syntax, and a modular architecture.',
          isOpen: false
        }
      ],
    
 
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

    methods: {
    toggleAnswer(index) {
      this.questions[index].isOpen = !this.questions[index].isOpen
    }
  }
}
</script>
<style>

</style>