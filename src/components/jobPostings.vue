<template>
    <div>
        <div class="content ">
            <!-- <div class="">
                <h2 class="text-4xl text-red-500 pb-10 text-center">Recently Posted </h2>
            </div> -->
            <!-- breadcrumb -->
            <div class="space-x-3 py-10 px-5 text-md font-medium max-w-7xl mx-auto">
                <router-link to="/home">HOME</router-link>
                <span><i class="fi fi-rr-angle-small-right"></i></span>
                <router-link to="/jobs" class="text-gray-500" >JOBS</router-link>
            </div>
            <div class="space-y-5  max-w-7xl mx-auto p-5">
                <!-- <div class="image w-full">
                    <img src="../../public/img/DSC_0637.jpg" class="w-full" alt="">
                </div> -->
                <p class="text-5xl font-bold">Employment</p>
                <div class="flex items-start justify-start max-md:flex-col">
                    <div class="left space-y-5 md:mr-10">
                        <div class="space-y-5">
                            <p class="text-gray-700 text-justify">Employment at one of Kingsmead Schools' campuses is highly rewarding, presenting numerous opportunities to join the Kingsmead family as a valued staff member. Kingsmead Schools' expectations for teachers are in line with our educational philosophy and reinforced through continuous professional growth. We are in search of educators who possess a genuine passion for education, capable of igniting intellectual curiosity and instilling a love for learning. While appointments are made without consideration of candidates' religious background, an alignment with the ethos of our Modern Day School is essential. We eagerly welcome applications from enthusiastic and natural educators. Candidates should possess relevant qualifications, training, and practical experience in teaching IB curricula, as well as exhibit strong teamwork and communication skills, along with a steadfast dedication to character development, patience, and adaptability.</p>
                            <p class="text-gray-700 text-justify">Our aim is to provide an appealing remuneration package that is competitive in order to attract and retain faculty members who are committed to delivering quality education.</p>
                        </div>
                        <div class="space-y-5">
                            <p class="text-3xl font-bold">Openings</p>
                            <p class="text-gray-700">Applications from passionate, natural educators are welcomed. Applicants should hold relevant qualifications, training and practical experience in teaching IB curricula and be team players with excellent communication skills, commitment to character development, patience, and flexibility.</p>
                        </div> 

                        <ul class="space-y-2 md:list-none" v-if="availableJobs.length">
                            <li class="font-medium border-b-4 border-dashed bg-gray-50" v-for="job in availableJobs">
                                <div class="p-5 md:p-10 border border-dashed">
                                    <p class="text-gray-500"><span class="font-bold text-black">RefId:</span>  {{job.job_id}}</p>
                                    <p class="font-bold text-xl py-2">{{job.profile}}</p>
                                    <p>Salary:  {{job.min_salary}}-{{job.max_salary}} </p>
                                    <p class="flex gap-3 py-3">
                                        <span class="flex items-center gap-3"><i class="fi fi-rr-time-quarter-past text-orange-400"></i> <p>{{job.type}}</p></span>
                                        <span class="flex items-center gap-3"><i class="fi fi-rr-badge text-orange-400"></i> <p>{{job.experience}} years</p></span>
                                    </p>
                                    <span class="font-bold text-red-500 underline">Job Description</span>
                                    <p class="desc text-gray-500 font-light" v-html="job.description"></p>
                                    <a href="" class="pt-3 underline inline-flex gap-3 items-center" download><i class="fi fi-rr-down-to-line"></i><p>view more</p></a>
                                </div>
                            </li>
                        </ul>
                        <div v-else class="text-center">
                            <img src="@/assets/empty_response.png" class="mx-auto">
                            <h3 class="text-2xl font-bold">There are currently no Openings!!</h3>
                            <p>Please Check back some other time.</p>
                        </div>
                        <ul class="space-y-3">
                            <p class="font-medium">General Requirements</p>
                            <ul class="list-group md:list-disc">
                                <li class="">An undergraduate degree and a recognized teacher certification, i.e. Bachelor’s degree in Education; or Postgraduate Diploma in Education or equivalent</li>
                                <li class="" >At least 2 years’ relevant teaching experience</li>
                            </ul>
                        </ul>
                        <p class="text-gray-700">To apply, please send an application letter with CV to hr@kingsmeadschools.org.ng or apply within using the button below. Please note that only shortlisted applicants will be contacted. If you do not hear from us, please assume that your application has been unsuccessful. Personal data collected will be used for recruitment purposes only.</p>
                        <div class="form_upload p-5 bg-blue-800">
                            <button class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" v-if="!initUpload" @click="initUpload=true" >Apply Now</button>
                            <form action="#" class="" v-if="initUpload">
                                <div class="space-y-2 relative">
                                    <div class="group flex gap-4 ">
                                        <input type="text" v-model="applicant.applicant_name" placeholder="Full Name" class="p-2 w-full">
                                        <input type="email" v-model="applicant.applicant_email" placeholder="Email Address" class="p-2 w-full">
                                    </div>
                                    <select v-model="applicant.job_id" class="w-full border-0">
                                        <option value="">Choose job applied for</option>
                                        <option v-if='availableJobs.length' :value="jobs.job_id" v-for="jobs in availableJobs">{{ jobs.profile }}</option>
                                        <option v-else disabled>
                                            Nothing to Find Here, Check Back later.
                                        </option>

                                    </select>
                                    <input type="file" name="file" id="cvFile" @change="addFile" class="hidden" accept=".pdf,.doc,.docx" >
                                    <label for="cvFile" class="p-4 block border-blue-700 bg-white" :class="[file?'border-green-600':'']"><i class="fi fi-rr-cloud-upload-alt mr-2  text-blue-700" :class="[file?'text-green-600':'']"></i> {{ file?file.name:"Choose CV" }}</label>
                                    <label for="" class="block text-sm"></label>
                                    <div class="btn-group space-x-3">
                                        <button class="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600" v-if="file" @click.prevent="submitApplication">Submit <i class="fi fi-rs-paper-plane ml-2"></i></button>
                                        <button class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600" @click="[initUpload=false,file=null]">Cancel</button>
                                    </div>                                    
                                </div>

                            </form>
                        </div>
                    </div>
                    <div class=" border-l px-5 max-md:hidden sticky top-32">
                        <ul class="space-y-4">
                            <li class="flex space-x-4 justify-between items-start">
                                <router-link to='/'><span>Home</span><i class="fi fi-rr-angle-small-right"></i></router-link>
                            </li>
                            <li class="flex space-x-4 justify-between">
                                <router-link to="/news"><span class="whitespace-nowrap">Our News </span><i class="fi fi-rr-angle-small-right"></i></router-link>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <loadingComponent v-if ="isLoading"/>
    <successPrompt title="Application Submitted" v-if="applicationCompleted" @close="applicationCompleted=false"/>
</template>
<script>
import successPrompt from './successPrompt.vue';
import loadingComponent from "../components/loadingComponent.vue"
import axios from 'axios'
export default {
    data(){
        return{
            applicant:{},
            file:null,
            initUpload:false,
            applicationCompleted:false,
            availableJobs:[],
            isLoading:false,
        }
    },
    components:{successPrompt,loadingComponent},
    methods:{
        addFile(event){
            this.file = event.target.files[0];
        },
        async submitApplication(){
            this.initUpload = true
            this.isLoading = true
            try{
                const data = {
                    ...this.applicant
                }
                const formData = new FormData()
                formData.append('file',this.file)
                console.log(data)
                await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/job-post/new/submissions`,formData,{
                    params:data
                })
                this.applicationCompleted = true;
                this.file = null
                this.initUpload = false    
                this.isLoading = false            
            }
            catch(err){
                this.isLoading = false
                alert('error has occured')
            }

        },
        async initApp(){
            // get job post available
            try{
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/job-post/all`)
                this.availableJobs = response.data.filter((item)=>{
                    return item.status === 'Published'
                })
            }
            catch(err){
                this.isLoading = false
            }
        }
    },

    async mounted(){
        this.isLoading = true
        await this.initApp()
        this.isLoading = false
    }
}
</script>
<style lang="">
    
</style>