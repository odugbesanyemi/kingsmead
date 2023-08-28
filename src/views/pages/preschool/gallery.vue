<template >
    <!-- hero section -->
    <div>
        <section class="school title ">
            <div class="relative">
                <div class="h-72">
                    <img src="../../../assets/images/DSC_0562.jpg" alt="" class="absolute w-full h-full object-cover">
                </div>
                <span class="absolute inset-0 w-full bg-black/10 backdrop-blur-sm"></span>
                <div
                    class=" mx-auto md:flex gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center">
                    <div class="text-center max-md:">
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">Gallery</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 leader bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/preschool/"
                    class="hover:underline transition-all hover:text-slate-500">preschool</router-link>
                <span>></span>
                <router-link to="/schools/preschool/gallery" class="text-slate-400">Gallery</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <div class="relative">
                    <viewer :images="images" class="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <img v-for="src,i in images" :key="i" :src="src" class="border w-full h-full object-cover">
                    </viewer>
                </div>
            </div>
        </section>
    </div>


</template>
<script>
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid"
export default {
    components: {
        ArrowRightCircleIcon
    },
    data() {
        return {
            images:[
                '/img/preschoolimages/preschool1.jpg',
                '/img/preschoolimages/preschool2.jpg',
                '/img/preschoolimages/preschool3.jpg',
                '/img/preschoolimages/DSC_0558.jpg',
                '/img/preschoolimages/DSC_0559.jpg',
                '/img/preschoolimages/DSC_0561.jpg',
                '/img/preschoolimages/DSC_0562.jpg',
                '/img/preschoolimages/DSC_0566.jpg',
                '/img/preschoolimages/DSC_0568.jpg',
                '/img/preschoolimages/DSC_0586.jpg',
                '/img/preschoolimages/preschool_slide1.JPG',
                '/img/preschoolimages/preschool_slide2.JPG',
                '/img/preschoolimages/preschool_slide3.JPG',
                '/img/preschoolimages/preschool_slide4.JPG',
            ]
        }
    }
}
</script>