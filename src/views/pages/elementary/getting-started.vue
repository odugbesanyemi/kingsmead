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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">GETTING STARTED</p>
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
                <router-link to="/schools/preschool/getting-started" class="text-slate-400">Getting Started</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">Welcome to Kingsmead  Elementary Schools! We are thrilled to have you and your child join our community of learners. We understand that starting preschool can be an exciting but also a daunting experience for both children and parents. That's why we have put together this guide to help make the transition as smooth as possible.</p>
                <p class="py-4">Here are some key things to keep in mind as you get started:</p>
                <ol class="py-4  list-decimal md:px-10 px-4 ">
                    <li class="py-2">Review our Curriculum: Take the time to familiarize yourself with our curriculum and program offerings. This will give you a better understanding of what your child will be learning and what to expect.</li>
                    <li class="py-2">Understand our policies and procedures: Review our policies and procedures, including schedules and drop-off/pick-up times. This will help you plan your day and ensure that everything runs smoothly.</li>
                    <li class="py-2">Prepare your child: Talk to your child about what to expect in preschool and encourage independence. This will help them feel more comfortable and confident when they start.</li>
                    <li class="py-2">Get to know the teachers: Take the time to get to know your child's teachers and other staff members. They are a valuable resource and can provide support and guidance throughout the year.</li>
                    <li class="py-2">Get involved: Get involved in the school community by attending events and volunteering. This is a great way to meet other families and stay informed about what's happening at the school.</li>
                    <li class="py-2">Encourage extracurricular activities: Encourage your child to take part in extracurricular activities and other opportunities to explore their interests. This will help them develop new skills and have fun at the same time.</li>
                </ol>
                <p class="py-4">At Kingsmead Elementary Schools, we are committed to providing a safe, nurturing, and stimulating environment where children can learn and grow. Our experienced teachers use a variety of methods to engage and inspire children, such as play-based learning, hands-on activities, and interactive lessons. We are here to support your child's development and look forward to working with you to ensure a successful learning experience.</p>
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