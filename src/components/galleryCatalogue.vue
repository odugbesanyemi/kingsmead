<template >
    <div>
        <div class="title mb-10 relative h-80">
            <img src="../assets/images/sport8.jpeg" class="w-full h-full object-cover object-top" alt="">
            <span class="bg-gradient-to-t from-white via-blue-50/50 to-transparent absolute inset-0"></span>
        </div>
        <div class="images max-w-5xl mx-auto py-10">
            <h3 class="text-5xl font-bold py-5">{{ `${$route.params.id} Title`}}</h3>
            <div >
                <viewer :images="images" class="grid grid-cols-4 gap-5">
                    <img v-for="src in images" :key="src" :src="src.src">
                </viewer>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {},
    data() {
        return {
            images: [
                { src: 'https://placekitten.com/801/800', thumbnailWidth: "220px" },
                { src: 'https://placekitten.com/802/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/803/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/804/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/805/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/806/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/807/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/808/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/809/800', thumbnailWidth: "" },
                { src: 'https://placekitten.com/810/800', thumbnailWidth: "" },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>