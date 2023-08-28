<template>
    <div>
        <nav class='max-xl:py-3 '>
            <div class='w-10/12 mx-auto flex justify-between items-center xl:w-11/12'>
                <RouterLink to="/home" class='indexPage flex flex-row gap-2 items-center'><img
                        class="max-sm:w-14 max-sm:h-14 w-14 h-14" src='../assets/kingsmead.svg'>
                    <h3 class='font-bold md:text-xl max-md:text-md'>Kingsmead Schools</h3>
                </RouterLink>
                <div class="xl:hidden order-last peer" @click="dropdown = !dropdown">
                    <Bars3Icon class=" w-8 h-8 outline-white outline p-1"
                        :class="[isFixed ? 'outline-blue-400 rounded text-blue-500' : 'rounded']" />
                </div>
                <!-- <transition name="slide">
                    <span class="absolute h-screen inset-0 bg-gray-900/90 z-40" v-show="dropdown"
                        @click="dropdown = !dropdown"></span>
                </transition> -->
                <!-- mobile navbar -->
                <transition>
                    <div class="xl:hidden absolute top-0 w-full h-screen left-0 z-50" v-if="dropdown">
                        <ul class="left-0 w-full bg-gray-700 p-2 overflow-y-auto overflow-x-hidden h-screen flex flex-col justify-start">
                            <div class="title flex items-center justify-between p-3 px-3 border-b border-white/10 sticky -top-2 bg-gray-700 z-20">
                                <img class="w-10" src="../assets/kingsmead.svg" alt="">
                                <h2 class="text-2xl text-white">Kingsmead</h2>
                                <span class="  text-white px-2 py-2 ">
                                    <XMarkIcon class="text-white w-6 h-6" @click="dropdown = !dropdown" />
                                </span>
                            </div>
                            <div class="px-5">
                                <li class='nav-item justify-start mr-5 w-full gap-0 text-xl last:border-0 flex flex-col' v-for="x in links" :key="x.id"
                                    @click="x.dropdown ? x.opened = !x.opened : dropdown = !dropdown">
                                    <RouterLink :to="x.to"
                                        class='text-md text-white p-3 relative flex items-center justify-between text-center w-full font-medium'>
                                        {{ x.title }}
                                        <ChevronDownIcon class="w-5 h-5 ml-2 font-bold" v-if="x.dropdown"
                                            :class="{ 'rotate-180 transition-all ease-in-out duration-500': x.opened, 'transition-all duration-700': !x.opened }" />
                                    </RouterLink>
                                    <ul class="text-center"
                                        :class="{ 'block transition-all duration-500 ease-in-out': x.opened, 'dropdown-menu hidden backdrop-blur-sm  text-gray-600 transition-all duration-600': !x.opened }"
                                        v-if="(x.dropdown)">
                                        <li v-for="y in x.dropdownLinks" :key="y.id" @click="dropdown = !dropdown"
                                            class="hover:bg-gradient-to-tr from-blue-400 to-blue-600 hover:text-white rounded-full  text-gray-100  relative">
                                            <RouterLink
                                                class='dropdown-item px-5 text-gray-50  justify-between w-full text-sm flex py-3'
                                                :to='y.to'>{{
                                                    y.title }}
                                            </RouterLink>
                                            <ul class='dropDown-menu hidden w-full text-blue-50 rounded-lg bg-blue-900 shadow-lg top-0 '
                                                v-if="y.dropdown">
                                                <li v-for="z in y.dropdownLinks" class="p-4  hover:text-blue-500 hover:bg-white"
                                                    :key="z">
                                                    <RouterLink class='dropdown-item p-4' :to='z.to'>{{ z.title }}
                                                    </RouterLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>                                
                            </div>

                            <div class="border-t-white-50 mt-auto p-5">
                                <div class="mt-8 flex justify-center space-x-6">
                                    <a v-for="item in social" :key="item.name" :href="item.href"
                                        class="text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">{{ item.name }}</span>
                                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </div>
                                <p class="mt-8 text-center text-base text-gray-400">&copy; 2022 Kingsmead Schools. All
                                    rights reserved.</p>
                            </div>
                        </ul>
                    </div>
                </transition>

                <!-- pc navbar -->
                <div class='md:w-7/12 max-xl:hidden xl:w-8/12 py-2'>
                    <ul class='flex items-center justify-end'>
                        <li class='nav-item group/first mr-5 group/d relative' v-for="x in links" :key="x.id">
                            <RouterLink :to="x.to"
                                :class="[isFixed ? 'group-hover/d:text-blue-500 font-semibold' : 'group-hover/d:text-blue-100']"
                                class='text-sm relative py-5   group-hover/d:border-b-white flex items-center'>{{ x.title }}
                                <ChevronDownIcon class="w-3 h-3 ml-2" v-if="x.dropdown" />
                            </RouterLink>
                            <ul class=' rounded-lg border hidden group-hover/first:block absolute backdrop-blur-sm z-20 text-gray-600 bg-gradient-to-t from-white to-white px-2 py-2 transition-all duration-500 top-22 shadow-lg text-sm'
                                v-if="(x.dropdown)">
                                <span
                                    class="before:w-6 before:h-6 before:border-l before:border-t before:bg-white before:absolute before:-top-3 before:left-5 before:rotate-45 "></span>
                                <li v-for="y in x.dropdownLinks" :key="y.id"
                                    class="py-3 px-2 hover:bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 hover:text-white group/second relative rounded-lg hover:shadow-sm transition-all">
                                    <RouterLink class='dropdown-item px-5 whitespace-nowrap' :to='y.to'>{{ y.title }}
                                    </RouterLink>
                                    <ul class='dropDown-menu hidden group-hover/second:block absolute right-full text-blue-50 border-r border-white bg-blue-900 w-44 shadow-lg top-0 '
                                        v-if="y.dropdown">
                                        <li v-for="z in y.dropdownLinks" class="p-4 hover:text-blue-900 hover:bg-white "
                                            :key="z">
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
import { defineComponent, h } from 'vue'
import { Bars3Icon, ChevronDownIcon, UserCircleIcon, XMarkIcon, Bars2Icon } from "@heroicons/vue/24/solid"
export default {
    props: ['isFixed'],
    components: { Bars3Icon, ChevronDownIcon, UserCircleIcon, XMarkIcon, Bars2Icon },
    data() {
        return {
            dropdown: false,
            links: [
                {
                    id: 6,
                    title: "Home",
                    to: "/",
                    dropdown: false,
                },
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

            ],
            social: [
                {
                    name: 'Facebook',
                    href: 'https://m.facebook.com/profile.php?id=100064179545361&_rdc=2&_rdr&wtsid=rdr_04YYoqKw0Gywim5H1',
                    icon: defineComponent({
                        render: () =>
                            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                h('path', {
                                    'fill-rule': 'evenodd',
                                    d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                                    'clip-rule': 'evenodd',
                                }),
                            ]),
                    }),
                },
                {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/kingsmeadgroupofschools/',
                    icon: defineComponent({
                        render: () =>
                            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                                h('path', {
                                    'fill-rule': 'evenodd',
                                    d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                                    'clip-rule': 'evenodd',
                                }),
                            ]),
                    }),
                },
            ],
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
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease-out;
    opacity: 1;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
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
}</style>