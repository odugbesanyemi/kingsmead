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
                        <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">Team of Educators</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="content bg-gray-100 ">
            <p class="breadcrumb p-5 flex border-b gap-4 leader bg-white/50 backdrop-blur-sm z-20">
                <router-link to="/" class="hover:underline transition-all hover:text-slate-500">Home</router-link>
                <span>></span>
                <router-link to="/schools/college/"
                    class="hover:underline transition-all hover:text-slate-500">College</router-link>
                <span>></span>
                <router-link to="/schools/preschool/curriculum" class="text-slate-400">Team</router-link>
            </p>
            <div class="max-w-6xl mx-auto bg-white md:p-20 p-5 text-lg text-slate-600">
                <div class="grid grid-cols-4 max-md:grid-cols-1 gap-2">
                    <div class="border p-2 space-y-2 overflow-hiddden group" v-for="member,i in team" :key="i">
                        <div class="overflow-hidden">
                            <img :src="member.img" alt="" class="md:h-64 w-full object-cover md:object-top group-hover:scale-125 transition-all duration-500 group-hover:shadow-inset">
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
            team:[
                {
                    name:"Mr OVENO R.O",
                    position:"Principal",
                    img:"/img/collegeimages/team1.jpeg"
                },
                {
                    name:" MR ENE R.I ",
                    position:"Vice Principal",
                    img:"/img/collegeimages/team8.jpeg"
                },
                {
                    name:"MRS NWANKWO M.O",
                    position:"Head Admin/ Marketing",
                    img:"/img/collegeimages/team5.jpeg"
                },
                {
                    name:"MR ROTIFA D.A",
                    position:"HOD Vocational",
                    img:"/img/collegeimages/team2.jpeg"
                },
                {
                    name:"MR EDEH C.D",
                    position:"HOD Maths",
                    img:"/img/collegeimages/team3.jpeg"
                },
                {
                    name:"MRS OGHENETEGA U.P",
                    position:"HOD Commercial",
                    img:"/img/collegeimages/team4.jpeg"
                },

                {
                    name:" MR GBOLAHAN L.J",
                    position:"Hod Science",
                    img:"/img/collegeimages/team11.jpeg"
                },
                {
                    name:"MR OKOLO D.D",
                    position:"Hod Arts",
                    img:"/img/collegeimages/team6.jpeg"
                },
                {
                    name:"MRS AWOLOLA O.C",
                    position:"Hod Language",
                    img:"/img/collegeimages/team7.jpeg"
                },

                {
                    name:"MR OMOSEBI A.P",
                    position:"Librarian",
                    img:"/img/collegeimages/team9.jpeg"
                },
                {
                    name:"MR OWOYELE T.O ",
                    position:"Year Tutor Junior School",
                    img:"/img/collegeimages/team10.jpeg"
                },

                {
                    name:" MR OGIGBAH G.M",
                    position:"Year Tutor Senior Schoool",
                    img:"/img/collegeimages/team12.jpeg"
                },
            ]
        }
    }
}
</script>