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
            <p class="breadcrumb p-5 flex border-b gap-4 leader bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/" class="hover:underline transition-all hover:text-slate-500">college</router-link>
                <span>></span>
                <router-link to="/schools/preschool/getting-started" class="text-slate-400">Getting Started</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">We are excited to have you as a member of our school community and we want to make sure that you have all the information you need to get started.</p>
                <p class="py-4">Here are a few key things to keep in mind as you begin your journey at Kingsmead College:</p>
                <ol class="py-4  list-decimal md:px-10 px-4 ">
                    <li class="py-2">Enrollment: If you have not yet enrolled, please visit our enrollment page for more information on the process and required documents.</li>
                    <li class="py-2">Orientation: New student orientation is typically held before the start of the school year, and is an excellent opportunity to meet other new students, learn about school policies and procedures, and get to know our staff and faculty.</li>
                    <li class="py-2">Schedules and Classes: Once you have enrolled, you will receive information on your class schedule and any necessary materials you need for your classes.</li>
                    <li class="py-2">Transportation: If you need transportation to and from school, please visit our transportation page for information on bus routes and schedules.</li>
                    <li class="py-2">Extracurricular Activities: We offer a wide range of extracurricular activities such as sports, music, drama, and clubs, which allow students to explore their interests and passions.</li>
                    <li class="py-2">Parent/Teacher Communication: We encourage open communication between parents and teachers to ensure the best possible education for our students.</li>
                    <li class="py-2">Student Support: Our school offers a variety of support services such as counseling, academic support, and special education services to help students succeed.</li>
                    <li class="py-2">Contact Us: If you have any questions or concerns, please do not hesitate to reach out to our school administration </li>
                </ol>
                <p class="py-4">We are excited to have you as a part of our school community and look forward to supporting you in your academic and personal growth.</p>
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