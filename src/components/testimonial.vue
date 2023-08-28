<template >
    <div class="max-md:px-5 px-10 p-5 relative overflow-hidden">
        <div class="md:max-w-6xl mx-auto ">
            <!-- <Splide>
                <SplideSlide>1</SplideSlide>
                <SplideSlide>2</SplideSlide>
                <SplideSlide>3</SplideSlide>
            </Splide> -->
            <Splide :has-track="false">
                <SplideTrack>
                    <SplideSlide v-for="slide in testimonials" :options="{pagination:false}">
                        <div class="flex max-md:flex-col w-full  p-10 md:px-20 gap-10 items-center overflow-hidden">
                            <div class="img p-5  md:skew-x-12 scale-150">
                                <!-- <img :src="slide.t_img" class="h-full w-1/2" alt=""> -->
                                <i class="fi fi-rr-quote-right flex items-center text-6xl text-black outline-white"></i>
                            </div>
                            <div class="content">
                                <h2>{{ slide.t_name }}</h2>
                                <p>{{ slide.t_content }}</p>
                            </div>
                        </div>
                    </SplideSlide>
                </SplideTrack>
                <div class="splide__arrows flex gap-2 text-white" type="button">
                    <button class="bg-indigo-700 px-3 p-2 splide__arrow--prev"><i class="fi fi-rr-arrow-left"></i></button>
                    <button class="bg-indigo-700 px-3 p-2 splide__arrow--next"><i class="fi fi-rr-arrow-right"></i></button>
                </div>
            </Splide>
        </div>

    </div>
</template>
<script>

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, StarIcon } from '@heroicons/vue/24/solid';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
export default {
    components: { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, StarIcon, Splide, SplideSlide, SplideTrack },
    data() {
        return {
            pagination: {
                currPage: 1,
            },
            testimonials: [
                {
                    starred: 5,
                    t_img: "",
                    t_name: "Mr. Oramulu",
                    t_class: "",
                    t_content: "Kingsmead school is one of its kind in Erunwen, Ikorodu, Lagos. It's environment is very conducive for learning, sports and hospitable for children's upbringing. the school is well equipped to meet challenges of 21st century world. The teachers are qualified and are willing to impact the knowledge to the children",
                },
                {
                    starred: 5,
                    t_img: "",
                    t_name: "Otunba Moses Oluwole Paul",
                    t_class: "",
                    t_content: "My experience with this great citadel of learning dated back to the year 2017/2019 when my kids completed their WAEC/NECO examinations in flying colors. it was a geat discovery to us and a fantastic foundational experience for my kids who are currently rounding up their university degree programmes in July 2023.",
                },
                {
                    starred: 5,
                    t_img: "",
                    t_name: "Mr. Oni",
                    t_class: "",
                    t_content: "The staff is amazing, dedicated, professional and caring. My kids are always happy to go back to school and full of smiles and joy when i go visit or pick them up for the mid term or holiday. The school has made my job as a parent easier, i will always be grateful to Kingsmead School.",
                },
                {
                    starred: 5,
                    t_img: "",
                    t_name: "Dr. Oniyire",
                    t_class: "",
                    t_content: "I have known Kingsmead College for 2 years as a parent. my ward joined the school in basic 7 not as an independent boy with a pampered background as the last born of the family which wasn't bearable for the school at all. But today i can vividly attest to the fact that he's more matured, responsible, organized, accountable, independent and more knowledgable. The discipline is of the old land mark which is commendable.",
                },
            ]
        }
    },
    computed: {
    },
    methods: {
        swipePage(e) {
            console.log(e)
        }
    }
}
</script>
<style >
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5 ease;
}

.fade-enter-from,
.fade-leave-to {
    transition: opacity 0 ease;
}
</style>