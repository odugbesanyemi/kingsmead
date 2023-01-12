<template>
    <div class="min-h-screen">
        <div class="title p-3 bg-white">
            <p class="font-bold text-lg">DASHBOARD</p>
        </div>
        <div class="content max-w-6xl mx-auto py-20 max-md:px-10">
            <!-- boards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <div class="rounded-xl bg-white p-3 shadow">
                    <div class="p-5 text-center">
                        <p class="text-6xl font-bold text-slate-500">200</p>
                    </div>
                    <div class="bg-gray-500 rounded-lg p-3 text-center text-white">
                        Number of Visitors
                    </div>
                </div>
                <div class="rounded-xl bg-white p-3 shadow">
                    <div class="p-5 text-center">
                        <p class="text-6xl font-bold text-slate-500">200</p>
                    </div>
                    <div class="bg-gray-500 rounded-lg p-3 text-center text-white">
                        Page Views
                    </div>
                </div>
                <div class="rounded-xl bg-white p-3 shadow">
                    <div class="p-5 text-center">
                        <p class="text-6xl font-bold text-slate-500">200</p>

                    </div>
                    <div class="bg-gray-500 rounded-lg p-3 text-center text-white">
                        Page Views
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import {} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

export default {
    components: {

    },
    beforeMounted(){
        this.isloggedIn()
    }
}
</script>