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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">Our Curriculum</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 sticky top-16 bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/elementary/"
                    class="hover:underline transition-all hover:text-slate-500">Elementary</router-link>
                <span>></span>
                <router-link to="/schools/preschool/curriculum" class="text-slate-400">Curriculum</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">Our curriculum is the Early Years Foundation Stage framework. This is a play-based
                    curriculum for children from birth to 5 years, which allows children to explore and learn in an
                    environment that is secure and safe yet challenging. Play opportunities are non-stereotypical and
                    available to all children promoting the teaching and learning from a skilled workforce.</p>
                <p class="py-4">Within the EYFS Framework, teachers provide activities and make assessments judgements
                    based on the ten areas of learning:</p>
                <ol class="py-4 md:px-10 px-4 "><span class="my-6 text-2xl font-bold">3 Prime areas</span>
                    <li class="p-4 my-4 bg-red-300/20   text-xl rounded-2xl ">Communication and Language</li>
                    <li class="p-4 my-4 bg-green-300/20 text-xl rounded-2xl ">Physical Development</li>
                    <li class="p-4 my-4 bg-blue-300/20 text-xl rounded-2xl ">Personal, Social and Emotional Development
                    </li>
                </ol>
                <span class="my-6 text-2xl font-bold ">7 Specific areas</span>
                <ol class="py-4 md:px-10 px-4 grid max-md:grid-cols-2 grid-cols-3 gap-2 ">
                    <li class="p-4 bg-indigo-300/20  rounded-2xl flex items-center justify-center">Literacy</li>
                    <li class="p-4 bg-green-300/20 rounded-2xl flex items-center justify-center">Numeracy</li>
                    <li class="p-4 bg-blue-300/20 rounded-2xl flex items-center justify-center">Cultural Science
                    </li>
                    <li class="p-4 bg-red-300/20  rounded-2xl flex items-center justify-center">Sensorial</li>
                    <li class="p-4 bg-purple-300/20 rounded-2xl flex items-center justify-center">Practical Life</li>
                    <li class="p-4 bg-orange-300/20 rounded-2xl flex items-center justify-center">Creative Arts</li>
                    <li class="p-4 bg-blue-300/20 rounded-2xl flex items-center justify-center">Knowing God </li>
                </ol>
                <p class="py-4">Whilst all learning areas are important and inter-connected, the 3 Prime areas are crucial for igniting children’s curiosity and enthusiasm for learning, building their capacity to learn and form relationships and thrive. The Specific areas will enable children to be self-motivated learners who are confident to succeed.</p>
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

        }
    }
}
</script>