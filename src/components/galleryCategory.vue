<template>
    <div class="">
        <div class="title md:mb-10 mb-5 relative h-56">
            <img src="../assets/images/sport8.jpeg" class="w-full h-full object-cover object-top" alt="">
            <span class="bg-white/10 backdrop-blur-sm absolute inset-0"></span>
            <div class="absolute top-1/2 -translate-1/2 left-1/2 -translate-x-1/2 text-slate-700">
                <h2 class="text-7xl max-md:text-5xl text-center"> Gallery</h2>
            </div>
        </div>
        <div class="elements max-w-5xl mx-auto p-5">
            <div class="title py-4 border-b flex max-md:flex-col gap-4 justify-between">
                <h2 class="text-3xl">Browse Categories</h2>
                <div class="btns flex items-center gap-1">
                    <FunnelIcon class="w-10 h-10 p-1 border-black border" />
                    <Bars2Icon class="w-10 h-10 p-1 border border-black"/>
                    <select name="" id="" class=" border border-black">
                        <option value="">Choose category</option>
                    </select>
                </div>
            </div>
            <div class="grid md:grid-cols-3 gap-5 my-10">
                <div class="relative group rounded-lg overflow-hidden border h-52 hover:shadow-lg" v-for="category in categories" :key="category.id">
                    <p class="text-xl font-bold absolute bottom-7 ml-5 translate-y-1/2 text-black transition-all duration-500 px-4 border rounded-full">{{ category.title }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Bars2Icon, FunnelIcon } from '@heroicons/vue/24/solid';
export default {
    components:{ FunnelIcon, Bars2Icon },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    title: "Sport Activities",
                    img: "",
                },
                {
                    id: 2,
                    title: "Cultural Activites",
                    img: "",
                },
                {
                    id: 3,
                    title: "Hostel Facilites",
                    img: "",
                },
                {
                    id: 4,
                    title: "Clubs & societies",
                    img: "",
                },
                {
                    id: 5,
                    title: "Parents Association",
                    img: "",
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>