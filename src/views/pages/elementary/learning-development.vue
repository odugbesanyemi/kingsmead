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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">Learning & Development</p>
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
                <router-link to="/schools/preschool/learning-development" class="text-slate-400">Learning &
                    Development</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">The Kingsmead Elementary Pre-School programme is adapted from the combination of
                    Nigeria and British curriculum as guide for the Foundation Stage. Learning and assessment is
                    organised into six main areas of learning:</p>
                <p class="py-4">Here are some key things to keep in mind as you get started:</p>
                <ol class="py-4  list-decimal md:px-10 px-4 ">
                    <li class="py-2">Personal, social and emotional development</li>
                    <li class="py-2">Communication, language and literacy</li>
                    <li class="py-2">Mathematical development</li>
                    <li class="py-2">Knowledge and understanding of the world</li>
                    <li class="py-2">Physical development</li>
                    <li class="py-2">Creative development.</li>
                </ol>
                <p class="py-4">It is a well planned and resourced curriculum that provides opportunities for all
                    children to succeed in an atmosphere of care and high self-esteem.</p>
                <p class="py-4">At Kingsmead Elementary Pre-School, particular attention is paid to the monitoring of
                    each child’s progress through Teachers observation and regular consultation with parents. Parents
                    are encouraged to share their knowledge and views of their child’s development and raise any
                    concerns to ensure that the children are making progress. This is to ensure that difficulties in  
                    any area of their development are quickly identified and addressed. It also helps to celebrate
                    achievements.
                </p>
                <p class="py-4">At Kingsmead Elementary, well planned and purposeful activity play cannot be overemphasized as we know children learn and grow better with enjoyment and challenge. Just like Kingsmead Elementary, the Pre-school Kingsmead Elementary aims to provide a safe, friendly, attractive and secure environment where respect for each individual, irrespective of colour, creed or gender, permeates the school life.
                </p>
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