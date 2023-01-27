<template>
    <div class="min-h-screen">
        <div class="title p-3 bg-white">
            <p class="font-bold text-lg">POSTS </p>
        </div>
        <div class="content max-w-6xl mx-auto py-10 max-md:py-10 max-md:px-5">
            <!-- boards -->
            
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