<template >
    <!-- hero section -->
    <div>
        <section class="school title ">
            <div class="relative">
                <div class="h-72">
                    <img src="/img/preschoolimages/DSC_0562.jpg" alt="" class="absolute w-full h-full object-cover">
                </div>
                <span class="absolute inset-0 w-full bg-black/10 backdrop-blur-sm"></span>
                <div
                    class="w-4/5 mx-auto md:flex gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center">
                    <div class="text-center md:w-9/12 max-md:">
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">PRE-SCHOOL</p>
                        <p class="desc text-white leading-tight mb-4 max-md:text-sm">As an international school we are proud to provide the highest possible standard of education to our students</p>
                    </div>
                    <div class="gap-4 text-white items-center md:w-3/12 group">
                        <a href="/files/KingsmeadAdmissionFormElementary.pdf" download><p class="font-bold text-xl text-white flex items-center justify-center bg-blue-600 rounded-full"><span class="p-2 text-center text-white-900 ">ADMISSION PROCEDURE</span><ArrowRightCircleIcon class="group-hover:scale-125 transition-all rounded-full bg-gradient-to-r from-blue-600 to-blue-400 w-20 block group-hover:shadow-lg shadow-sm" /></p></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="max-w-6xl mx-auto py-10">
                <div class="image-slide ">
                    <Splide :options="{ rewind: true , autoplay:true }" aria-label="My Favorite Images">
                        <SplideSlide class="max-h-96">
                            <img src="/img/preschoolimages/DSC_0568.jpg" alt="Sample 1" class="w-full object-cover object-bottom">
                        </SplideSlide>
                        <SplideSlide class='max-h-96'>
                            <img src="/img/sport1.jpeg" alt="Sample 2" class="w-full h-full object-cover" >
                        </SplideSlide>
                        <SplideSlide class='max-h-96'>
                            <img src="/img/preschoolimages/DSC_0586.jpg" alt="Sample 2" class="w-full h-full object-cover" >
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="programs py-10">
                    <div class="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
                        <div class="border p-3 shadow" v-for="item,i in pageContent" :key="i">
                            <img :src="item.img" alt="" class="">
                            <div class="div content" >
                                <p class="font-bold pt-5 text-2xl">{{ item.title }}</p>
                                <hr class="my-3">
                                <p class="text-slate-600 text-sm mb-3">{{item.desc}}</p>
                                <router-link :to="item.to" class="my-2 text-blue-500">Read more ..</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="support-slide"></div>
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
            pageContent:[
                {
                    title:"GETTING STARTED",
                    desc:"As an international school we are proud to provide the highest possible standard of education to our students, enabling…",
                    to:"/",
                    img:"/img/preschoolimages/DSC_0586.jpg"
                },
                {
                    title:"OUR CURRICULUM",
                    desc:"Our curriculum is the Early Years Foundation Stage framework. This is a play-based curriculum for children from birth to 5 years…",
                    to:"/",
                    img:"/img/preschoolimages/DSC_0559.jpg"
                },
                {
                    title:"HOMEWORK POLICY",
                    desc:"Home work is a reinforcement of all taught concepts. Home work is given daily - Monday to Friday and it includes activities such as soft activities…",
                    to:"/",
                    img:"/img/preschoolimages/DSC_0561.jpg"
                },
                {
                    title:"LEARNING AND DEVELOPMENT",
                    desc:"The Kingsmead Elementary Pre-School programme is adapted from the combination of Nigeria and British curriculum as guide for the Foundation Stage…",
                    to:"/",
                    img:"/img/preschoolimages/DSC_0562.jpg"
                },
                {
                    title:"PTA",
                    desc:"The EYFS emphasises that parents are a child’s primary educators and therefore encourages parents to contribute to their child’s learning…",
                    to:"/",
                    img:"/img/preschoolimages/teacher_consultation_grp4ece_sa_1_0.jpg"
                },
                {
                    title:"PRE-SCHOOL GALLERY",
                    desc:"Browse through our Pre School Gallery and explore the world where kids exhibit their raw talents...",
                    to:"/",
                    img:"/img/preschoolimages/DSC_0558.jpg"
                },


            ]
        }
    }
}
</script>