<template >
    <div>
        <siteHeader title="FAQ" prev-page-name="About" curr-page-name="Faq" :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <span class="absolute inset-0 w-full h-full -z-10"><img src="../assets/images/DSC_0865.JPG"
                    class="w-full h-full inset-0 object-cover object-bottom" alt=""></span>
            <span
                class="absolute inset-0 max-md:bg-gradient-to-tr max-md:to-blue-50/80 bg-gradient-to-r from-blue-100 via-white to-transparent -z-10"></span>
            <div class="bg-transparent  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl font-bold text-blue-800 mb-10">Frequently Asked Questions</h1>
                    <div class="">
                        <div class="bg-white rounded-lg">
                            <div class="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
                                <div class="mt-12">
                                    <dl
                                        class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                                        <div v-for="faq in faqs" :key="faq.id">
                                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                                {{ faq.question }}
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500">
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
                    question: "What is your school Philosophy or Vision?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 2,
                    question: "What type of students are you looking for?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 3,
                    question: "What curriculum do you use?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 4,
                    question: "What are your class sizes and student-to-teacher ratios?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 5,
                    question: "How much is tuition and what does it include?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 6,
                    question: "What extracurricullar activities do you offer?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 7,
                    question: "What are your teachers' qualifications and what professional development opportunities are available to them?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 8,
                    question: "How do you integrate Technology into the classroom and curriculum?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
                {
                    id: 9,
                    question: "How do you measure individual achievement and progress?",
                    answer:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia veritatis molestias reiciendis impedit natus laborum consequuntur recusandae. Quis ipsam consequatur quisquam quaerat non laboriosam minus voluptate ex tempore incidunt.",
                },
            ]
        }
    },
}
</script>
<style>

</style>