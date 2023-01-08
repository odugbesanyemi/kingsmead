<template >
    <div>
        <siteHeader title="Library" prev-page-name="About" curr-page-name="Library" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl text-blue-800 mb-10  text-center">Welcome to the school Library !</h1>
                    <div class="md:flex gap-8 items-center">
                        <div class="libInt md:w-2/5 md:text-lg text-slate-700 text-justify max-md:order-last" >
                            <p class="mb-5">Our library is a place where students can come to find books, do research,
                                work on projects, and relax with a good book. We have a wide selection of fiction and
                                nonfiction books for all ages, as well as magazines, newspapers, and online resources.
                            </p>
                            <p class="mb-3">Our librarian is always available to help students find the resources they
                                need and to offer recommendations for books to read. We also offer library classes and
                                host events such as book clubs and author visits.</p>
                            <p class="mb-3">In addition to traditional print materials, our library also offers access
                                to digital resources such as e-books and online databases. These resources can be
                                accessed from anywhere with an internet connection, making it easy for students to do
                                research and complete assignments.</p>
                            <p class="mb-3">We encourage all students to visit the library and take advantage of the
                                resources it has to offer. Happy reading!</p>

                        </div>
                        <div class="img md:w-3/5 max-md:order-first">
                            <img src="../assets/images/DSC_0633.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:max-sm:px-10">
                    <div class="">
                        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                            <div class="max-w-6xl mx-auto divide-y-2 divide-gray-200">
                                <h2 class="text-center text-3xl text-gray-900 sm:text-4xl">Know More</h2>
                                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                                    <Disclosure as="div" v-for="option in options" :key="option.question" class="pt-6"
                                        v-slot="{ open }">
                                        <dt class="text-lg">
                                            <DisclosureButton
                                                class="text-left w-full flex justify-between items-start text-gray-700">
                                                <span class="font-medium text-gray-900">
                                                    {{ option.question }}
                                                </span>
                                                <span class="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                                                        aria-hidden="true" />
                                                </span>
                                            </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as="dd" class="mt-2 pr-12">
                                            <div class="text-base text-gray-700" v-html="option.answer"></div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <joinUsAdVue />
        </div>
    </div>
</template>
<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import joinUsAdVue from '../components/joinUsAd.vue'
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, Disclosure, DisclosureButton, joinUsAdVue,
        DisclosurePanel,
        ChevronDownIcon,
    },
    data() {
        return {
            headerImg, defaultPic,
            options: [
                {
                    id: 1,
                    question: "Library Use?",
                    answer:     "The library is open to all students during school hours. Students are welcome to come in and browse the shelves, read a book, or use one of our computers. If you need help finding a book or resource, don't hesitate to ask the librarian for assistance.",
                },
                {
                    id: 3,
                    question: "Borrowing and Lending",
                    answer: "Students are welcome to borrow books from the library. Most books can be checked out for a period of two weeks, and students are allowed to have up to three books checked out at a time. To borrow a book, students will need to present their school ID or library card.",
                },
                {
                    id: 4,
                    question: "Returning Books",
                    answer: "Books should be returned to the library on or before the due date. If a student is unable to return a book by the due date, they may renew it by bringing it to the library and speaking with the librarian. If a book is lost or damaged, the student will be responsible for replacing it or paying for the damages.",
                },
                {
                    id: 5,
                    question: "Lending Policies",
                    answer: "In order to ensure that all students have access to the resources in the library, we ask that students follow these lending policies: <ul class='list-circle py-5'><li> Return books on time </li><li> Keep books in good condition</li><li> Pay for lost or damaged books </li><li> Follow all library rules </li></ul> <p>We hope that these policies help to create a positive and welcoming library environment for all students.</p>",
                },
            ]
        }
    },
}
</script>
<style>

</style>