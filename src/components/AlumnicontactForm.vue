<template >
    <div>
        <p>Kingsmead Schools wants to keep in touch with alumni and friends and stay informed about their lives and
            careers. To do this, we would like to receive updates about you through e-newsletters and social media. You
            can use the form provided to let us know about any changes in your information. We are excited to share news
            about our alumni and stay connected with you.</p>
        <div class="personal-profile py-4">
            <form @submit.prevent="submit()" class="">
                <h3 class="font-bold text-xl py-4">Personal Profile</h3>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Full Name:
                        <input type="text" name="" id="" class="p-3 w-full outline-none" placeholder="Your Name Here" v-model="contact.fullname">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Graduation Year:
                        <input  class="p-3 w-full outline-none" v-model="contact.graduation_year" placeholder="2020"/>
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Email Address:
                        <input type="email" class="p-3 w-full outline-none" placeholder="Email Address" v-model="contact.email">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Phone Number:
                        <input type="tel" name="" id="" class="p-3 w-full outline-none" placeholder="Phone Number" v-model="contact.phone">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        Where do you currently live?:
                        <input type="address" name="" id="" class="p-3 w-full outline-none" placeholder="Home Address" v-model="contact.address">
                    </label>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-2">
                        What is your current Occupation:
                        <input type="text" name="" id="" class="p-3 w-full outline-none" placeholder="Job Title" v-model="contact.job_title">
                    </label>
                </div>
                <hr class="my-5">   
                <h3 class="font-bold text-xl py-4">Contact Preferences</h3>
                <div class="input-element py-2">
                    <label for="" class="py-3">Is it okay to contact you about events for Alumni?</label>
                    <div class="flex my-3 gap-4">
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="yes" v-model="contact.allow_contact" id="" class="w-8 h-8 mr-4">
                            Yes
                        </label>
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="no" v-model="contact.allow_contact" id="" class="w-8 h-8 mr-4">
                            No
                        </label>
                    </div>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-3">Are you interested in being an ambassador or mentor to current students?</label>
                    <div class="flex my-3 gap-4">
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="yes"  v-model="contact.become_mentor" id="" class="w-8 h-8 mr-4">
                            Yes
                        </label>
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="no" v-model="contact.become_mentor" id="" class="w-8 h-8 mr-4">
                            No
                        </label>
                    </div>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-3">Are you interested in employment opportunities at the school?</label>
                    <div class="flex my-3 gap-4">
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio"  value="yes"  v-model="contact.employment_offers" id="" class="w-8 h-8 mr-4">
                            Yes
                        </label>
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="no" v-model="contact.employment_offers" id="" class="w-8 h-8 mr-4">
                            No
                        </label>
                    </div>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-3">Are you interested in purchasing or selling merchandise that represent the school?</label>
                    <div class="flex my-3 gap-4">
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="yes"  v-model="contact.merchandise_sale" id="" class="w-8 h-8 mr-4">
                            Yes
                        </label>
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="no" v-model="contact.merchandise_sale" id="" class="w-8 h-8 mr-4">
                            No
                        </label>
                    </div>
                </div>
                <div class="input-element py-2">
                    <label for="" class="py-3">Do you follow the school on social media?</label>
                    <div class="flex my-3 gap-4">
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="yes"  v-model="contact.social_media_follower" id="" class="w-8 h-8 mr-4">
                            Yes
                        </label>
                        <label for="" class="flex items-center bg-white/80 p-2 w-full rounded">
                            <input type="radio" value="no" v-model="contact.social_media_follower" id="" class="w-8 h-8 mr-4">
                            No
                        </label>
                    </div>
                </div>
                <button class="submit my-6 text-xl font-bold bg-indigo-600 text-white py-4 px-10 hover:bg-indigo-500 rounded-full">
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
            contact:{
                fullname:"",
                graduation_year:"",
                email:"",
                phone:"",
                address:"",
                job_title:"",
                allow_contact:"",
                become_mentor:"",
                employment_offers:"",
                merchandise_sale:"",
                social_media_follower:""
            },
            successPrompt:false,
            failedPrompt:false,
            isLoading:false,
        }
    },
    methods:{
        clearInputs(){
            for (let key in this.contact){
                this.contact[key] = "";
            }
        },
        async submit(){
            this.isLoading = true
            try{
                const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/forms/form_alumni_profile`,this.contact)
                this.clearInputs()
                this.successPrompt = true
                this.isLoading = false
            }
            catch(err){
                this.failedPrompt = true
                this.isLoading = false
            }
        }
    }
}
</script>
<style>
    
</style>