<template >
    <div>
        <siteHeader title="Managing Partner's Message" prev-page-name="About" curr-page-name="Partner's Message"
            :img-name="headerImg" />
        <div class="page-content relative -z-30">
            <div class="bg-transparent  py-10 md:py-32">
                <div class="max-w-6xl mx-auto max-md:p-5 sm:px-10">
                    <div class="md:flex gap-5">
                        <div class="md:w-2/6 max-md:mb-6 ">
                            <div class="hover:shadow-xl group shadow-blue-400/10 sticky top-16 rounded-lg overflow-hidden">
                                <div class="mb-0 md:h-56 overflow-hidden">
                                    <img src='/img/managing_partner.jpg' alt="" class="w-full h-full object-cover md:object-top group-hover:scale-110 transition-all ease-out">
                                </div>
                                <div class="desc text-center p-3 bg-blue-100">
                                    <h3 class="font-bold mb-2">Mrs. Adeolu-Idowu Ngozi</h3>
                                    <p class="text-slate-700 text-sm">Managing Partner (Kingsmead Group of Schools)</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-4/5">
                            <div class="text-slate-600">
                                <h4>The Great Beginning</h4>
                                <div class="p-md-5 p-2 ">
                                    <p><i>
                                            <blockquote class="fw-light">"And if education is always to be conceived
                                                along the same antiquated lines of a mere knowledge, there is little to
                                                be hoped from it in the bettering of man's future. For what is the use
                                                if transmitting knowledge if the individual's total development lags
                                                behind?"</blockquote><b> Maria Montessori,<br> the famous italian
                                                physician and educator.</b>
                                        </i></p><br>
                                    <p class="mb-3">It is with a mindset to make difference, Kingsmead Schools, like a
                                        knight in a
                                        shining armour, sprang up on 1st August, 2016 to redefine quality education and
                                        set a new paradigm in the delivery of functional world-class educational
                                        services.</p>
                                    <p class="mb-3">Located at 9, Hon. N. S. Sholaja Street, off Erunwen Road, the
                                        School overlooks
                                        Awolowo Road and its surrounding features and also gives a view of scenic beauty
                                        of Nature in the neighborhood. There, standard, sublimity, skill, serenity,
                                        simplicity and most importantly, strive for excellence, find their perfect
                                        meanings in a functional union.</p>
                                    <p class="mb-3">Our pupils constitute our centrepiece and our approach is the
                                        recognition of each
                                        child's uniqueness and helping them to develop their innate skills for cognitive
                                        growth, psychomotor development, advanced emotional intelligence and
                                        consequently, self- realization. This is what underlies our adoption of
                                        differentiated teaching and learning.</p>
                                    <p class="mb-3">We are driving by a vision to be an outstanding value-based school
                                        striving for
                                        excellence and enabling our children to achieve greatness. And to inspire
                                        children to achieve the highest standard of intellectual and personal
                                        development through a stimulating and comprehensive programme is our mission.
                                    </p>
                                    <p class="mb-3">We meet the educational needs of children, aged three months and
                                        above,
                                        irrespective of their educational, national, ethnic or religious background. And
                                        aware that an unskilled scholar will apparently skew away from the path of sound
                                        scholarship, we constantly engage our educators in continual professional
                                        development. Our approach is to train our trainers until they become trainers'
                                        trainers.</p>
                                    <p class="mb-3">We run a hybrid of the Nigerian and the British curricula with our
                                        Pre-school
                                        section thriving on the Montessori Method of teaching. In our elementary and
                                        secondary sections, the roles of the teachers is supervisory. Subject teachers
                                        deploy their expertise in teaching the pupils in the overall interest of
                                        thoroughness. To do this effectively, resources for twenty-first century
                                        tutelage are made readily accessible.</p>
                                    <p class="mb-3">And it is worthy to note that we give our pupils the needed global
                                        exposure to
                                        thrive. They are frequently exposed to state-wide, national and international
                                        competitions and certifiable courses. It is our dream to welcome them as they
                                        are and later release them to society as 'global citizens', equipped to make a
                                        difference and positioned to shine.</p>
                                    <p class="mb-3">To ease the movement of our pupils to and from school, we run
                                        transport services
                                        for interested parents. Our new air-conditioned buses, trained drivers and their
                                        assistants make the journey to and from Kingsmead Schools a daily delight. We
                                        also provide lunch, after school care and basic medical services to make the
                                        package total.</p>
                                    <p class="mb-3">We have also accorded security its primacy, considering the threat
                                        to life and
                                        property currently rocking our land. Besides engaging a renowned security firm
                                        for its professional services, we monitor everything going on in every classroom
                                        and the premises with CCTV cameras. </p>
                                    <p class="mb-3">The understanding of each child is our approach and the progressive
                                        realization
                                        of their potentials is our goal.</p>
                                    <p class="italic text-md font-bold" >Kingsmead Schools... Learning is life!</p>
                                </div>

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