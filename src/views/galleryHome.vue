<template>
    <div class="md:flex justify-between">
        <div class="md:w-9/12">
            <Router-view></Router-view>
        </div>
        <div class="bg-slate-50 md:w-3/12 p-10 min-h-full border-l ">
            <!-- search button -->
            <div class="border flex gap-3 rounded-full group">
                <MagnifyingGlassCircleIcon class="w-16 h-12 text-black/30 group-focus-within:text-blue-800 transition-all"/>
                <input type="search" name="" id="" class="bg-transparent outline-none w-full  " placeholder="Search Image" >
            </div>
            <!-- tags -->
            <h2 class="my-4 text-2xl">Search Tags</h2>
            <div class="tags">
                <button class="rounded-full text-xs inline-block py-2 px-4 bg-slate-200 mr-2">Elementary</button>
            </div>
        </div>
    </div>
</template>
<script>
import {MagnifyingGlassCircleIcon} from "@heroicons/vue/24/outline"
export default {
    components:{MagnifyingGlassCircleIcon}
}
</script>
<style lang="">
    
</style>