<template >
    <div>
        <siteHeader title="Fees & Deposit" prev-page-name="Admission" curr-page-name="Fees & Deposit"
            :img-name="headerImg" />
    </div>
    <div>
        <div class="md:flex max-w-6xl mx-auto md:py-20 gap-10 ">
            <div class="md:w-4/6 max-md:p-5">
                <div class="">
                    <img class="w-full " src="../assets/images/DSC_05151.jpg">
                </div>

                <div class="text-slate-600">
                    <p class="py-7 md:text-lg leading-loose">Fees include costs associated with providing a thorough education;
                        including teaching, essential educational materials and text books, and many curriculum
                        trips. Fees also include the provision of pastoral care, meals and co-curricular activities.
                    </p>
                    <h2 class="py-2 text-2xl">Payment Information</h2>
                    <ul class="md:list-disc md:ml-5 md:w-10/12 leading-loose">
                        <li class="py-2">Fees MUST be paid BEFORE RESUMPTION for each term/session</li>
                        <li class="py-2">Students will not be admitted into the Hostels unless ALL outstanding fees
                            are settled.</li>
                        <li class="py-2">A 10% discount on two students and 50% discount or half-tuition for parents with four kids. <span class="text-red-500">NOTE:</span> The discount is given on the
                            Tuition fourth child AFTER FULL PAYMENT for the session for all children.</li>
                        <li class="py-2">MODE OF PAYMENT: Transfer into School Account or BANK DRAFT is the only acceptable mode of payment.</li>
                    </ul>
                    <h3 class="font-bold my-5">PAYMENT CHANNELS</h3>
                    <div class="responsive">
                        <table class="table-auto w-full max-md:text-xs">
                            <thead class="">
                                <tr class="text-slate-600 bg-slate-200" >
                                    <th class="py-2 border-b border">Account Name</th>
                                    <th class="py-2 border-b border">Account Number</th>
                                    <th class="py-2 border-b border">Bank Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-slate-500 text-center hover:bg-slate-50">
                                    <td class="py-2 border-b">Kingsmead College</td>
                                    <td class="py-2 border-b">4781370012</td>
                                    <td class="py-2 border-b">First Bank of Nigeria</td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>

                    <!-- <p class="mt-3">We are pleased to inform you that Kingsmead School is now live on the GTBank
                        And Zenith Bank channels.</p>
                    <p class="py-3">If you want to pay SCHOOL FEES now, Please click on any of the links below.</p>
                    <p class="py-2">You can pay with any of the following channels:</p>

                    <p class="py-2">1. MasterCard</p>
                    <p class="py-2">2. Visa Naira Card</p>
                    <p class="py-2">3. Interswitch Verve Card</p>
                    <p class="py-2">4. Bank Transfer (If you have GTB Internet Banking)</p> -->

                </div>
            </div>
            <admissionSidebarVue />
        </div>
    </div>



</template>


<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import admissionSidebarVue from "../components/admissionSidebar.vue"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon, admissionSidebarVue
    },
    data() {
        return {
            headerImg, defaultPic,
            users: [
                {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                },
                {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                }, {
                    name: "Layode Philips",
                    position: "Head Girl",
                    school: "College",
                },
            ]
        }
    },
}
</script>
<style>

</style>