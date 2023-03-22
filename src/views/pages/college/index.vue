<template >
    <!-- hero section -->
    <section class="school title ">
        <div class="relative">
            <div class="h-72">
                <img src="/img/cultural4.jpeg" alt="" class="absolute w-full h-full object-cover">
            </div>
            <span class="absolute inset-0 w-full bg-black/10 backdrop-blur-sm"></span>
            <div
                class="w-4/5 mx-auto md:flex gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center">
                <div class="text-center md:w-9/12 max-md:">
                    <p class="font-bold text-5xl mb-1 text-white max-md:text-4xl">COLLEGE</p>
                    <p class="desc text-white leading-tight mb-4 max-md:text-sm">As an international school we are proud to provide the highest possible standard of education to our students</p>
                </div>
                <div class="gap-4 text-white items-center md:w-3/12 group">
                    <a href="/files/KingsmeadAdmissionFormCollege.pdf" download><p class="font-bold text-xl text-white flex items-center justify-center bg-blue-600 rounded-full"><span class="p-2 text-center text-white-900 ">ADMISSION PROCEDURE</span><ArrowRightCircleIcon class="group-hover:scale-125 transition-all rounded-full bg-gradient-to-r from-blue-600 to-blue-400 w-20 block group-hover:shadow-lg shadow-sm" /></p></a>
                </div>
            </div>
        </div>

    </section>
    <section class="content">
        <div class="max-w-6xl mx-auto py-10">
            <div class="image-slide ">
                <Splide :options="{ rewind:true , autoplay:true}" aria-label="My Favorite Images">
                    <SplideSlide class="" v-for="item in pageContent2">
                        <img :src="item.img" alt="Sample 1" class="w-full object-cover max-h-96 object-center">
                    </SplideSlide>
                </Splide>
            </div>
            <div class="programs max-md:p-5 py-10">
                <div class="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
                    <div class="border p-3" v-for="item,i in pageContent" :key="i">
                        <router-link :to="item.to" class="">
                            <img :src="item.img" alt="" class="h-56 object-cover w-full object-top">
                            <div class="div content" >
                                <p class="font-bold pt-5 text-2xl">{{ item.title }}</p>
                                <hr class="my-3">
                                <p class="text-slate-600 text-sm mb-3">{{item.desc}}</p>
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
            <div class="support-slide"></div>
        </div>
    </section>

</template>
<script>
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid"
export default {
    components: {
        ArrowRightCircleIcon
    },
    data() {
        return {
            pageContent:[
                {
                    title:"GETTING STARTED",
                    desc:"We are excited to have you as a member of our school community and we want to make sure that you have all the information you need to get started.",
                    to:"/schools/college/getting-started",
                    img:"/img/collegeimages/DSC_0087.jpg"
                },
                {
                    title:"CULTURAL DIVERSITY",
                    desc:"We believe that embracing cultural diversity is essential to providing a well-rounded education and preparing our students for success in an increasingly globalized world. ",
                    to:"/schools/college/cultural-diversity",
                    img:"/img/collegeimages/cultural3.jpeg"
                },
                {
                    title:"BOARDING EXPERIENCE",
                    desc:"At Kingsmead College, our boarding program is designed to provide students with a safe, supportive and stimulating environment where they can grow both academically and personally. ",
                    to:"/schools/college/boarding-experience",
                    img:"/img/collegeimages/DSC_0832.jpg"
                },
                {
                    title:"CODE OF CONDUCT",
                    desc:"At Kingsmead college, we believe that every student has the right to a safe and positive learning environment. In order to maintain this environment, we have established a Code of Conduct that all students, staff, and visitors are expected to follow.",
                    to:"/schools/college/code-of-conduct",
                    img:"/img/collegeimages/DSC_0703.jpg"
                },
                {
                    title:"PTA",
                    desc:"TThe PTA (Parent Teacher Association) is a valuable organization that plays a vital role in supporting our school community. The PTA is made up of parents, teachers, and staff who work together to enhance the education and well-being of our students.",
                    to:"/schools/college/PTA",
                    img:"/img/collegeimages/parents2.jpg"
                },
                {
                    title:"COLLEGE GALLERY",
                    desc:"Browse through our Gallery and explore the world where kids exhibit their raw talents...",
                    to:"/schools/college/gallery",
                    img:"/img/collegeimages/cultural2.jpeg"
                },
                {
                    title:"OUR TEAM",
                    desc:"Meet the Dedicated Team of Educators at Our School: Passionate, Experienced, and Committed to Student Success",
                    to:"/schools/college/team",
                    img:"/img/collegeimages/staff1.jpeg"
                },
                {
                    title:"Student Leadership",
                    desc:"Fostering Student Leadership: Empowering Tomorrow's Leaders through Education, Service, and Community Engagement",
                    to:"/schools/college/student-leadership",
                    img:"/img/collegeimages/student-leadership.jpeg"
                }
            ],
            pageContent2:[
                {
                    img:"/img/collegeimages/DSC_0087.jpg"
                },
                {
                    img:"/img/collegeimages/cultural3.jpeg"
                },
                {
                    img:"/img/collegeimages/DSC_0633.jpg"
                },
                {
                    img:"/img/collegeimages/DSC_0515.jpg"
                },
                {
                    img:"/img/collegeimages/parents2.jpg"
                },
                {
                    img:"/img/collegeimages/DSC_0029.jpg"
                },
            ],
        }
    }
}
</script>