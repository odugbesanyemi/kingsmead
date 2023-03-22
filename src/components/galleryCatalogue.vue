<template >
    <div>
        <div class="title mb-10 relative h-56">
            <img :src="categoryDetails.category_image" class="w-full h-full object-cover object-top" alt="">
            <span class="bg-white/10 backdrop-blur-sm absolute inset-0"></span>
            <div class="max-w-5xl absolute mx-auto inset-0 max-md:mx-5 ">
                <h3 class="text-5xl font-bold py-5 text-white absolute top-1/2 -translate-y-1/2 mx-5" >{{ categoryDetails.category_name}}</h3>
            </div>
        </div>
        <div class="images max-w-5xl mx-auto max-md:py-5 py-10 px-5 ">
            <div >
                <viewer :images="images" class="grid grid-cols-4 max-md:grid-cols-2">
                    <img v-for="src in images" :key="src" :src="src.img_name">
                </viewer>
            </div>

            <div class="p-10 max-md:p-5" v-if="!images.length">
                <h2 class="text-4xl mb-3">Nothing to show here</h2>
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
                { src: 'https://placekitten.com/801/800', thumbnailWidth: "220px" },
                { src: 'https://placekitten.com/802/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/803/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/804/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/805/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/806/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/807/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/808/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/809/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/810/800', thumbnailWidth: "" },
            ],
            categoryDetails:{}
        }
    },
    methods:{
        async getImages(){
            const id= this.$route.params.id
            if(id){
                try{
                    const category = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/gallery/categories/${id}`)
                    const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/gallery/${id}`)
                    this.images=response.data
                    this.categoryDetails = category.data[0]
                }
                catch{}                
            }else{
                this.$router.go(-1)
            }

        }
    },
    mounted(){
        // this.getImages()
    }
}
</script>
<style lang="">
    
</style>