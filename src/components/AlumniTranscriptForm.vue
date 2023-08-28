<template >
    <div>
        <p>Please submit a request for a transcript using the form below. Be aware, response time can be up to 48 hrs.</p>
        <div class="personal-profile py-4">
            <form @submit.prevent="submit()" class="">
                <h3 class="font-bold text-xl py-4">REQUEST FOR TRANSCRIPT/ RECORDS</h3>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Full Name:
                        <input type="text" name="" id="" class="p-3 w-full outline-none" placeholder="Your Full Name Here" v-model="transcript.fullname">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Date of Birth:
                        <input type="date" v-model="transcript.dob" class="w-full p-3 ">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Graduation Year:
                        <input type="text" v-model="transcript.graduation_year" class="p-3 w-full" placeholder="2020">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Student's Email Address:
                        <input type="email" v-model="transcript.email" class="p-3 w-full outline-none" placeholder="Email Address">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Student's Phone Number:
                        <input type="tel" v-model="transcript.phone" class="p-3 w-full outline-none" placeholder="Phone Number">
                    </label>
                </div>
                <div class="py-4">
                    <p class="text-red-500">Please Note: Records to be picked up will be kept in the data office for three (3) days, and then destroyed in order to maintain privacy. Processingcan take up to 5 working days.</p>
                </div>
                <hr class="my-5">
                <div class="py-4">
                    <p class="text-slate-500">Please list the educational institution that you want your student transcript/records to be forwarded by completing the fields below.</p>
                </div>   
                <h3 class="font-bold text-xl py-4">INSTITUTION DETAILS</h3>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Institution name:
                        <input type="text" v-model="transcript.inst_name" class="p-3 w-full outline-none" placeholder="Institution name">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Institution Address:
                        <textarea type="text" v-model="transcript.inst_address" class="p-3 w-full outline-none" placeholder="Institution Address"></textarea>
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Phone:
                        <input type="text" v-model="transcript.inst_phone" class="p-3 w-full outline-none" placeholder="Institution Tel">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Institution Email:
                        <input type="text" v-model="transcript.inst_email" class="p-3 w-full outline-none" placeholder="Email Address">
                    </label>
                </div>
                <button class="submit my-6 text-xl font-bold bg-indigo-600 text-white py-3 px-8 hover:bg-indigo-500 rounded-full">
                    CONTINUE
                </button>
            </form>
        </div>
    </div>
        <loadingComponent v-if="isLoading"/>
    <successPrompt
      title="Success"
      description="We will get back to you as soon as possible"
      @close="successPrompt = !successPrompt"
      v-if="successPrompt"
    />
    <failedPrompt title="Failed" description="Sorry! the operation failed. Try again. " @close="failedPrompt = !failedPrompt" v-if="failedPrompt"/>
</template>
<script>
        import successPrompt from '../components/successPrompt.vue'
    import failedPrompt from '../components/failedPrompt.vue'
    import loadingComponent from '../components/loadingComponent.vue'
import axios from 'axios'
export default {
    components:{successPrompt,failedPrompt,loadingComponent},
    data(){
        return{
                transcript:{
                fullname:"",
                dob:"",
                graduation_year:"",
                email:"",
                phone:"",
                inst_name:"",
                inst_address:"",
                inst_phone:"",
                inst_email:"",
            },
            successPrompt:false,
            failedPrompt:false,
            isLoading:false,
        }
    },
    methods:{
        clearInputs(){
            for (let key in this.transcript){
                this.transcript[key] = "";
            }
        },
        async submit(){
            this.isLoading = true
            try{
                const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/forms/form_transcript_request`,this.transcript)
                this.clearInputs()
                this.successPrompt = true
                this.isLoading = false
            }
            catch(err){
                // console.log(err)
                this.failedPrompt = true
                this.isLoading = false
            }
        }
    }
}
</script>
<style lang="">
    
</style>