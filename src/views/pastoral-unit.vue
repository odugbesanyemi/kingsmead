<template >
    <div>
        <siteHeader title="Pastoral Care Unit" prev-page-name="Life at Kingsmead" curr-page-name="Pastoral Unit"
            :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <div class="bg-transparent  py-20 md:py-32">
                <div class="max-w-7xl mx-auto ">
                    <div class="md:flex gap-10">
                        <div class="md:w-2/5 max-md:mb-6">
                            <div class="hover:shadow-xl group shadow-blue-400/10 sticky top-0">
                                <div class="mb-0 h-96  group-hover:grayscale-0">
                                    <img src='../assets/images/DSC_0767.jpg' alt="" class="w-full h-full object-cover object-top">
                                </div>

                                <p class="p-3 font-bold bg-blue-900 text-white">Our Team is comprised of:</p>
                                <ul class="text-blue-900 font-bold">
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">Vice Principal (Pastoral)</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">The Year's Tutors</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">The Class Managers</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">Student's Representatives (elected Prefects)</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">The Counsellor</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">The School Doctor and Nurse</li>
                                    <li class="p-3 bg-blue-50 border-b-blue-900/10 border-b">The Hostel Management</li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:w-3/5 px-5">
                            <div class="text-lg text-slate-600 leading-loose">
                                <p class="pb-3">We have a comprehensive care programme of activities which ensures that no learner is ignored in the multitude of students. We are conscious of the fact that ' every child can learn at a different pace '. We are also cognizant of the truth that every child is unique.</p>
                                <p class="pb-3">Hence, there are caregivers at every point of contact in the college. The Year Tutors are readily available to attend to the student's cognitive needs. Students also receive support from the class managers who stand as substitute parents in the academic block.</p>
                                <p class="pb-3">The counsellor is another cord in the chain of caregivers whose core concern is to inspire a psychologically, socially and academically sound personality in every student.</p>
                                <p class="pb-3">The medical team is always accessible to our learners whose mental and physical health is the priority of the team.</p>
                                <p class="pb-3">The boarding house is another home away from home because of the all-inclusive pastoral activities of the pastoral care team which sees to it that every child enjoys schooling and learning at Kingsmead College.</p>
                                <p class="pb-3">The vitality of a complete and enterprising person depends on moral fibres and strength. Thus, academic excellence is incomplete without a strong moral foundation upon which intelligence and excellence are built. Our core values: </p>
                                <ul class="list-disc  columns-2 md:w-1/2">
                                    <li class="p-3 mx-6 list-item ">Integrity</li>
                                    <li class="p-3 mx-6 list-item ">Diligence</li>
                                    <li class="p-3 mx-6 list-item ">Discipline</li>
                                    <li class="p-3 mx-6 list-item ">Committement</li>
                                    <li class="p-3 mx-6 list-item ">Teamwork</li>
                                </ul>
                                <p class="pb-3 leading-loose">are direct derivatives of our uncompromising moral principles which we cherish above other considerations. For us, morality - the fear and love of God - is the imperishable elixir of a sterling character. We believe in God first with the concomitant love of fellow beings, respect for elders and peers, care for the needy, charity and patriotism. We believe in peace among all people and the universal fatherhood of God. Our morality is our charter and our character.</p>
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
