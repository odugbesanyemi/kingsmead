<template>
    <div>
        <nav class='max-xl:py-4 '>
            <div class='w-10/12 mx-auto flex justify-between items-center xl:w-11/12'>
                <RouterLink to="/home" class='indexPage flex flex-row items-center'><img
                        class="max-sm:w-8 max-sm:h-8 w-16 h-16" src='../assets/kingsmead.svg'>
                    <h3 class=' font-bold md:text-3xl max-md:text-xl'>Kingsmead Schools</h3>
                </RouterLink>
                <div class="xl:hidden order-last peer" @click="dropdown = !dropdown">
                    <Bars3Icon class=" w-8 h-8" />
                </div>
                <transition name="slide">
                    <span class="absolute h-screen inset-0 bg-gray-900/90 z-10" v-show="dropdown"
                        @click="dropdown = !dropdown"></span>
                </transition>
                <!-- mobile navbar -->
                <transition>
                    <div class="xl:hidden absolute bg-white w-10/12 left-0 -top-1 z-10" v-show="dropdown">

                        <ul class="absolute left-0 w-full bg-white h-screen">
                            <span class=" bg-gradient-to-tr from-blue-500 to-blue-600 text-white px-2 py-2 absolute -right-12 top-5 shadow-lg ring z-20">
                                <XMarkIcon class="text-white w-6 h-6" @click="dropdown = !dropdown" />
                            </span>
                            <li class='nav-item  mr-5 w-full text-xl border-b border-slate-200/50 last:border-0'
                                v-for="x in links" :key="x.id"
                                @click="x.dropdown ? x.opened = !x.opened : dropdown = !dropdown">
                                <RouterLink :to="x.to"
                                    class='text-md p-4 relative  text-gray-600 flex items-center justify-between font-bold w-full'>
                                    {{ x.title }}
                                    <ChevronDownIcon class="w-5 h-5 ml-2 font-bold" v-if="x.dropdown" :class="{ 'rotate-180 transition-all ease-in-out duration-500': x.opened, 'transition-all duration-700': !x.opened }" />
                                </RouterLink>
                                <ul class="text-gray-600"
                                    :class="{ 'block bg-gray-100 transition-all duration-500 ease-in-out': x.opened, 'dropdown-menu hidden backdrop-blur-sm  text-gray-600 transition-all duration-600': !x.opened }"
                                    v-if="(x.dropdown)">
                                    <li v-for="y in x.dropdownLinks" :key="y.id" @click="dropdown = !dropdown"
                                        class="hover:bg-gradient-to-tr from-blue-400 to-blue-600 hover:text-white relative border-b-white border">
                                        <RouterLink class='dropdown-item px-5 text-gray-500 w-full flex py-3'
                                            :to='y.to'>{{ y.title }}
                                        </RouterLink>
                                        <ul class='dropDown-menu hidden w-full text-blue-50 rounded-lg bg-blue-900 shadow-lg top-0 '
                                            v-if="y.dropdown">
                                            <li v-for="z in y.dropdownLinks"
                                                class="p-4 hover:text-blue-500 hover:bg-white" :key="z">
                                                <RouterLink class='dropdown-item p-4' :to='z.to'>{{ z.title }}
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </transition>

                <!-- pc navbar -->
                <div class='md:w-7/12 max-xl:hidden xl:w-8/12 '>
                    <ul class='flex items-center justify-center'>
                        <li class='nav-item group/first mr-5 group/d relative' v-for="x in links" :key="x.id">
                            <RouterLink :to="x.to"
                                class='text-lg xl:text-base relative py-7  group-hover/d:text-blue-200 group-hover/d:border-b-white flex items-center'>{{ x.title }}
                                <ChevronDownIcon class="w-3 h-3 ml-2" v-if="x.dropdown" />
                            </RouterLink>

                                <ul class='w-72 rounded-lg hidden group-hover/first:block absolute backdrop-blur-sm z-20 text-gray-600 bg-gradient-to-t from-white to-white px-2 py-2 transition-all duration-500 top-22 shadow-lg' v-if="(x.dropdown)">
                                    <span class="before:w-6 before:h-6 before:bg-white before:absolute before:-top-2 before:rotate-45 "></span>
                                    <li v-for="y in x.dropdownLinks" :key="y.id"
                                        class="py-3 px-2 hover:bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 hover:text-white group/second relative rounded-lg hover:shadow-sm transition-all">
                                        <RouterLink class='dropdown-item px-5' :to='y.to'>{{ y.title }}</RouterLink>
                                        <ul class='dropDown-menu hidden group-hover/second:block absolute right-full text-blue-50 border-r border-white bg-blue-900 w-44 shadow-lg top-0 '
                                            v-if="y.dropdown">
                                            <li v-for="z in y.dropdownLinks"
                                                class="p-4 hover:text-blue-900 hover:bg-white " :key="z">
                                                <RouterLink class='dropdown-item p-4' :to='z.to'>{{ z.title }}
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { Bars3Icon, ChevronDownIcon, UserCircleIcon, XMarkIcon } from "@heroicons/vue/24/solid"
export default {
    components: { Bars3Icon, ChevronDownIcon, UserCircleIcon, XMarkIcon },
    data() {
        return {
            dropdown: false,
            links: [

                {
                    id: 1,
                    title: "About Kingsmead",
                    to: "",
                    dropdown: true,
                    opened: false,
                    dropdownLinks: [
                        {
                            id: 0,
                            title: "History",
                            to: "/about/history",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 1,
                            title: "Our Governing Committee",
                            to: "/about/governing-committee",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 2,
                            title: "School Anthem / Motto",
                            to: "/about/School-Anthem",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 3,
                            title: "Managing Partner's Message",
                            to: "/about/managing-partners-message",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 4,
                            title: "Principal's Message",
                            to: "/about/principal-message",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 5,
                            title: "FAQ",
                            to: "/about/Faq",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 6,
                            title: "Contact-us",
                            to: "/about/contact-us",
                            dropdown: false,
                            dropdownLinks: []
                        }

                    ]
                },
                {
                    id: 2,
                    title: "Academics",
                    to: "",
                    dropdown: true,
                    opened: false,
                    dropdownLinks: [
                        {
                            id: 1,
                            title: "Student Leadership",
                            to: "/academics/student-leadership",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 2,
                            title: "Curriculum",
                            to: "/academics/curriculum",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 3,
                            title: "Learning Environment",
                            to: "/academics/learning-environment",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 4,
                            title: "Library",
                            to: "/academics/library",
                            dropdown: false,
                            dropdownLinks: []
                        },

                    ]
                },
                {
                    id: 3,
                    title: "Schools",
                    to: "",
                    dropdown: true,
                    opened: false,
                    dropdownLinks: [
                        {
                            title: "Pre-School",
                            to: "/schools/preschool"
                        },
                        {
                            title: "Elementary",
                            to: "/schools/elementary"
                        },
                        {
                            title: "College",
                            to: "/schools/college"
                        },
                    ]
                },
                {
                    id: 4,
                    title: "Admissions",
                    to: "",
                    dropdown: true,
                    opened: false,
                    dropdownLinks: [
                        {
                            id: 2,
                            title: "Criteria & Policy",
                            to: "/admissions/criteria-policy",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 3,
                            title: "Registration Form",
                            to: "/admissions/registration-form",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id: 4,
                            title: "Fees & Deposit",
                            to: "/admissions/fees-deposit",
                            dropdown: false,
                            dropdownLinks: []
                        },

                    ]
                },
                {
                    id: 5,
                    title: "Life at Kingsmead",
                    to: "",
                    dropdown: true,
                    opened: false,
                    dropdownLinks: [
                        {
                            title: "Student Life",
                            to: "/Life-at-Kingsmead/studentLife",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Pastoral Care Unit",
                            to: "/Life-at-Kingsmead/pastoral-unit",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Alumni",
                            to: "/Life-at-Kingsmead/Alumni",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        // {
                        //     title: "School Reports",
                        //     to: "/Life-at-Kingsmead/school-report",
                        //     dropdown: false,
                        //     dropdownLinks: []
                        // },
                    ]
                },
                {
                    id: 6,
                    title: "Gallery",
                    to: "/gallery",
                    dropdown: false,
                }

            ]
        }
    },
    methods: {
        alertTrue() {
            alert('true')
        },
        alertFalse() {
            alert('false')
        }
    }
}
</script>
<style scoped>
/* transition */
.v-enter-from,
.v-leave-to {
    opacity: 0;
    left: -200px !important;
}

.v-enter-active,
.v-leave-active {
    transition: .5s ease-in-out;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
    right: 200px !important;
}

@keyframes slide {
    0% {
        right: 0%;
    }

    100% {
        right: 100%;
    }
}

.slide-enter-active {
    animation: slide 1s ease-in-out reverse;
}

.slide-leave-active {
    animation: slide .3s ease-in-out;
}
</style>