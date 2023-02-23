<template >
    <div class="md:pt-14 pt-10 max-md:px-5 px-10 relative overflow-hidden">
        <div class="md:max-w-6xl mx-auto ">
            <div class="title flex justify-between">
                <h2 class="md:text-5xl text-3xl  text-slate-700">What Parents are saying</h2>
                <div class="arrow-controls flex items-center gap-2">
                    <button @click="pagination.currPage--" :disabled="pagination.currPage <= 1"
                        class="bg-gradient-to-t from-white to-gray-200 border-b-4 border-slate-500 rounded-full shadow focus:shadow-none h-14 w-12 focus:border-b-0 focus:border-t-4 focus:from-gray-200 focus:to-white">
                        <ChevronDoubleLeftIcon class="w-12 md:h-12 p-2 text-slate-600" />
                    </button>
                    <button @click="pagination.currPage++" :disabled="pagination.currPage >= 4"
                        class="bg-gradient-to-t from-white to-gray-200 border-b-4 border-slate-500 rounded-full shadow focus:shadow-none h-14 w-12 focus:border-0 focus:border-t-4 focus:from-gray-200 focus:to-white">
                        <ChevronDoubleRightIcon class="w-12 md:h-12 p-2 text-slate-600" />
                    </button>
                </div>
            </div>
            <transition name="fade">
                <div class="body mt-10 relative" v-if="testimonials">
                    <div class="rounded-t-2xl bg-white md:p-10 p-5 pb-12 flex max-md:flex-col gap-5 items-center justify-between md:h-96" draggable=true  @drag.prevent="swipePage()">
                        <div class="user flex flex-col items-center justify-center lg:px-10 ">
                            <span class="flex">
                                <StarIcon class="w-10 text-orange-500" v-for="i in testimonials[pagination.currPage-1].starred" />
                            </span>
                            <img src="../assets/profile_image.png" alt=""
                                class="shadow-xl max-md:w-20 max-md:h-20 h-36 w-36 object-cover outline outline-orange-500 rounded-full mt-5">
                            <p class="text-xl font-semibold text-slate-700 mt-5 text-center whitespace-nowrap">{{ testimonials[pagination.currPage-1].t_name }}</p>
                            <p class="text-xs">{{ testimonials[pagination.currPage-1].t_class }}</p>
                        </div>
                        <div class="content relative">
                            <!-- <div>
                                <h2 class="text-9xl absolute md:left-20 max-md:-top-10 text-slate-200">"</h2>
                            </div> -->
                            <div class="max-md:px-2">
                                <p class="text-sm md:text-xl text-center md:leading-normal tracking-wide font-semibold text-blue-900 transition-all" >{{ testimonials[pagination.currPage-1].t_content }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="pagination absolute left-1/2 -translate-x-1/2 md:bottom-10 bottom-2 opacity-50 hover:opacity-100 transition-all ">
                        <span class="flex gap-4 ">
                            <input type="radio" name="pagination" v-for="i in testimonials.length" :value="i" v-model="pagination.currPage" class="md:w-8 md:h-8 border-1 border-blue-500">
                        </span>
                    </div>
                </div>
            
            </transition>
        </div>

</div></template>
<script>

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, StarIcon } from '@heroicons/vue/24/solid';
export default {
    components: { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, StarIcon },
    data(){
        return{
            pagination:{
                currPage:1,
            },
            testimonials:[
                {
                    starred:5,
                    t_img:"",
                    t_name:"Mr. Oramulu",
                    t_class:"",
                    t_content:"Kingsmead school is one of its kind in Erunwen, Ikorodu, Lagos. It's environment is very conducive for learning, sports and hospitable for children's upbringing. the school is well equipped to meet challenges of 21st century world. The teachers are qualified and are willing to impact the knowledge to the children",
                },
                {
                    starred:5,
                    t_img:"",
                    t_name:"Otunba Moses Oluwole Paul",
                    t_class:"",
                    t_content:"My experience with this great citadel of learning dated back to the year 2017/2019 when my kids completed their WAEC/NECO examinations in flying colors. it was a geat discovery to us and a fantastic foundational experience for my kids who are currently rounding up their university degree programmes in July 2023.",
                },
                {
                    starred:5,
                    t_img:"",
                    t_name:"Mr. Oni",
                    t_class:"",
                    t_content:"The staff is amazing, dedicated, professional and caring. My kids are always happy to go back to school and full of smiles and joy when i go visit or pick them up for the mid term or holiday. The school has made my job as a parent easier, i will always be grateful to Kingsmead School.",
                },
                {
                    starred:5,
                    t_img:"",
                    t_name:"Dr. Oniyire",
                    t_class:"",
                    t_content:"I have known Kingsmead College for 2 years as a parent. my ward joined the school in basic 7 not as an independent boy with a pampered background as the last born of the family which wasn't bearable for the school at all. But today i can vividly attest to the fact that he's more matured, responsible, organized, accountable, independent and more knowledgable. The discipline is of the old land mark which is commendable.",
                },
            ]
        }
    },
    computed:{
    },
    methods:{
        swipePage(e){
            console.log(e)
        }
    }
}
</script>
<style >
    .fade-enter-active,.fade-leave-active{
        transition:opacity 0.5 ease;
    }
    .fade-enter-from,.fade-leave-to{
        transition:  opacity 0 ease;
    }
</style>