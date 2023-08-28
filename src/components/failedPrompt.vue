<template>
    <div class="fixed z-40 w-full h-full inset-0 flex items-center justify-center ">
        <span class="w-full h-full absolute bg-black/50 inset-0"></span>
        <div class="bg-white text-center overflow-hidden rounded-lg relative shadow-xl flex flex-col justify-center items-center p-10 max-md:w-10/12 mx-auto w-80">
            <Icon icon="flat-color-icons:cancel" class="text-6xl mb-5 z-10"/>
            <div class="space-y-3 relative z-10">
                <h3 class="title text-3xl text-red-400 font-bold">{{ title }}</h3>
                <p class="text-gray-500 text-sm w-10/12 mx-auto">{{ description }}</p>            
                <button @click="$emit('close')" class="rounded px-6 py-2 bg-red-500 hover:bg-red-400 transition-all uppercase text-blue-50 text-sm shadow-xl">
                    <!-- <Icon icon="cil:truck" class="text-3xl" /> -->
                 Close</button>         
            </div>
            <span class="absolute left-0 z-0 -bottom-10 opacity-40"><img src="../assets/framebg2.png"></span>       

        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default {
components:{Icon},
props:['title','description'],
data() {
    return {
        
    }
},    
}
</script>
<style lang="">
    
</style>