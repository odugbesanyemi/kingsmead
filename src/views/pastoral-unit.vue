<template >
    <div>
        <siteHeader title="Pastoral Care Unit" prev-page-name="Life at Kingsmead" curr-page-name="Pastoral Unit"
            :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <div class="bg-transparent  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class="md:flex gap-5">
                        <!-- <div class="md:w-1/5 max-md:mb-6">
                            <div class="hover:shadow-xl group shadow-blue-400/10 sticky top-0">
                                <div class="mb-0 h-56 grayscale group-hover:grayscale-0">
                                    <img src='../assets/images/principal-image.jpg' alt=""
                                        class="w-full h-full object-cover">
                                </div>
                                <div class="desc text-center p-4 bg-blue-100">
                                    <h3 class="font-bold">Mr. Ene Raphael</h3>
                                    <p class="text-slate-400">Vice Principal ( Pastoral )</p>
                                </div>
                            </div>
                        </div> -->
                        <div class="">
                            <div class="text-xl">
                                <p>The Pastoral Care Unit of Kingsmead College is an all-inclusive emotional
                                    intelligence programme
                                    which is designed to identify, nurture and transform learners to excel in academics,
                                    character
                                    and morality. Our focus here is to inspire, guide and support the students to trust
                                    in their God
                                    and believe in the latent gem of greatness in them.</p>
                                <p class="mt-7">Under the auspices of Life Skills Education, we inculcate in the
                                    learners eternal
                                    values to boost their self-esteem. We prepare them to develop a stable mental health
                                    attitude
                                    towards life. They are therefore vaccinated with courage, determination,
                                    persistence, faith,
                                    poise and hard work to rule and dominate the ever-challenging world. They are
                                    disciplined to
                                    destroy the fear of any type and the phobia of learning. We build in them
                                    unflinching self-image
                                    in a distressed and competitive world. Hence, our students enjoy schooling in a
                                    friendly, caring
                                    and loving environment where"school is a place to be" and a home to grow in.</p>
                            </div>
                        </div>
                    </div>

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

        }
    },
}
</script>
<style>

</style>
