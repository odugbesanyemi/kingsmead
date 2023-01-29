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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">CODE OF CONDUCT</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 sticky top-16 bg-white/50 backdrop-blur-sm">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">College</router-link>
                <span>></span>
                <router-link to="/schools/preschool/code-of-conduct" class="text-slate-400">Code of Conduct</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <p class="py-4 ">At Kingsmead college, we believe that every student has the right to a safe and positive learning environment. In order to maintain this environment, we have established a Code of Conduct that all students, staff, and visitors are expected to follow.</p>
                <p class="py-4">The Code of Conduct includes guidelines for appropriate behavior, such as: -Respect for self and others -Honesty and integrity -Responsibility for one's actions -Cooperation and teamwork.</p>
                <p class="py-4">Violations of the Code of Conduct may result in disciplinary action, which may include but not limited to, detention, suspension, and/or expulsion.</p>
                <p class="py-4">In addition to the Code of Conduct, our school also has policies in place to address specific issues such as bullying, harassment, and drug and alcohol use. We take these issues very seriously and have a zero-tolerance policy for any form of unacceptable behavior.</p>
                <p class="py-4">We believe that by working together, we can create a safe and positive learning environment for all. We encourage students, staff and parents to communicate with each other and to report any concerns they may have.</p>
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