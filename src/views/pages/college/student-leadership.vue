<template >
    <!-- hero section -->
    <div>
        <section class="school title ">
            <div class="relative">
                <div class="h-72">
                    <img src="/img/collegeimages/staff1.jpeg" alt="" class="absolute w-full h-full object-cover">
                </div>
                <span class="absolute inset-0 w-full bg-black/10 backdrop-blur-sm"></span>
                <div
                    class=" mx-auto md:flex gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center">
                    <div class="text-center max-md:">
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">Student Leadership</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4  bg-white/50 backdrop-blur-sm z-20">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">College</router-link>
                <span>></span>
                <router-link to="/schools/preschool/curriculum" class="text-slate-400">Student-Leadership</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <div class="grid grid-cols-4 max-md:grid-cols-1 gap-2">
                    <div class="border p-2 space-y-2 overflow-hiddden group" v-for="member,i in leaders" :key="i">
                        <div class="overflow-hidden">
                            <img :src="member.img" alt="" class="h-64 max-md:h-72 w-full object-cover object-top group-hover:scale-125 transition-all duration-500 group-hover:shadow-inset">
                        </div>
                        <div class="details px-2">
                            <p class="font-medium text-xl">{{member.name}}</p>
                            <p class="text-sm">{{ member.position }}</p>
                        </div>
                    </div>
                </div>
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
            leaders:[
                {
                    name:"leader 1",
                    position:"Head Teacher",
                    img:"/img/collegeimages/leader1.jpeg"
                },
                {
                    name:"leader 2",
                    position:"Head of Finance",
                    img:"/img/collegeimages/leader2.jpeg"
                },
                {
                    name:"leader 3",
                    position:"Head of Justice",
                    img:"/img/collegeimages/leader3.jpeg"
                },
                {
                    name:"leader 4",
                    position:"Library Prefect",
                    img:"/img/collegeimages/leader4.jpeg"
                },
                {
                    name:"leader 5",
                    position:"Hostel Prefect",
                    img:"/img/collegeimages/leader5.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader6.jpeg"
                },
                {
                    name:"leader ",
                    position:"Sports Prefect",
                    img:"/img/collegeimages/leader7.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader8.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader9.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader10.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader11.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader12.jpeg"
                },
                {
                    name:"leader 1",
                    position:"Head Teacher",
                    img:"/img/collegeimages/leader13.jpeg"
                },
                {
                    name:"leader 2",
                    position:"Head of Finance",
                    img:"/img/collegeimages/leader14.jpeg"
                },
                {
                    name:"leader 3",
                    position:"Head of Justice",
                    img:"/img/collegeimages/leader15.jpeg"
                },
                {
                    name:"leader 4",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader16.jpeg"
                },
                {
                    name:"leader 5",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader17.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader18.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader19.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader20.jpeg"
                },
                {
                    name:"leader ",
                    position:"Arts & Culture",
                    img:"/img/collegeimages/leader21.jpeg"
                },

            ]
        }
    }
}
</script>