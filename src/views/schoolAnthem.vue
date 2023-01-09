<template >
    <div>
        <siteHeader title="School Anthem" prev-page-name="About" curr-page-name="School Anthem" :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <span class="absolute inset-0 w-full h-full -z-10"><img src="../assets/images/DSC_0865.jpg" class="w-full h-full inset-0 object-cover object-bottom" alt=""></span>
            <span class="absolute inset-0 max-md:bg-gradient-to-tr max-md:to-blue-50/80 bg-gradient-to-r from-blue-100 via-white to-transparent -z-10"></span>
            <div class="bg-transparent  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <h1 class="text-5xl text-blue-800 mb-10">Our Anthem</h1>
                    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-3 text-slate-600">
                        <div class="">
                            <h2 class="text-3xl mb-5">1st Stanza</h2>
                            <p class="">We have risen like the morning Star for landmark change, not fun, Glowing like the constant Northern Star, We're poised to shine afar. Kingmead Schools, Built on faith in the Almighty.</p>
                        </div>
                        <div class="">
                            <h2 class="text-3xl mb-5">2nd Stanza</h2>
                            <p class="">Across oceans, lands and climes, We'll excel in changing times.Through character, career and service, We'll tread the royal path. Kingsmead Schools, Built on faith in the Almighty.</p>
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

        }
    },
}
</script>
<style>

</style>