<template>
    <div class="relative">
        <span class="absolute h-full w-full inset-0">
            <img src="../assets/images/DSC_0628.jpg" class="w-full h-full object-cover" alt="">
        </span>
        <span class="bg-gradient-to-tr from-blue-500 to-blue-900/90 absolute inset-0 w-full h-full"></span>
        <div class="max-w-6xl mx-auto py-10 max-md:px-5 relative">
            <div class="sm:flex justify-between items-center max-md:p-5 ">
                <div class="title">
                    <h2 class="text-7xl max-md:text-3xl text-white">Join Us Today</h2>
                    <p class="text-md max-md:text-sm text-white md:w-3/5 mt-3">We are the best choice when it comes to teaching a child in
                        the way he should grow</p>
                </div>
                <div class="btnGrp max-md:mt-5">
                    <Router-link to="/admissions/registration-form" class="text-indigo-500 rounded-full text-2xl max-md:text-sm bg-white py-4 max-md:py-2 px-10 max-md:px-5 shadow">Register
                        Today</Router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>