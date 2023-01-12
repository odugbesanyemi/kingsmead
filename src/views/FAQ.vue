<template >
    <div>
        <siteHeader title="FAQ" prev-page-name="About" curr-page-name="Faq" :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <span class="absolute inset-0 w-full h-full -z-10"><img src="../assets/images/DSC_0865.jpg"
                    class="w-full h-full inset-0 object-cover object-bottom" alt=""></span>
            <span
                class="absolute inset-0 max-md:bg-gradient-to-tr max-md:to-blue-50/80 bg-gradient-to-r from-blue-100 via-white to-transparent -z-10"></span>
            <div class="bg-transparent  py-10 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl max-md:text-3xl text-blue-800 mb-10 text-center">Frequently Asked Questions</h1>
                    <div class="">
                        <div class="bg-white rounded-lg">
                            <div class="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
                                <div class="mt-12">
                                    <dl
                                        class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                                        <div v-for="faq in faqs" :key="faq.id">
                                            <dt class="text-lg leading-6 font-semibold text-gray-900">
                                                {{ faq.question }}
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 italic">
                                                {{ faq.answer }}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
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
import defaultPic from "../assets/logos/default.png"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon
    },
    data() {
        return {
            headerImg, defaultPic,
            faqs: [
                {
                    id: 1,
                    question: "What is the school's mission statement?",
                    answer:
                        "Our school's mission statement is to inspire students to achieve the highest standard of intellectual and personal development through a stimulating and comprehensive programme.",
                },
                {
                    id: 2,
                    question: "What are the school hours?",
                    answer:
                        "Our school's hours are from 8:00 AM to 3:00 PM, Monday through Friday",
                },
                {
                    id: 3,
                    question: "Is the school accredited?",
                    answer:
                        "Yes, our school is fully accredited by the state department of education and meets all necessary standards for academic quality.",
                },
                {
                    id: 4,
                    question: "What grade levels does the school serve?",
                    answer:
                        "Our school serves students in grades K-12.",
                },
                {
                    id: 5,
                    question: "What extracurricular activities are available?",
                    answer:
                        "Our school offers a variety of extracurricular activities, including sports teams, music and drama programs, and clubs and organizations.",
                },
                {
                    id: 6,
                    question: "How do I enroll my child in the school",
                    answer:
                        "To enroll your child in our school, please visit our website and fill out the online enrollment form. You can also contact our office for more information and to schedule a tour of the school.",
                },
                {
                    id: 7,
                    question: "What is the school's policy on bullying?",
                    answer:
                        "Our school has a zero tolerance policy for bullying. We take all reports of bullying seriously and have established protocols in place for addressing and preventing it. If your child has experienced or witnessed bullying, please contact a school administrator or counselor.",
                },

            ]
        }
    },
}
</script>
<style>

</style>