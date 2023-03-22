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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">CULTURAL DIVERSITY</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 leader bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">college</router-link>
                <span>></span>
                <router-link to="/schools/preschool/curriculum" class="text-slate-400">Cultural Diversity</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">Our student body is composed of individuals from a variety of backgrounds, cultures, and perspectives, which creates a rich and dynamic learning environment.</p>
                <p class="py-4">To support cultural diversity, we offer a range of programs and activities that celebrate and promote understanding of different cultures. These include:</p>
                <ol class="py-4 md:px-10 px-4 "><span class="my-6 text-2xl font-bold">3 Prime areas</span>
                    <li class="p-4 my-4 bg-red-300/20   text-xl rounded-2xl ">Cultural fairs and festivals</li>
                    <li class="p-4 my-4 bg-green-300/20 text-xl rounded-2xl ">Guest speakers and workshops</li>
                    <li class="p-4 my-4 bg-blue-300/20 text-xl rounded-2xl ">Language classes
                    </li>
                </ol>
                <p class="py-4">In addition to these programs, we also have a zero-tolerance policy for any form of discrimination or harassment. We believe that every student has the right to a safe and inclusive learning environment and we work hard to ensure that all members of our community feel respected and valued.</p>
                <p class="py-4">We believe that by embracing cultural diversity, we can create a more tolerant, compassionate, and empathetic society. We encourage all students, staff, and parents to get involved in our cultural diversity programs and to take an active role in promoting understanding and acceptance of different cultures.</p>
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