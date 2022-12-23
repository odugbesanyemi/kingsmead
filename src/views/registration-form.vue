<template >
    <div>
        <siteHeader title="Registration Form" prev-page-name="About" curr-page-name="Registration Form"
            :img-name="headerImg" />
    </div>

    <div>
        <div class="md:flex max-w-7xl mx-auto md:py-20 gap-10 ">
            <div class="md:w-4/6 max-md:p-5">
                <!-- advert -->
                <div class="">
                    <div class="rounded-3xl shadow p-10 relative">
                        <img src="../assets/images/DSC_0568.jpg" class=" absolute inset-0 w-full h-full object-cover z-0" alt="">
                        <span
                            class="absolute bg-gradient-to-r from-blue-600 to-blue-900/70 inset-0 w-full h-full z-0"></span>
                        <div class="relative">
                            <h2 class="text-5xl text-white md:w-4/6 z-10">Admission in Progress</h2>
                            <p class="md:w-3/6 mt-2 text-white/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tempore,</p>

                        </div>
                    </div>
                </div>
                <div class="mt-8 text-xl text-slate-500">
                    <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus totam beatae quo esse dolorem id magni deserunt. Velit dignissimos beatae magni atque, nesciunt dolor, commodi ut aut accusamus saepe ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fugit accusantium pariatur veniam porro mollitia architecto quos, quae aperiam accusamus dolorem molestias eos error sunt commodi laborum reiciendis amet minus.</p>
                </div>
                <!--grids for actions -->
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10 ">
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-orange-300">
                        <div class="bg-orange-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/814848.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-orange-600">Download Admission Form</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-purple-300">
                        <div class="bg-purple-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/814848.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-purple-600">Start Online Registration</h2>
                        </div>
                    </div>
                    <div class="rounded-2xl shadow-sm hover:shadow-xl border border-blue-300">
                        <div class="bg-blue-300 p-5 rounded-t-2xl">
                            <img src="../assets/icons/814848.png" alt="" class="w-20 h-20 mx-auto">
                        </div>
                        <div class="div p-5 ">
                            <h2 class="text-3xl text-blue-600">Visit nearest Branch/ Annex</h2>
                        </div>
                    </div>
                </div>
            </div>
            <admissionSidebarVue />
        </div>
    </div>

    <!-- <section>
        <div class="text-center py-10">
            <h1 class="md:text-2xl  max-md:px-10">Kindly click the button below to download the form</h1>
            <div class="p-5 ">
                <button class="bg-blue-900 rounded-md text-white text-xl  p-4 w-7/12">ADMISSION FORM</button>
            </div>
            <p class="text-2xl p-1">Or fill the form below</p>
            <p class="p-4  text-xl">NB: *Please fill the name field as written on your Birth Certificate or
                International Passport.</p>
        </div>
    </section> -->

    <!-- <div>
        <form action="">
            <div class="w-10/12 mx-auto">
                <div class="p-4">
                    <p class="mb-2">Full Name</p>
                    <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" required type="text" name=""
                        placeholder="First & Last Name">
                </div>

                <div class="p-4">
                    <p class="mb-2">Email</p>
                    <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                        placeholder="Enter Email Address">
                </div>

                <div class="p-4">
                    <p class="mb-2">Amount (NGN)</p>
                    <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                        placeholder="#1500">
                </div>

                <div class="grid md:grid-cols-2">
                    <div class="p-4 w-full">
                        <p class="mb-2">Sex</p>
                        <select class="w-full outline outline-1 outline-blue-400 p-4 mb-2" name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>

                    <div class="p-4 w-full">
                        <p class="mb-2">Date of Birth</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="date" name=""
                            placeholder="mm/dd/yyyy">
                        <p>(JSS1 candidates are to be 10yrs old by September, the beginning of a new academic calendar)
                        </p>
                    </div>

                    <div class="p-4 mt-3">
                        <p class="mb-2">Upload Passport Photography </p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name="" required
                            placeholder="no file selected">
                    </div>

                    <div class="p-4 mt-3">
                        <p class="mb-2">Country</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="Enter date of birth">
                    </div>

                    <div class="p-4">
                        <p class="mb-2">State</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="-Select an option-">
                    </div>

                    <div class="p-4">
                        <p class="mb-2">L.G Area</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="Enter L.G Area">
                    </div>

                    <div class="p-4">
                        <p class="mb-2">Present Class</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="-Select an option-">
                    </div>

                    <div class="p-4">
                        <p class="mb-2">Names and Classes of siblings currently</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="Enter Names and Classes of siblings">
                    </div>

                    <div class="p-4 w-full">
                        <p class="mb-2">Religion</p>
                        <select class="w-full outline outline-1 outline-blue-400 p-4 mb-2" name="" id="">
                            <option value="">Christianity</option>
                            <option value="">Islam</option>
                            <option value="">Others</option>
                        </select>
                    </div>

                    <div class="p-4">
                        <p class="mb-2">Year/Class for which admission is beign sought*</p>
                        <input class="w-full p-4 outline outline-1 outline-blue-400 mb-2" type="text" name=""
                            placeholder="-Select an option-">
                    </div>
                </div>
            </div>
        </form>
        <form action="">
            <div class="w-10/12 mx-auto py-5">
                <h1 class="p-4 text-2xl ">School History</h1>
                <div class="grid md:grid-cols-2">


                    <div class="p-3">
                        <p class="mb-2">Name of School</p>
                        <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                            placeholder="Enter Name of School">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Date</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="Enter Date">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Name of School</p>
                        <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                            placeholder="Enter Name of School">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Date</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="Enter Date">
                    </div>
                </div>
            </div>
        </form>
        <form action="">
            <div class="w-10/12 mx-auto py-5">
                <h1 class="p-4 text-2xl ">FAMILY: PERSONAL INFORMATION</h1>
                <div class="grid md:grid-cols-2">
                    <div class="p-3">
                        <p class="mb-2">Fathers's Surname</p>
                        <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                            placeholder="Enter Father'Surname">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Other Names</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="Enter Other Names">
                    </div>
                </div>

                <div class="p-3">
                    <p class="mb-2">Office Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Office Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Phone Number</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Phone Number">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                        placeholder="Enter Residence Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Phone</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Residence Phone">
                </div>

                <div class="p-3">
                    <p class="mb-2">E-mail Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="email" name=""
                        placeholder="Enter E-mail Address">
                </div>
            </div>

        </form>
        <form action="">
            <div class="w-10/12 mx-auto py-5">
                <div class="grid md:grid-cols-2">
                    <div class="p-3">
                        <p class="mb-2">Mother's Surname</p>
                        <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                            placeholder="Enter Mother's Surname">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Other Names</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="Enter Other Names">
                    </div>
                </div>

                <div class="p-3">
                    <p class="mb-2">Office Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                        placeholder="Enter Office Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Phone Number</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="number" name=""
                        placeholder="Enter Phone Number">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                        placeholder="Enter Residence Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Phone</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="number" name=""
                        placeholder="Enter Residence Phone">
                </div>

                <div class="p-3">
                    <p class="mb-2">E-mail Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="email" name=""
                        placeholder="Enter E-mail Address">
                </div>
            </div>

        </form>
        <form action="">
            <div class="w-10/12 mx-auto py-5">
                <div class="grid md:grid-cols-2">
                    <div class="p-3">
                        <p class="mb-2">Guardian's Surname</p>
                        <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                            placeholder="Enter Guardian Surname">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Other Names</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="Enter Other Names">
                    </div>
                </div>

                <div class="p-3">
                    <p class="mb-2">Office Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full p-4" type="text" name=""
                        placeholder="Enter Office Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Phone Number</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Phone Number">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Residence Address">
                </div>

                <div class="p-3">
                    <p class="mb-2">Residence Phone</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="Enter Residence Phone">
                </div>

                <div class="p-3">
                    <p class="mb-2">E-mail Address</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="email" name=""
                        placeholder="Enter E-mail Address">
                    <p>(Please note that all correspondence will be sent to this address unless the school is notified
                        otherwise)</p>
                </div>

                <div class="grid md:grid-cols-2">
                    <div class="p-3">
                        <p class="mb-2">Are parents living together?</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="-Select an option-">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Is either parent a member of the Trust Council?</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                            placeholder="-Select an option-">
                    </div>
                </div>

                <div class="p-3">
                    <p class="mb-2">Signature of Parent/Guardian</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="no file selected">
                </div>

                <h1 class="mt-10 fobt-bold text-xl">PREFERRED EXAM CENTER</h1>
                <div class="p-3">
                    <p class="mb-2">Exam Center</p>
                    <input class="outline outline-1 outline-blue-400 w-full  p-4" type="text" name=""
                        placeholder="-Select an option-">
                </div>
                <div class="">
                    <p class="p-4">are compulsor</p>
                    <div class="">
                        <img class="w-96" src="../assets/logos/payment-logo.png" alt="">
                    </div>
                    <div class="p-7 grid grid-cols-2">
                        <button class="p-3 text-xl w-11/12 bg-blue-800 rounded-md text-white hover:bg-blue-900"
                            type="button">Pay</button>
                        <button class="p-3 text-xl w-11/12 bg-blue-800 rounded-md text-white hover:bg-blue-900"
                            type="button">Reset</button>
                    </div>
                </div><br><br>
            </div>
        </form>
    </div> -->

</template>


<script>
import { AcademicCapIcon, BookOpenIcon, EyeIcon, GlobeEuropeAfricaIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import siteHeader from '../components/siteHeader.vue'
import headerImg from '../assets/images/DSC_0515.jpg'
import defaultPic from "../assets/logos/default.png"
import admissionSidebarVue from '../components/admissionSidebar.vue'
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