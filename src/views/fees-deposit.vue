<template >
    <div>
        <siteHeader title="Fees & Deposit" prev-page-name="About" curr-page-name="Fees & Deposit"
            :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50  py-10 md:py-10">    
            </div>
        </div>
    </div>

    <section>
        <div class="w-8/12 mx-auto">
            <p class="py-7 md:text-xl">Fees include costs associated with providing a thorough education; including teaching, essential educational materials and text books, and many curriculum trips. Fees also include the provision of pastoral care, meals and co-curricular activities.</p>
            <h1 class="py-2">Payment Information</h1>
            <ul class="list-disc md:ml-10 md:w-10/12 ">
                <li class="py-2">Fees MUST be paid BEFORE RESUMPTION for each term/session</li>
                <li class="py-2">Students will not be admitted into the Hostels unless ALL outstanding fees are settled.</li>
                <li class="py-2">A 10% and 15% discount will be awarded as rebate on a third and fourth child to parents with three and four children respectively. The discount is given on the Tuition & Boarding Fees of the third child and fourth child AFTER FULL PAYMENT for the session for all children.</li>
                <li class="py-2">MODE OF PAYMENT: BANK DRAFT is the only acceptable mode of payment. No personal/company cheques allowed.</li>
                <li class="py-2">* Please Note: NO DISCOUNT will be granted for full payment of fees for the session/year</li>
            </ul>

            <p class="mt-5">We are pleased to inform you that Atlantic Hall School is now live on the GTBank And Zenith Bank channels.</p>
            <p class="py-5">If you want to pay SCHOOL FEES now, Please click on any of the links below.</p>
            <p class="py-2">You can pay with any of the following channels:</p>

            <p class="py-2">1. MasterCard</p>
            <p class="py-2">2. Visa Naira Card</p>
            <p class="py-2">3. Interswitch Verve Card</p>
            <p class="py-2">4. Bank Transfer (If you have GTB Internet Banking)</p>

            <div class="mt-5">
                <img class="w-96" src="../assets/logos/payment-logo.png" alt="">
            </div>
        </div>
    </section>

</template>


<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
export default {
    components: {
        siteHeader, AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon
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