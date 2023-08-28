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
                    name:"Adeniyi-Akee Halid",
                    position:"Head Boy",
                    img:"/img/collegeimages/head_boy.JPG"
                },
                {
                    name:"Oluwadiya Inioluwa",
                    position:"Head Girl",
                    img:"/img/collegeimages/head_girl.JPG"
                },
                {
                    name:"Ibrahim Imisioluwa",
                    position:"Ass. Health Prefect",
                    img:"/img/collegeimages/fakunle_esther.JPG"
                },
                {
                    name:"Hunje Sesede",
                    position:"Chapel Prefect (girl)",
                    img:"/img/collegeimages/leader1.jpeg"
                },
                {
                    name:"Ayodele-Peters Charles",
                    position:"Ass. Head Boy",
                    img:"/img/collegeimages/leader2.jpeg"
                },
                {
                    name:"Osifowora Abolaji",
                    position:"House Captain (Red House)",
                    img:"/img/collegeimages/leader3.jpeg"
                },
                {
                    name:"Gbadebo Sultan",
                    position:"Library Prefect",
                    img:"/img/collegeimages/leader4.jpeg"
                },
                {
                    name:"Agbai Angel",
                    position:"Hostel Prefect (Girl)",
                    img:"/img/collegeimages/leader5.jpeg"
                },
                {
                    name:"Yussuf Fatai",
                    position:"Ass. Sports Prefect",
                    img:"/img/collegeimages/leader6.jpeg"
                },
                {
                    name:"Afolabi Kingsley",
                    position:"Sports Prefect(Boy)",
                    img:"/img/collegeimages/leader7.jpeg"
                },
                {
                    name:"Okeugo-Kenneth Isaac",
                    position:"Ass. Labour Precfect",
                    img:"/img/collegeimages/leader8.jpeg"
                },
                {
                    name:"Aina Olanrewaju",
                    position:"Food Prefect",
                    img:"/img/collegeimages/leader9.jpeg"
                },
                {
                    name:"Odia Praise",
                    position:"Laboratory Prefect",
                    img:"/img/collegeimages/leader10.jpeg"
                },
                {
                    name:"Osemeke Faith",
                    position:"Class Captain",
                    img:"/img/collegeimages/leader11.jpeg"
                },
                {
                    name:"Alowonle Adegbenga",
                    position:"House Captain (green house)",
                    img:"/img/collegeimages/leader12.jpeg"
                },
                {
                    name:"Omamogho Efemena",
                    position:"Social Prefect(Boy)",
                    img:"/img/collegeimages/leader13.jpeg"
                },
                {
                    name:"Adeniyi Adeoluwa",
                    position:"Hostel Prefect(Boy)",
                    img:"/img/collegeimages/leader14.jpeg"
                },
                {
                    name:"Femi Josephine",
                    position:"Labour Prefect",
                    img:"/img/collegeimages/leader15.jpeg"
                },
                {
                    name:"Olorunfemi Esther",
                    position:"Health Prefect(Girl)",
                    img:"/img/collegeimages/leader16.jpeg"
                },
                {
                    name:"Ajadi Oyindamola",
                    position:"House Captain (Blue House)",
                    img:"/img/collegeimages/leader17.jpeg"
                },
                {
                    name:"Oveno Glory",
                    position:"House Captain (Yello House)",
                    img:"/img/collegeimages/leader18.jpeg"
                },
                {
                    name:"Ola-Balogun Foladara",
                    position:"Ass. Head Girl",
                    img:"/img/collegeimages/leader19.jpeg"
                },
                {
                    name:"Gbadebo Mubarak",
                    position:"Class Captain",
                    img:"/img/collegeimages/leader20.jpeg"
                },
                {
                    name:"Osemeke Faith",
                    position:"Class Captain",
                    img:"/img/collegeimages/leader21.jpeg"
                },
                {
                    name:"Fella Fiyinfoluwa",
                    position:"Ass. Social Prefect",
                    img:"/img/collegeimages/fela.jpg"
                }

            ]
        }
    }
}
</script>