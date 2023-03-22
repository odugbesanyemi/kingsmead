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
            <div class="grid md:grid-cols-3 gap-5 my-10" v-if="categories.length">
                <div class="relative group rounded-lg overflow-hidden cursor-pointer border h-52 hover:shadow-lg" v-for="category in categories" :key="category.id" @click="$router.push({path:`/gallery/categories/${category.id}`,query:{category:`${category.category_name}`}})">
                <img :src="category.category_image" alt="" class="w-full h-full object-cover">
                    <p class="bg-white absolute bottom-10 -left-2 ml-5 translate-y-1/2 text-black text-sm transition-all duration-500 py-2 px-4 rounded-full">{{ category.category_name }}</p>
                </div>
            </div>
            <div class="flex items-center h-44 " v-if="!categories.length">
                <div class="text-center w-full">
                    <img src="../assets/broken-image.png" alt="" class="w-16 mx-auto my-5">
                    <p class="text-2xl font-medium">
                        Nothing to see here.
                    </p>
                    <p class="text-xs">Kindly check back later</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Bars2Icon, FunnelIcon } from '@heroicons/vue/24/solid';
export default {
    components:{ FunnelIcon, Bars2Icon },
    data() {
        return {
            categories: []
        }
    },
    methods:{
        async getGalleryCategory(){
            try{
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/gallery/categories`)
                this.categories = response.data
            }catch(err){
                // toast error
            }
        }
    },
    mounted(){
        this.getGalleryCategory()
    }
}
</script>
<style lang="">
    
</style>