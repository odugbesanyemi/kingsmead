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
                        <!-- <span class="text-white text-center">Parents As Partners</span> -->
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 sticky top-16 bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">college</router-link>
                <span>></span>
                <router-link to="/schools/preschool/gallery" class="text-slate-400">Gallery</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <div class="">
                    <viewer :images="images" class="columns columns-4 max-md:columns-2 gap-5">
                        <img v-for="src,i in images" :key="i" :src="src" class="border h-full object-cover mb-5">
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
                '/img/collegeimages/cultural2.jpeg',
                '/img/collegeimages/cultural3.jpeg',
                '/img/collegeimages/DSC_0022.jpg',
                '/img/collegeimages/DSC_0029.jpg',
                '/img/collegeimages/DSC_0034.jpg',
                '/img/collegeimages/DSC_0043.jpg',
                '/img/collegeimages/DSC_0049.jpg',
                '/img/collegeimages/DSC_0059.jpg',
                '/img/collegeimages/DSC_0075.jpg',
                '/img/collegeimages/DSC_0087.jpg',
                '/img/collegeimages/DSC_0511.jpg',
                '/img/collegeimages/DSC_0515.jpg',
                '/img/collegeimages/DSC_0594.jpg',
                '/img/collegeimages/DSC_0603.jpg',
                '/img/collegeimages/DSC_0613.jpg',
                '/img/collegeimages/DSC_0621.jpg',
                '/img/collegeimages/DSC_0632.jpg',
                '/img/collegeimages/DSC_0633.jpg',
                '/img/collegeimages/DSC_0637.jpg',
                '/img/collegeimages/DSC_0703.jpg',
                '/img/collegeimages/sport10.jpeg',
            ]
        }
    }
}
</script>