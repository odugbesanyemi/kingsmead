<template >
    <div>
        <siteHeader title="Governing Board" prev-page-name="About" curr-page-name="Our Govening Board" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50/50  py-10 md:py-24">
                <div class="max-w-6xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl max-md:text-3xl text-center text-blue-800 mb-10">Board of Governors</h1>
                    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5 ">
                        <div class="hover:shadow-xl hover:outline hover:outline-blue-100 ease-out group shadow-blue-400/10 transition-all rounded-xl overflow-hidden" v-for="x in governors" :key="x" >
                            <div class="mb-0 h-56 overflow-hidden">
                                <img :src=x.img alt="" class="w-full h-full object-cover group-hover:scale-110 transition-all">
                            </div>
                            <div class="desc text-center p-4 bg-blue-100 group-hover:bg-blue-800 transition-all ease-out group-hover:text-white">
                                <h3 class="font-bold">{{x.name}}</h3>
                                <p class="text-slate-500 group-hover:text-white">{{x.position}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { AcademicCapIcon,BookOpenIcon,EyeIcon,GlobeEuropeAfricaIcon,ArrowRightCircleIcon} from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
export default {
    components: {
        siteHeader,AcademicCapIcon,BookOpenIcon,EyeIcon,GlobeEuropeAfricaIcon,ArrowRightCircleIcon
    },
    data() {
        return {
            headerImg, defaultPic,
            governors:[
                {
                    img:'/img/managing_partner.jpg',
                    name:"Mrs Ngozi Adeolu-Idowu",
                    position:"Managing Partner",
                },
                {
                    img:defaultPic,
                    name:"Barr. Oyetan Janet",
                    position:"Member",
                },                {
                    img:defaultPic,
                    name:"Dr. Akintola Taofeek",
                    position:"Member",
                },                {
                    img:defaultPic,
                    name:"Mrs Faseru Ronke",
                    position:"Member",
                },{
                    img:defaultPic,
                    name:"Dr. Nwama Emmanuel",
                    position:"Member",
                },
                
            ]
        }
    },
}
</script>
<style>

</style>