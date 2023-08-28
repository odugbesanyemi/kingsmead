<template>
    <div class="">
        <!-- search jobs -->
        <div class="title relative bg-slate-50 h-96 flex items-center justify-center">
            <img src="../assets/medium-shot-woman-teaching-lesson.jpg" alt="" class=" w-full h-full object-cover object-top absolute inset-0">
            <span class="absolute w-full h-full top-0 left-0 bg-blue-700/50 mix-blend-multiply"></span>
            <div class="max-w-5xl mx-auto p-5 relative ">
                <div class="relative z-10">
                    <h1 class="py-2 text-3xl md:text-5xl text-center text-white drop-shadow-md">Secure your Dream Job</h1>
                    <p class="text-white text-center text-lg max-md:text-sm">explore the best job openings in your field with our job board.</p>
                    <!-- <div class="flex bg-white p-1  rounded-lg max-w-3xl mx-auto border ">
                        <MagnifyingGlassCircleIcon
                            class="w-12 h-12 text-black/30 group-focus-within:text-blue-800 mx-2 transition-all " /><input
                            type="search" name="" class="w-full outline-none bg-transparent border-none focus:ring-0" id=""
                            placeholder="Job title or keyword">
                        <button class="bg-blue-400 text-white rounded px-5 md:px-10">Search</button>
                    </div> -->
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
@media only screen and (max-width:600px) {

}
</style>