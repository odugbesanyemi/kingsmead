<template >
    <div>
        <siteHeader title="Principal's Message" prev-page-name="About" curr-page-name="Principal's Message"
            :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <div class="bg-transparent  py-20 md:py-32">
                <div class="max-w-7xl mx-auto max-md:p-5 sm:px-10">
                    <div class="md:flex gap-5">
                        <div class="md:w-1/5 max-md:mb-6">
                            <div class="hover:shadow-xl group shadow-blue-400/10 sticky top-0">
                                <div class="mb-0 h-56 ">
                                    <img src='../assets/images/principal-image.jpeg' alt=""
                                        class="w-full h-full object-cover object-top">
                                </div>
                                <div class="desc text-center p-4 bg-blue-100">
                                    <h3 class="font-bold mb-1">Mr. Oveno Robinson</h3>
                                    <p class="text-slate-700 text-sm">Principal (Kingsmead Group of Schools)</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-4/5">
                            <div class="text-slate-600">
                                <p class="pb-3">Every great achievement is traceable to a dream. In a society where
                                    education has largely been stripped off its true essence and reduced to mere
                                    acquisition of knowledge in order to pass examinations, by hook or by crook, there
                                    is a loud cry for a change. Several well-intentioned individuals and groups have
                                    responded to the call to challenge the despicable order and set a new paradigm and
                                    truthfully, their noble efforts are commendable. However, the cost of acquiring such
                                    an education is prohibitive. For some others, the end-results of such efforts are
                                    lop-sided, often educating the mind, but leaving the heart to be shaped by a
                                    confused, morally bankrupt society. Also largely neglected is the psychomotor
                                    development of the child. This dearth of schools with a clear vision and consuming
                                    passion to transform admitted students into change makers before returning them to
                                    society at a very affordable cost is what has summarily led ti the establishment of
                                    Kingsmead College.</p>
                                <p class="pb-3">As noted by Jean Piaget, ' The goal of education is not to increase the
                                    amount of knowledge but to create the possibilities for a child to invent and
                                    discover, to create men who are capable of doing new things'. Our approach at
                                    Kingsmead College is student-centric: we are consumed with a flaming passion to make
                                    a difference in the lives of our students, bearing in mind their potentials and
                                    peculiarities. The ultimate goal is that very child should excel in their area of
                                    strength and then gain a mastery of what they struggle with.</p>
                                <p>We do not promise a Utopia, neither do we pretend that it will be a walk in the park,
                                    knowing that to every prize, there is a price and to every successful enterprise, a
                                    sacrifice. What we do assure is the progressive realization of every child's
                                    potential, irrespective of creed, class or colour, in a safe, serene, supportive and
                                    sightly environment.</p>
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