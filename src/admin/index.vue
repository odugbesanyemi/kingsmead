<template >
    <div class="flex flex-row overflow-y-hidden overflow-x-hidden">
        <transition name="sidenav">
            <nav class="sidenav w-96 border-r min-h-screen " v-if="sidenavOpened">
                <div class="iconLogo my-12 pl-9">
                    <h3 class="font-bold text-lg">Kingsmead Admin</h3>
                </div>
                <hr>
                <div class="p-4 overflow-y-hidden">
                    <ul>
                        <li v-for="item in navigation" class="p-3 px-2 rounded-full relative" @click="item.optionOpened = !item.optionOpened">
                            <ChevronDownIcon class="w-5 -rotate-45 absolute right-0 " v-if="item.dropdown"/>
                            <Router-link :to="item.href" class="p-2 w-full min-w-full">{{ item.name }}</Router-link>
                            <ul class="ml-3 py-2" v-if="item.optionOpened && item.dropdown">
                                <router-link :to="child.path" v-for="child in item.children">
                                    <li class="text-sm text-slate-500 p-3 border-b border-slate-100">{{ child.title }}</li>
                                </router-link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </transition>

        <div class="w-full bg-slate-100 min-w-0">
            <div class="header p-4 bg-slate-500 sticky top-0">
                <div class="flex flex-row text-white w-full items-center">
                    <div class="sidebarToggle pr-5 ">
                        <Bars3Icon class="w-8 hover:outline-white" @click="sidenavOpened = !sidenavOpened"></Bars3Icon>
                    </div>
                    <div class="searchCol flex flex-row w-full">
                        <MagnifyingGlassIcon class="w-6 " />
                        <input type="search" class="bg-transparent w-full focus:ring-0 border-0 text-white"
                            placeholder="Search Dashboard">
                    </div>
                    <div class="notification mx-3">
                        <BellIcon class="w-10 p-1 hover:ring rounded-full ring-white/50" />
                    </div>
                    <div class="userDropdown px-5 group relative w-72">
                        <div class="flex items-center gap-2" @click="userDropdownOpened = !userDropdownOpened">
                            <img src="" class="w-8 h-8 rounded-full border" alt="">
                            <p class="text-md">Username Sur</p>
                            <ChevronDownIcon class="w-4 text-white" />
                        </div>
                        <div class="absolute top-12 left-0 text-slate-600 list-none bg-white rounded-lg p-2"
                            v-if="userDropdownOpened">
                            <span class="before:w-4 before:h-4 before:bg-white before:absolute before:-top-1 before:left-1/2 shadow before:rotate-45"></span>
                            <Router-link to="profile"><li class="p-2 px-10 hover:bg-slate-100 rounded-lg">Profile</li></Router-link>
                            <Router-link to="profile"><li class="p-2 px-10 hover:bg-slate-100 rounded-lg">Settings</li></Router-link>
                            <Router-link to="logout"><li class="p-2 px-10 hover:bg-slate-100 rounded-lg">Logout</li></Router-link>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>

    </div>
</template>

<style>
.sidenav-leave-active,
.sidenav-enter-active {
    transition: 0.3s ease-in-out;
}

.sidenav-enter-from {
    transition: 0.3s;
    width: 0%;
}

.sidenav-leave-to {
    width: 0%;
}
</style>
<script>
import { ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    Bars3Icon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import errorComponent from "./components/error.vue"
import cookie from 'js-cookie'
import axios from 'axios'

export default {
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        BellIcon,
        Bars3Icon,
        MagnifyingGlassIcon,
        XMarkIcon,
        ChevronDownIcon
    },
    data() {
        return {
            userDropdownOpened: false,
            sidenavOpened: false,
            navigation: [
                {
                    name: 'Dashboard', href: '#', icon: HomeIcon, current: true, dropdown: true, optionOpened:false, children: [
                        {
                            path: "/",
                            title: "metrics",
                        },
                    ]
                },
                {
                    name: 'content', href: '#', icon: UsersIcon, current: false, dropdown: true, optionOpened:false, children: [
                        {
                            path: "posts",
                            title: "Manage Posts",
                        },
                    ]
                },
                {
                    name: 'media', href: '#', icon: FolderIcon, current: false, dropdown: true, optionOpened:false, children: [
                        {
                            path: "images",
                            title: "Manage Images",
                        },
                        {
                            path: "images",
                            title: "Manage Images",
                        },
                    ]
                },
                {
                    name: 'Appearance', href: '#', icon: CalendarIcon, current: false, dropdown: false, optionOpened:false, children: [
                        {
                            path: "",
                            title: "",
                        },
                    ]
                },
                {
                    name: 'users', href: '#', icon: InboxIcon, current: false, dropdown: false, optionOpened:false, children: [
                        {
                            path: "",
                            title: "",
                        },
                    ]
                },
                {
                    name: 'settings', href: '#', icon: ChartBarIcon, current: false, dropdown: false, optionOpened:false, children: [
                        {
                            path: "",
                            title: "",
                        },
                    ]
                },
            ],
            userNavigation: [
                { name: 'Your Profile', href: '#' },
                { name: 'Settings', href: '#' },
                { name: 'Sign out', href: '#' },
            ]
        }
    },
    methods: {
    },
    mounted() {
        this.isloggedIn()
    }

}
</script>