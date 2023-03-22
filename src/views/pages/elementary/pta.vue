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
                <router-link to="/schools/elementary/"
                    class="hover:underline transition-all hover:text-slate-500">Elementary</router-link>
                <span>></span>
                <router-link to="/schools/preschool/PTA" class="text-slate-400">P.T.A</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">The EYFS emphasises that parents are a child’s primary educators and therefore encourages parents to contribute to their child’s learning. Parent partnerships are key to a successful Early Years experience for children and for them to gain the most out of their early education and reach expected levels of development. This responsibility usually falls to the teacher to ensure an effective relationship is built and to share information at the beginning and end of the day and also at various points such as meetings to discuss development.</p>
                <p class="py-4">Why are parent partnerships so important?</p>
                <ol class="py-4  list-decimal md:px-10 px-4 ">
                    <li class="py-2">Parents know their children best</li>
                    <li class="py-2">Parents know their children best</li>
                    <li class="py-2">To share information about new levels of development, any concerns and any new likes or dislikes</li>
                    <li class="py-2">To keep up to date with what is happening inside and outside the school.</li>
                    <li class="py-2">Parents can feel secure to seek advice, help and support should they need it.</li>
                    <li class="py-2">Improve practice and outcomes for the children, ensuring every child has their full individual needs met.</li>
                </ol>
                <p class="py-4">We in Kingsmead Elementary enjoy working with our parents to ensure their children make good progress in school. We keep our parents informed about their children’s learning and other school activities through mediums such as:</p>
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