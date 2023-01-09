<template>
    <div>
        <div class="content max-w-5xl mx-auto p-5  py-20">
            <div class="">
                <h2 class="text-4xl text-red-500 pb-10 text-center">Recently Posted </h2>
            </div>
            <div class="no-jobs text-center bg-white shadow p-10" >
                <div class="font-bold text-4xl">There are currently no Jobs Available.</div>
                <p class="text-slate-500 py-6">Kindly check back later!!</p>
            </div>
            <div class="job-content py-4" v-for="(job,i) in jobs" :key="i" >
                <h2 class="text-xl">{{job.jobTitle}}</h2>
                <p class="py-2 desc text-slate-500">{{job.jobDesc}}</p>
                <div class="details flex gap-4">
                    <p class="text-slate-700">{{job.experience}} years Experience</p> <p class="text-red-700">{{job.date}} days ago</p> <p class="text-blue-500 italic" v-if="!job.expired">Accepting Applications</p>
                </div>
                <button class="p-2 px-5 my-5 bg-blue-800 text-white rounded">APPLY NOW</button>
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