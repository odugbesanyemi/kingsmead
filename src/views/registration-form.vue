<template >
    <div>
        <siteHeader title="Registration Form" prev-page-name="About" curr-page-name="Registration Form"
            :img-name="headerImg" />
    </div>

        <section>
            <div class="text-center py-10">
                <h1 class="text-2xl font-bold">Kindly click the button below to download the form</h1>
                <div class="p-5 ">
                   <button class="bg-blue-900 rounded-md text-white text-xl font-bold p-2 w-7/12">ADMISSION FORM</button> 
                </div>
                <p class="text-2xl p-1">Or fill the form below</p>
                <p class="p-2 font-bold text-xl">NB: *Please fill the name field as written on your Birth Certificate or International Passport.</p>
            </div>
        </section>

        <section>
            <div class="w-10/12 mx-auto">
                 <h1 class="text-xl font-bold pb-8">ADMISSION FORM</h1>
            </div>
        </section>

            <!-- This is Admission Form -->
        <form action="">
            <div class="w-10/12 mx-auto">
                <div class="p-2">
                    <p class="mb-2">Full Name</p> 
                    <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" required type="text" name="" placeholder="First & Last Name">
                </div>

                <div class="p-2">
                    <p class="mb-2">Email</p> 
                    <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="Enter Email Address">
                </div>

                <div class="p-2">
                    <p class="mb-2">Amount (NGN)</p> 
                    <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="#1500">
                </div>

                <div class="grid grid-cols-2">
                    <div class="p-2 w-full">
                        <p class="mb-2">Sex</p> 
                        <select class="w-full outline outline-1 outline-blue-400 p-2 mb-2" name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>

                    <div class="p-2 w-full">
                        <p class="mb-2">Date of Birth</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="date" name="" placeholder="mm/dd/yyyy">
                        <p>(JSS1 candidates are to be 10yrs old by September, the beginning of a new academic calendar)</p>
                    </div>

                    <div class="p-2 mt-3">
                        <p class="mb-2">Upload Passport Photography </p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" required placeholder="no file selected">
                    </div>

                    <div class="p-2 mt-3">
                        <p class="mb-2">Country</p>
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="Enter date of birth">
                    </div>

                    <div class="p-2">
                        <p class="mb-2">State</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="-Select an option-">
                    </div>

                    <div class="p-2">
                        <p class="mb-2">L.G Area</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="Enter L.G Area">
                    </div>

                    <div class="p-2">
                        <p class="mb-2">Present Class</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="-Select an option-">
                    </div>

                    <div class="p-2">
                        <p class="mb-2">Names and Classes of siblings currently</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="Enter Names and Classes of siblings">
                    </div>

                    <div class="p-2 w-full">
                        <p class="mb-2">Religion</p> 
                        <select class="w-full outline outline-1 outline-blue-400 p-2 mb-2" name="" id="">
                            <option value="">Christianity</option>
                            <option value="">Islam</option>
                            <option value="">Others</option>
                        </select>
                    </div>

                    <div class="p-2">
                        <p class="mb-2">Year/Class for which admission is beign sought*</p> 
                        <input class="w-full p-2 outline outline-1 outline-blue-400 mb-2" type="text" name="" placeholder="-Select an option-">
                    </div>
                </div>
            </div>
        </form>

            <!--This is School History Form -->
        <form action="">
                <div class="w-10/12 mx-auto py-5">
                    <h1 class="p-2 text-2xl font-bold">School History</h1>
                    <div class="grid grid-cols-2">
                      

                        <div class="p-3">
                            <p class="mb-2">Name of School</p>
                            <input class="outline outline-1 outline-blue-400 w-full p-2" type="text" name="" placeholder="Enter Name of School">
                        </div> 

                        <div class="p-3">
                            <p class="mb-2">Date</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Date">
                        </div>

                        <div class="p-3">
                            <p class="mb-2">Name of School</p>
                            <input class="outline outline-1 outline-blue-400 w-full p-2" type="text" name="" placeholder="Enter Name of School">
                        </div> 

                        <div class="p-3">
                            <p class="mb-2">Date</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Date">
                        </div>
                    </div>
                </div>
        </form>


            <!-- This is Family-Father Personal Information form -->
        <form action="">
                <div class="w-10/12 mx-auto py-5">
                    <h1 class="p-2 text-2xl font-bold">FAMILY: PERSONAL INFORMATION</h1>
                    <div class="grid grid-cols-2">
                        <div class="p-3">
                            <p class="mb-2">Fathers's Surname</p>
                            <input class="outline outline-1 outline-blue-400 w-full p-2" type="text" name="" placeholder="Enter Father'Surname">
                        </div> 

                        <div class="p-3">
                            <p class="mb-2">Other Names</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Other Names">
                        </div>
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Office Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Office Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Phone Number</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Phone Number">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Residence Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Phone</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Residence Phone">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">E-mail Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="email" name="" placeholder="Enter E-mail Address">
                    </div>
                </div>
                
        </form>


             <!-- This is Family-Mother Personal Information form -->
        <form action="">
                <div class="w-10/12 mx-auto py-5">
                    <div class="grid grid-cols-2">
                        <div class="p-3">
                            <p class="mb-2">Mother's Surname</p>
                            <input class="outline outline-1 outline-blue-400 w-full p-2" type="text" name="" placeholder="Enter Mother's Surname">
                        </div> 

                        <div class="p-3">
                            <p class="mb-2">Other Names</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Other Names">
                        </div>
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Office Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Office Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Phone Number</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="number" name="" placeholder="Enter Phone Number">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Residence Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Phone</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="number" name="" placeholder="Enter Residence Phone">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">E-mail Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="email" name="" placeholder="Enter E-mail Address">
                    </div>
                </div>
                
        </form>


            <!-- This is Guardian Personal Information form -->
        <form action="">
                <div class="w-10/12 mx-auto py-5">
                    <div class="grid grid-cols-2">
                        <div class="p-3">
                            <p class="mb-2">Guardian's Surname</p>
                            <input class="outline outline-1 outline-blue-400 w-full p-2" type="text" name="" placeholder="Enter Guardian Surname">
                        </div> 

                        <div class="p-3">
                            <p class="mb-2">Other Names</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Other Names">
                        </div>
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Office Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Office Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Phone Number</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Phone Number">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full h-32 p-2" type="text" name="" placeholder="Enter Residence Address">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">Residence Phone</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="Enter Residence Phone">
                    </div>

                    <div class="p-3">
                        <p class="mb-2">E-mail Address</p>
                        <input class="outline outline-1 outline-blue-400 w-full  p-2" type="email" name="" placeholder="Enter E-mail Address">
                        <p>(Please note that all correspondence will be sent to this address unless the school is notified otherwise)</p>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="p-3">
                            <p class="mb-2">Are parents living together?</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="-Select an option-">
                        </div>

                        <div class="p-3">
                            <p class="mb-2">Is either parent a member of the Trust Council?</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="-Select an option-">
                        </div>
                    </div>

                    <div class="p-3">
                            <p class="mb-2">Signature of Parent/Guardian</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="no file selected">
                    </div>

                    <h1 class="mt-10 fobt-bold text-xl">PREFERRED EXAM CENTER</h1>
                    <div class="p-3">
                            <p class="mb-2">Exam Center</p>
                            <input class="outline outline-1 outline-blue-400 w-full  p-2" type="text" name="" placeholder="-Select an option-">
                    </div>
                    <div class="">
                            <p class="p-2">are compulsor</p>
                        <div class="">
                             <img class="w-96" src="../assets/logos/payment-logo.png" alt="">  
                        </div>
                        <div class="p-7 grid grid-cols-2">
                            <button class="p-3 text-xl w-11/12 bg-blue-800 rounded-md text-white hover:bg-blue-900" type="button">Pay</button>
                            <button class="p-3 text-xl w-11/12 bg-blue-800 rounded-md text-white hover:bg-blue-900" type="button">Reset</button>
                        </div>
                    </div><br><br>
                </div> 
        </form>

            


    <div class="bg-gradient-to-tr from-red-100 via-orange-500 to-red-500 py-20 md:py-32 backdrop-blur-md min-h-96">
        <span class="absolute -z-10 w-full h-full inset-0 opacity-20"><img
                src="../assets/images/ass._class_cpt_g2_phlox.jpeg" alt=""
                class="w-full h-full object-cover -z-10"></span>
        <span class="absolute -z-10 inset-0 bg-gradient-to-t from-indigo-500/80 to-purple-900/80 "></span>
        <div class="max-w-6xl mx-auto max-sm:px-5 sm:px-16 md:px-0 z-50">
            <h3 class="max-md:text-3xl text-4xl text-white ">
                “Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a
                lifetime.” — Maimonides
            </h3>
            <div class="btnGrp mt-8">
                <button class="text-indigo-500 rounded-full text-2xl bg-white py-4 px-10 shadow">Register
                    Today</button>
            </div>
        </div>
    </div>
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