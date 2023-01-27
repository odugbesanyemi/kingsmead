<template>
    <div class="min-h-screen">
        <div class="title p-3 bg-white">
            <p class="font-bold text-lg">DASHBOARD</p>
        </div>
        <div class="content max-w-6xl mx-auto py-10 max-md:py-10 max-md:px-5">
            <!-- boards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 ">
                <div class="rounded-md bg-white border border-slate-200">
                    <div class="p-5">
                        <UsersIcon class="w-6 text-slate-400 mb-3"/>
                        <p class="">Visitors</p>
                        <p class="text-4xl flex pt-3 font-thin text-slate-500 gap-2">200 <div class="flex"><ArrowTrendingDownIcon class="text-red-400 w-6"/><ArrowTrendingUpIcon class="text-green-400 w-6"/></div> </p>
                    </div>
                </div>
                <div class="rounded-md bg-white border border-slate-200">
                    <div class="p-5">
                        <EyeIcon class="w-6 text-slate-400 mb-3"/>
                        <p class="">Views</p>
                        <p class="text-4xl flex pt-3 font-thin text-slate-500 gap-2">200 <div class="flex"><ArrowTrendingDownIcon class="text-red-400 w-6"/><ArrowTrendingUpIcon class="text-green-400 w-6"/></div> </p>
                    </div>
                </div>
                <div class="rounded-md bg-white border border-slate-200">
                    <div class="p-5">
                        <StarIcon class="w-6 text-slate-400 mb-3"/>
                        <p class="">Likes</p>
                        <p class="text-4xl flex pt-3 font-thin text-slate-500 gap-2">200 <div class="flex"><ArrowTrendingDownIcon class="text-red-400 w-6"/><ArrowTrendingUpIcon class="text-green-400 w-6"/></div> </p>
                    </div>
                </div>
                <div class="rounded-md bg-white border border-slate-200">
                    <div class="p-5">
                        <ListBulletIcon class="w-6 text-slate-400 mb-3"/>
                        <p class="">Comments</p>
                        <p class="text-4xl flex pt-3 font-thin text-slate-500 gap-2">200 <div class="flex"><ArrowTrendingDownIcon class="text-red-400 w-6"/><ArrowTrendingUpIcon class="text-green-400 w-6"/></div> </p>
                    </div>
                </div>
            </div>
            <!-- Graph -->
            <hr class="mt-16">
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import {UsersIcon,EyeIcon, StarIcon,ListBulletIcon, ArrowTrendingDownIcon,ArrowTrendingUpIcon} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon, } from '@heroicons/vue/24/solid'

export default {
    components: {
        UsersIcon,EyeIcon, StarIcon, ListBulletIcon, ArrowTrendingDownIcon,ArrowTrendingUpIcon 
    },
    beforeMounted(){
        this.isloggedIn()
    }
}
</script>