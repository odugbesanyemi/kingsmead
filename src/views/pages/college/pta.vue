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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">PARENTS AS PARTNERS</p>
                        <!-- <span class="text-white text-center">Parents As Partners</span> -->
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 leader bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">College</router-link>
                <span>></span>
                <router-link to="/schools/preschool/PTA" class="text-slate-400">P.T.A</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">The PTA organizes and supports a variety of events and programs throughout the school year. These include fundraisers, cultural events, and educational programs that enrich the learning experience of our students. The PTA also provides financial assistance to the school for educational materials and equipment.</p>
                <p class="py-4 ">We encourage all parents and caregivers to become involved with the PTA. Participation in the PTA is an excellent way to get to know other parents and teachers, as well as to stay informed about what's happening at our school.</p>
                <p class="py-4">We encourage all parents and caregivers to become involved with the PTA. Participation in the PTA is an excellent way to get to know other parents and teachers, as well as to stay informed about what's happening at our school.</p>
                <p class="py-4">We at Kingsmead enjoy working with our parents to ensure their children make good progress in school. We keep our parents informed about their children’s learning and other school activities through mediums such as:</p>
                <ol class="py-4  list-decimal md:px-10 px-4 ">
                    <li class="py-2">Parents/Teachers Forum (PTF)</li>
                    <li class="py-2">Academic Review Session</li>
                    <li class="py-2">Curriculum guideline</li>
                    <li class="py-2">Learning focus</li>
                    <li class="py-2">Communication Books</li>
                    <li class="py-2">Newsletters</li>
                    <li class="py-2">One-on- one meetings</li>
                </ol>

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