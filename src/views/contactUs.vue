<template >
    <div>
        <siteHeader title="About Kingsmead" prev-page-name="About" curr-page-name="History" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">

                </div>
            </div>
            <div class="bg-gradient-to-tr from-yellow-100 via-indigo-500 to-yellow-500 py-20 md:py-32 backdrop-blur-md">
                <div class="max-w-6xl mx-auto max-sm:px-5 sm:px-16 md:px-0">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { AcademicCapIcon,BookOpenIcon,EyeIcon,GlobeEuropeAfricaIcon,ArrowRightCircleIcon} from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
export default {
    components: {
        siteHeader,AcademicCapIcon,BookOpenIcon,EyeIcon,GlobeEuropeAfricaIcon,ArrowRightCircleIcon
    },
    data() {
        return {
            headerImg
        }
    },
}
</script>
<style>

</style>