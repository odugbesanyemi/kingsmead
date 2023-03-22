<template>
    <div class="">
        <!-- search jobs -->
        <div class="title relative bg-slate-50 h-96 flex items-center justify-center">
            <img src="../assets/SL-051919-20420-09.jpg" alt=""
                    class=" w-full h-full object-cover opacity-40 absolute inset-0">
            <div class="max-w-5xl mx-auto p-5 relative ">
                <div class="relative z-10">
                    <h2 class="py-2 text-2xl md:text-5xl text-center font-semibold mb-5 text-gray-700">Advance Your Career with Our Wide Range
                        of Job Opportunities
                    </h2>
                    <p class="text-slate-600 text-center text-lg mb-5 max-md:text-sm">Find your next dream job and explore
                        the best job openings in your field with our job board.</p>
                    <div class="flex bg-white p-1 pr-2 rounded-lg max-w-3xl mx-auto border ">
                        <MagnifyingGlassCircleIcon
                            class="w-12 h-12 text-black/30 group-focus-within:text-blue-800 mx-2 transition-all" /><input
                            type="search" name="" class="w-full outline-none bg-transparent border-none focus:ring-0" id=""
                            placeholder="Job title or keyword">
                        <button class="bg-blue-400 text-xs text-white rounded-lg px-5 md:px-10">Search</button>
                    </div>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
    * {
        font-family: 'Noto Sans JP', sans-serif;
        /* font-size: 14px; */
    }
@media only screen and (max-width:600px) {

}</style>