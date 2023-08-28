<template >
    <div>
        <div class="title p-5 relative">
            <!-- <img :src="categoryDetails.category_image" class="w-full h-full object-cover object-top" alt=""> -->
            <div class="max-w-7xl max-md:mx-5 mx-auto flex justify-between">
                <button @click = "$router.go(-1)" class="flex items-center"><i class="fi fi-rr-arrow-left text-3xl"></i></button>
                <h3 class="text-5xl max-md:text-3xl font-bold py-5 text-black mx-5 text-center" >{{ categoryDetails.category_name}}</h3>
                <p class="block"></p>
            </div>
        </div>

        <div class="images max-w-5xl mx-auto max-md:py-5 py-10 px-5 ">
            <div v-if = "isLoading" class="">
                <img src="../assets/Loading_icon.gif" class="mx-auto">
            </div>
            <div v-else-if="images.length">
                <viewer :images="images" class="grid grid-cols-4 max-md:grid-cols-2">
                    <img v-for="src in images" :key="src" :src="src.img_name" style="max-height: 300px;">
                </viewer>
            </div>

            <div class="max-md:p-10 max-md:p-5 text-center" v-else>
                <img src="../assets/empty_response.png" class="mx-auto ">
                <h2 class="text-4xl mb-3 text-blue-800 mt-10">Nothing to show here</h2>
                <router-link to="/gallery/categories" class="underline">Go back</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    components: {},
    data() {
        return {
            images: [
                // { src: 'https://placekitten.com/801/800', thumbnailWidth: "220px" },
                // { src: 'https://placekitten.com/802/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/803/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/804/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/805/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/806/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/807/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/808/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/809/800', thumbnailWidth: "" },
                // { src: 'https://placekitten.com/810/800', thumbnailWidth: "" },
            ],
            categoryDetails:{},
            isLoading:false
        }
    },
    methods:{
        async getImages(){
            this.isLoading = true;
            const id= this.$route.params.id
            if(id){
                try{
                    const category = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/gallery/categories/${id}`)
                    const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/gallery/${id}`)
                    this.images=response.data
                    this.categoryDetails = category.data[0]
                    this.isLoading = false
                }
                catch(err){}                
            }else{
                this.$router.go(-1)
                this.isLoading = false
            }

        }
    },
    mounted(){
        this.getImages()
    }
}
</script>
<style lang="">
    
</style>