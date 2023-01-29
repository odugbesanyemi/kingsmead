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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">BOARDING EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 sticky top-16 bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/" class="hover:underline transition-all hover:text-slate-500">College</router-link>
                <span>></span>
                <router-link to="/schools/preschool/homework-policy" class="text-slate-400">Boarding Experience</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">Our boarding facilities are modern, comfortable and equipped with all the necessary amenities to ensure that students have a pleasant and enjoyable stay.</p>
                <p class="py-4 ">Living on campus provides students with an opportunity to develop independence, self-reliance and a sense of responsibility. Boarding students have access to a wide range of extracurricular activities, such as sports, music, drama, and clubs, which allows them to explore their interests and passions.</p>
                <p class="py-4 ">Our boarding staff are dedicated to providing support and guidance to our students, and are always on hand to offer help and advice. They are committed to creating a warm and welcoming atmosphere where students feel at home and can thrive.</p>
                <p class="py-4 ">We understand that leaving home can be difficult, and we are committed to making the transition as smooth as possible. Our boarding program is designed to provide students with a sense of belonging and community, and we encourage students to get involved in the life of the school.</p>
                <p class="py-4 ">We believe that the boarding experience is an important part of a student's education, providing opportunities for personal growth, independence and leadership. We are confident that our boarding program will help students to develop the skills and confidence they need to succeed in their future endeavors.</p>
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