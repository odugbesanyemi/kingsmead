<template>
    <div>
        <nav class='max-xl:py-4'>
            <div class='w-10/12 mx-auto flex justify-between items-center xl:w-11/12'>
                <RouterLink to="/home" class='indexPage flex flex-row items-center'><img
                        class="max-sm:w-8 max-sm:h-8 w-16 h-16" src='../assets/kingsmead.svg'>
                    <h3 class=' font-bold md:text-3xl max-md:text-xl'>Kingsmead</h3>
                </RouterLink>
                <div class="xl:hidden order-last peer" @click="dropdown = !dropdown">
                    <Bars3Icon class=" w-8 h-8" />
                </div>
                <!-- mobile navbar -->  
                <transition>
                    <div class="xl:hidden absolute bg-white w-11/12 left-1/2 -translate-x-1/2 -top-1 " v-show="dropdown">
                        <span
                            class="rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 text-white px-2 py-2 z-10 absolute top-3 -right-2 shadow-lg ring">
                            <XMarkIcon class="text-white w-6 h-6" @click="dropdown = !dropdown" />
                        </span>
                        <ul class="absolute top-4 left-0 rounded rounded-tr-2xl bg-white w-full">
                            <li class='nav-item group/first mr-5 group/d w-full' v-for="x in links" :key="x.id">
                                <RouterLink :to="x.to"
                                    class='text-md p-4 relative  border-b border-transparent border-2 text-gray-600 group-hover/d:border-b-white flex items-center justify-between'>
                                    {{ x.title }}
                                    <ChevronDownIcon class="w-5 h-5 ml-2" v-if="x.dropdown" />
                                </RouterLink>
                                <ul class='dropdown-menu hidden group-hover/first:block backdrop-blur-sm text-gray-600 bg-gradient-to-t from-white to-white'
                                    v-if="(x.dropdown)">
                                    <li v-for="y in x.dropdownLinks" :key="y.id"
                                        class="py-3 px-2 hover:bg-gradient-to-tr from-blue-400 to-blue-600 hover:text-white group/second relative ">
                                        <RouterLink class='dropdown-item px-5 -z-10' :to='y.to'>{{ y.title }}
                                        </RouterLink>
                                        <ul class='dropDown-menu hidden group-hover/second:block w-full text-blue-50 rounded-lg bg-blue-900 shadow-lg top-0 z-10'
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
                        <li class='nav-item group/first mr-5 group/d' v-for="x in links" :key="x.id">
                            <RouterLink :to="x.to"
                                class='text-lg xl:text-base relative py-7 border-b border-transparent border-2  group-hover/d:border-b group-hover/d:text-gray-600 group-hover/d:border-b-white flex items-center'>
                                {{ x.title }}
                                <ChevronDownIcon class="w-3 h-3 ml-2" v-if="x.dropdown" />
                            </RouterLink>
                            <ul class='dropdown-menu hidden group-hover/first:block absolute  backdrop-blur-sm text-gray-600 bg-gradient-to-t from-white to-white'
                                v-if="(x.dropdown)">
                                <li v-for="y in x.dropdownLinks" :key="y.id"
                                    class="py-3 px-2 hover:bg-blue-900 hover:text-white group/second relative ">
                                    <RouterLink class='dropdown-item px-5 -z-10' :to='y.to'>{{ y.title }}</RouterLink>
                                    <ul class='dropDown-menu hidden group-hover/second:block absolute right-full text-blue-50 border-r border-white bg-blue-900 w-44 shadow-lg top-0 z-10'
                                        v-if="y.dropdown">
                                        <li v-for="z in y.dropdownLinks" class="p-4 hover:text-blue-900 hover:bg-white"
                                            :key="z">
                                            <RouterLink class='dropdown-item p-4' :to='z.to'>{{ z.title }}</RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="xl:w-2/12">
                    <UserCircleIcon class="w-9 h-9 xl:hidden" />
                    <button
                        class="max-xl:hidden shadow-lg rounded-full bg-gradient-to-tr from-blue-600 to-blue-800 py-2 w-full md:py-3 px-8 text-blue-50 hover:from-blue-800 hover:to-blue-600 text-xl">Sign
                        in</button>
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
            dropdown:false,
            links: [

                {
                    id: 0,
                    title: "Home",
                    to: "/",
                    dropdown: false,

                },
                {
                    id: 1,
                    title: "About Kingsmead",
                    to: "/about/history",
                    dropdown: true,
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
                    to: "/academics/student-Leadership",
                    dropdown: true,
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
                    title: "Admissions",
                    to: "/",
                    dropdown: true,
                    dropdownLinks: [
                        {
                            id: 1,
                            title: "Schools",
                            to: "/",
                            dropdown: true,
                            dropdownLinks: [
                                {
                                    title: "Pre-School",
                                    to: "/"
                                },
                                {
                                    title: "Elementary",
                                    to: "/"
                                },
                                {
                                    title: "College",
                                    to: "/"
                                },
                            ]
                        },
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
                    id: 4,
                    title: "Life at Kingsmead",
                    to: "/Life-at-Kingsmead/studentLife",
                    dropdown: true,
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
                        {
                            title: "School Reports",
                            to: "/Life-at-Kingsmead/school-report",
                            dropdown: false,
                            dropdownLinks: []
                        },
                    ]
                },
                {
                    id: 5,
                    title: "Gallery",
                    to: "/",
                    dropdown: false,
                    dropdownLinks: [
                        {
                            title: "History",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },

                    ]
                }

            ]
        }
    },
}
</script>
<style >
nav .router-link-active:not(.indexPage, .dropdown-item) {
    color: rgb(173, 173, 173);
    border-bottom: 2px solid white !important;
}

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
</style>