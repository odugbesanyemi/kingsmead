<template>
    <div>
        <!-- page -title -->
        <div class="h-96 relative">
            <img src="" alt="" class="absolute w-full h-full">
            <span
                class="bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-400 absolute inset-0 h-full w-full"></span>
            <div
                class="content absolute top-1/2 left-1/2 text-white text-center -translate-y-1/2 -translate-x-1/2 max-md:w-full max-md:p-5">
                <p class="text-md">26th January, 2023</p>
                <p class="text-4xl font-bold">Tinubu visits Kingsmead Schools</p>
                <hr class="w-20">
                <p class="text-md">Kingsmead Hall, Erunwen, Ikorodu, Lagos</p>
                <p class="text-2xl">11:00pm</p>
                <div class="mt-10 flex justify-center">
                    <p class="text-md font-bold border-r p-3">206 <span class="font-normal">Enrolled</span> </p>
                    <p class="text-md text-yellow-100 p-3">Free Entry</p>
                </div>
            </div>
            <!-- <img src="../assets/icon_star.svg" alt="" class="inset-0 absolute"> -->
        </div>
        <!-- page content -->
        <div class="max-w-6xl mx-auto">
            <div class="md:flex">
                <div class="main md:w-3/5 p-10">
                    <div class="main-content">
                        <p class="title text-2xl font-bold py-2">Welcome</p>
                        <img src="../assets/images/cultural1.jpeg" class="my-5" alt="">
                        <p class="text-slate-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quidem earum ad accusamus
                            minus vel similique excepturi amet fuga iste! Omnis minima nisi laboriosam ut veniam
                            aperiam,
                            sequi temporibus perspiciatis?
                        </p>
                        <p class="font-bold py-5">Activities</p>
                        <ul class="list-disc text-slate-500">
                            <li class="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem
                                adipisci architecto natus? Et repudiandae qui illo adipisci veniam praesentium, quisquam
                                natus saepe aut iste </li>
                            <li class="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem
                                adipisci architecto natus? Et repudiandae qui illo adipisci veniam praesentium, quisquam
                                natus saepe aut iste </li>
                            <li class="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem
                                adipisci architecto natus? Et repudiandae qui illo adipisci veniam praesentium, quisquam
                                natus saepe aut iste </li>
                        </ul>
                    </div>

                    <div class="end">
                        <button class="my-10 bg-blue-800 text-white px-10 py-3 rounded-full">
                            Enroll Now
                        </button>
                    </div>
                </div>
                <div class="sidebar p-10 bg-blue-50 md:w-2/5">
                    <p class="font-bold text-xl mb-4">Popular Events</p>
                    <div class="event p-4 border-b hover:border-0 hover:rounded-lg hover:bg-white/50 transition-all mb-3">
                        <p class="">23rd January, 2023</p>
                        <p class="text-slate-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nisi, impedit </p>
                        <span class="inline-block my-2 text-red-500"><router-link to="#">Learn More</router-link></span>
                    </div>
                </div>

            </div>

        </div>
        <!-- go back -->

        <!-- more events -->
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>