<template >
    <div>
        <siteHeader title="Library" prev-page-name="About" curr-page-name="Library" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl font-bold text-blue-800 mb-10">Library</h1>
                    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-3">

                    </div>
                </div>
            </div>
            <div class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96">
                <span class="absolute -z-10 w-full h-full inset-0 opacity-20"><img src="../assets/images/ass. class cpt g2 phlox.jpeg" alt="" class="w-full h-full object-cover -z-10"></span>
                <span class="absolute -z-10 inset-0 bg-gradient-to-t from-indigo-500/80 to-purple-900/80 "></span>
                <div class="max-w-6xl mx-auto max-sm:px-5 sm:px-16 md:px-0 z-50">
                    <h3 class="max-md:text-3xl text-4xl text-white ">
                        “Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.” — Maimonides
                    </h3>
                    <div class="btnGrp mt-8">
                        <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register Today</button>
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
        }
    },
}
</script>
<style>

</style>