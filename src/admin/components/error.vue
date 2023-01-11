<template>
    <div class="w-10/12 px-10">
        <div class="flex flex-row justify-between py-3 gap-4 items-center">
            <p class="text-red-500">{{error}}</p>
            <XCircleIcon @click="$emit('closeError')" class="w-6 h-6 text-red-200 hover:text-red-400 hover:ring rounded-full hover:ring-red-400 transition-all"/>
        </div>
    </div>
</template>
<script>
import { XCircleIcon } from "@heroicons/vue/24/solid"
export default{
    components:{XCircleIcon},
    props:['error']
}
</script>