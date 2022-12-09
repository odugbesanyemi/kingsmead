<template>
    <div>
        <nav class=' py-5 md:py-4'>
            <div class='w-10/12 mx-auto flex justify-between items-center'>
                <RouterLink to="" class='flex flex-row items-center'><img class="max-sm:w-8 max-sm:h-8 w-16 h-16"
                        src='../assets/kingsmead.svg'>
                    <h3 class='text-white font-bold md:text-3xl max-md:text-xl'>Kingsmead</h3>
                </RouterLink>
                <div class="xl:hidden order-last">
                    <Bars3Icon class="text-white w-8 h-8 "/>
                </div>
                <div class='md:w-7/12 max-xl:hidden ' id=''>
                    <ul class='flex text-blue-50'>
                        <li class='nav-item group/first mr-5' v-for="x in links" :key="x.id">
                            <RouterLink :to="x.to" class='text-lg xl:text-base'>{{ x.title }}</RouterLink>
                            <ul class='dropdown-menu hidden group-hover/first:block absolute  backdrop-blur-sm py-4 text-gray-600 border-l bg-gradient-to-t from-white to-white/0'
                                v-if="(x.dropdown)">
                                <li v-for="y in x.dropdownLinks" :key="y.id" class="py-3 px-2 hover:bg-blue-900 hover:text-white group/second relative"><RouterLink
                                        class='dropdown-item px-5' :to='y.to'>{{ y.title }}</RouterLink>
                                        <ul class='dropDown-menu hidden group-hover/second:block absolute -left-28 bg-gradient-to-b from-blue-800 to-blue-600 text-blue-50 top-0'  v-if="y.dropdown">
                                            <li v-for="z in y.dropdownLinks" class=""><RouterLink class='dropdown-item' :to='z.to'>{{z.title}}</RouterLink></li>
                                        </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="xl:w-2/12">
                    <button class="shadow-lg rounded-full bg-gradient-to-tr from-blue-600 to-blue-800 py-2 w-full md:py-3 px-8 text-blue-50 hover:from-blue-800 hover:to-blue-600 text-xl">Sign in</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {Bars3Icon} from "@heroicons/vue/24/solid"   
export default {
    components:{Bars3Icon},
    data() {
        return {
            links: [
                {
                    id:0,
                    title: "Home",
                    to: "/",
                    dropdown: false,

                },
                {
                    id:1,
                    title: "About Kingsmead",
                    to: "/about/history",
                    dropdown: true,
                    dropdownLinks: [
                        {
                            id:0,
                            title: "History",
                            to: "/about/history",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:1,
                            title: "Our Governing Committee",
                            to: "/about/governing-committee",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:2,
                            title: "School Anthem / Motto",
                            to: "/about/School-Anthem",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:3,
                            title: "Managing Partner's Message",
                            to: "/about/managing-partners-message",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:4,
                            title: "Principal's Message",
                            to: "/about/principal-message",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:5,
                            title: "FAQ",
                            to: "/about/Faq",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            id:6,
                            title: "Contact-us",
                            to: "/about/contact-us",
                            dropdown: false,
                            dropdownLinks: []
                        }

                    ]
                },
                {
                    id:2,
                    title: "Academics",
                    to: "/",
                    dropdown: true,
                    dropdownLinks: [
                        {
                            title: "Student Leadership",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Curriculum",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        }, {
                            title: "Learning Environment",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        }, {
                            title: "Library",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },

                    ]
                },
                {
                    id:3,
                    title: "Admissions",
                    to: "/",
                    dropdown: true,
                    dropdownLinks: [
                        {
                            title: "Schools",
                            to: "/",
                            dropdown: true,
                            dropdownLinks: [
                                {
                                    title:"Pre-School",
                                    to:"/"
                                },
                                {
                                    title:"Elementary",
                                    to:"/"
                                },
                                {
                                    title:"College",
                                    to:"/"
                                },
                            ]
                        },
                        {
                            title: "Criteria & Policy",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Registration Form",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Fees & Deposit",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },

                    ]
                },
                {
                    id:4,
                    title: "Life at Kingsmead",
                    to: "/",
                    dropdown: true,
                    dropdownLinks: [
                        {
                            title: "Student Life",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Pastoral Care Unit",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "Alumni",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                        {
                            title: "School Reports",
                            to: "/",
                            dropdown: false,
                            dropdownLinks: []
                        },
                    ]
                },
                {
                    id:5,
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

</style>