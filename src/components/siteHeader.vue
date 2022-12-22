<template >
    <div class="relative max-md:h-44 h-36 -z-10" style="">
        <div class="relative  h-full px-30 flex flex-col items-start justify-center">
            <div class="absolute h-full w-full bg-fixed">
                <img :src=imgName class="w-full h-full object-cover bg-fixed" alt="">
            </div>
            <span class="absolute bg-gradient-to-r from-blue-900  to-blue-900/80 w-full h-full z-0"></span>
            <div class="z-30 relative lg:max-w-7xl mx-auto max-sm:px-10 text-center">
                <h1 class="text-white text-5xl max-md:text-4xl">{{ title }}</h1>
                <ul class="breadcrumb text-white/50 flex gap-2 mt-2 justify-center">
                    <li>{{ prevPageName }} / </li>
                    <li> </li>
                    <li>{{ currPageName }}</li>
                </ul>
            </div>

        </div>
        <!-- <div class="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#5000ca" fill-opacity="1"
                    d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
                </path>
            </svg>
        </div> -->
    </div>
</template>
<script>
export default {
    props: ['title', 'currPageName', 'prevPageName', 'prevPageLink', 'imgName'],
    data() {
        return {
        }
    }
}
</script>
<style>

</style>