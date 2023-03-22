<template >
    <div clas="relative" v-if="popup">
        <span class="text-red-500 shadow-2xl fixed z-20 top-20 md:right-20 right-0 bg-white p-2 rounded-full" @click="$emit('close')">
            <XMarkIcon class="w-10" />
        </span>
        <span class="h-full w-11/12 overflow-hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10" v-if="popup" v-html="popup.post_content"></span>
    </div>
    <!-- <div class="h-2/3 md:w-1/2 min-h-96 w-5/6 bg-white overflow-hidden rounded-xl shadow-2xl max-w-2xl fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 outline outline-white/50 ">
        <img src="../assets/kingsmead.svg" class="md:w-20 md:h-20 w-10 h-10 absolute z-10 md:top-10 md:left-10 top-5 left-5"
            alt="">
        <div class="">
            <img src="../assets/images/cultural5.jpeg" alt="" class="min-h-full absolute object-cover w-full ">
        </div>
        <span class="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-800 to-indigo-500/10"></span>

        <div class="absolute bottom-5 md:p-10 p-5">
            <h2 class="text-white md:text-5xl text-4xl mb-2">Welcome to School</h2>
            <p class="text-sm mb-3 text-white/80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, cum iusto
                quaerat distinctio nam dolor dolores! Veritatis quis, fugit vel atque, soluta id placeat nihil, quasi sit
                perferendis nisi numquam?</p>
            <router-link class=" text-xs text-gray-300 underline " to="">Register for New Session</router-link>
        </div>
    </div> -->
</template>
<script >
import axios from 'axios';
import { XMarkIcon } from '@heroicons/vue/24/outline';
export default {
    components: { XMarkIcon },
    data() {
        return {
            popup: {}
        }
    },
    methods: {
        async getPopup() {
            try {
                const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/post/type`, { type: 'popup' })
                this.popup = response.data[0]
            }
            catch (err) { }
        }
    },
    mounted() {
        this.getPopup()
    }
}
</script>
<style scoped></style>