<template >
    <div>
        <siteHeader title="Student Life" prev-page-name="Life at Kingsmead" curr-page-name="Student Life" :img-name="headerImg" />
        <div class="page-content">
            <div class="bg-blue-50 p-3 py-10 md:py-24">
                <div class="max-w-6xl mx-auto">
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="bg-white p-2" v-for="item in activities">
                            <img :src="item.img" alt="" class="w-full h-64 object-cover rounded object-top">
                            <div class="px-5">
                                <h2 class="text-blue-800 text-3xl mt-4">{{ item.title }}</h2>
                                <p class="desc py-4 text-slate-600 " v-html="item.desc"></p>
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="max-w-6xl mx-auto my-4 py-10">
                    <div class="item">
                        <img src="" alt="" class="">
                        <h2 class="text-blue-800 text-4xl max-md:text-3xl">Hostel Life at Kingsmead Schools</h2>
                        <div class="desc  mt-5 py-3 text-slate-600">
                            <p class="mb-2">Hostel life at Kingsmead Schools provides students with a supportive and safe living environment that promotes personal growth and development.</p>
                            <p class="mb-2">Our hostels are fully furnished and equipped with all the necessary amenities, including internet access, laundry facilities, and recreational areas.</p>
                            <p class="mb-2">Residents of our hostels are supervised by a team of dedicated and caring staff members who are available to provide guidance and support whenever needed.</p>
                            <p class="mb-2">In addition to ensuring the safety and well-being of our students, our staff members also help to create a sense of community and belonging within the hostel.</p>
                            <p class="mb-2">Hostel life at Kingsmead Schools offers numerous opportunities for students to get involved in a variety of activities and events. These may include sports, clubs, cultural events, and more.</p>
                            <p class="mb-2">Our goal is to provide a well-rounded and enriching experience for all of our hostel residents.</p>
                        </div>
                        <p class="py-3 text-slate-600">We believe that hostel life is an important part of the overall educational experience at Kingsmead Schools and we strive to create a welcoming and supportive environment for all of our students. If you have any questions about hostel life at Kingsmead Schools, please don't hesitate to reach out to us.</p>
                    </div>
                </div>
                <div class="max-w-6xl mx-auto">
                </div>
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
            activities: [
                {
                    id: 1,
                    img: "/img/sport7.jpeg",
                    title: "Sports",
                    desc: "<p> Kingsmead Schools offers a range of sports teams for students to join, including football, basketball, soccer, and more.</p> <p class='py-2'> Our teams have a long history of success and our coaches and athletes work hard to represent our school with pride.</p>"
                },
                {
                    id: 2,
                    img: "/img/sport1.jpeg",
                    title: "Clubs",
                    desc: "<p class='mb-3'> We have a wide range of clubs for students to get involved in, including academic clubs like the science club and math club, as well as creative clubs like the art club and music club.</p> <p> There's something for everyone! </p>"
                },
                {
                    id: 3,
                    img: "/img/cultural4.jpeg",
                    title: "Cultural Events",
                    desc: "<p class='mb-3'> Kingsmead Schools offers a range of sports teams for students to join, including football, basketball, soccer, and more.</p> <p class='mb-3'> Our teams have a long history of success and our coaches and athletes work hard to represent our school with pride. </p>"
                }
            ]
        }
    },
}
</script>

<style>

</style>

