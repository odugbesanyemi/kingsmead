<template>
    <div class="">
        <!-- search jobs -->
        <div class="title relative bg-slate-50 h-96">
            <img src="../assets/SL-051919-20420-09.jpg" alt="" class=" w-full h-full object-cover opacity-40 inset-0">
            <div class="max-w-5xl mx-auto absolute inset-0 -translate-y-1/2 top-1/2 p-5">
                <h2 class="py-4 text-3xl md:text-5xl text-center">Advance Your Career with Our Wide Range of <br> Job Opportunities</h2>
                <p class="text-slate-600 text-center text-lg mb-5 ">Find your next dream job and explore the best job openings in your field with our job board.</p>
                <div class="flex bg-white p-1 pr-2 rounded-full max-w-3xl mx-auto border ">
                    <MagnifyingGlassCircleIcon class="w-12 h-12 text-black/30 group-focus-within:text-blue-800 mx-2 transition-all" /><input type="search" name="" class="w-full outline-none bg-transparent border-none focus:ring-0" id="" placeholder="Job title or keyword">
                    <button class="bg-gradient-to-tr from-blue-700 to-blue-900 text-white rounded-full px-5 md:px-10">Search</button>
                </div>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script>
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/24/outline"
export default {
    components: { MagnifyingGlassCircleIcon }
}
</script>
<style lang="">
    
</style>