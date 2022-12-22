<template >
    <div>
        <siteHeader title="Library" prev-page-name="About" curr-page-name="Library" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl text-blue-800 mb-10 md:w-3/5">Reading has never been this Intresting</h1>
                    <div class="flex gap-3 items-center">
                        <div class="libInt w-2/5 md:text-lg text-slate-500">
                            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ratione.
                                Magnam asperiores quia eaque consectetur ipsum, tempore quae, blanditiis, provident vero
                                alias eius exercitationem in fugit amet totam sequi vitae? Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Voluptas, fugiat doloribus neque suscipit optio sapiente
                                ad, facere aliquid odit laboriosam mollitia soluta eaque harum iusto, sequi culpa
                                voluptates vel maiores!</p>
                            <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ratione.
                                Magnam asperiores quia eaque consectetur ipsum, tempore quae, blanditiis, provident vero
                                alias eius exercitationem in fugit amet totam sequi vitae? Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Voluptas, fugiat doloribus neque suscipit optio sapiente
                                ad, facere aliquid odit laboriosam mollitia soluta eaque harum iusto, sequi culpa
                                voluptates vel maiores!</p>
                        </div>
                        <div class="img w-3/5">
                            <img src="../assets/images/DSC_0633.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:max-sm:px-10">
                    <div class="bg-gray-50">
                        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                            <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                <h2 class="text-center text-3xl text-gray-900 sm:text-4xl">Know More</h2>
                                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                                    <Disclosure as="div" v-for="option in options" :key="option.question" class="pt-6"
                                        v-slot="{ open }">
                                        <dt class="text-lg">
                                            <DisclosureButton
                                                class="text-left w-full flex justify-between items-start text-gray-400">
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
                                            <p class="text-base text-gray-500">
                                                {{option.answer}}
                                            </p>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <joinUsAdVue/>
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
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, Disclosure, DisclosureButton,joinUsAdVue,
        DisclosurePanel,
        ChevronDownIcon,
    },
    data() {
        return {
            headerImg, defaultPic,
            options: [
                {
                    id:1,
                    question: "Library Use?",
                    answer:
                        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                },
                {
                    id:2,
                    question: "Library Collection?",
                    answer:
                        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                },
                {
                    id:3,
                    question: "Borrowing and Lending",
                    answer:
                        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                },
                {
                    id:1,
                    question: "Kingsmead E-Library System",
                    answer:
                        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                },
            ]
        }
    },
}
</script>
<style>

</style>