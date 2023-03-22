<template>
    <div>
        <div class="content max-w-5xl mx-auto p-5  py-10">
            <!-- <div class="">
                <h2 class="text-4xl text-red-500 pb-10 text-center">Recently Posted </h2>
            </div> -->

            <div class="job-content py-4" v-for="(job,i) in jobs" :key="i"  >
                <h2 class="text-xl">{{job.jobTitle}}</h2>
                <p class="py-2 desc text-slate-500">{{job.jobDesc}}</p>
                <div class="details flex gap-4">
                    <p class="text-slate-700">{{job.experience}} years Experience</p> <p class="text-red-700">{{job.date}} days ago</p> <p class="text-blue-500 italic" v-if="!job.expired">Accepting Applications</p>
                </div>
                <button class="p-2 px-5 my-5 bg-blue-800 text-white rounded">APPLY NOW</button>
            </div>
            <div class="flex items-center h-44 my-10" v-if="!jobs.length">
                <div class="text-center w-full">
                    <img src="../assets/broken-image.png" alt="" class="w-16 mx-auto my-5">
                    <p class="text-2xl font-medium">
                        Nothing to see here.
                    </p>
                    <p class="text-xs">Kindly check back later</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            jobs:[
                // {
                //     jobTitle:"Mathematics Class Teacher",
                //     jobDesc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente, nemo impedit magnam praesentium eum animi itaque necessitatibus quaerat earum maxime, at cum perferendis nobis? Labore aliquam quod repellat recusandae?",
                //     experience:"3",
                //     date:"12",
                //     expired:true
                // }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>