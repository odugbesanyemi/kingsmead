<template>
  <!-- hero section -->
  <div class="relative overflow-x-hidden">
    <section class="relative">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :autoplay="{ delay: 4500 }"
        style="z-index: 10"
      >
        <swiper-slide class="relative h-full" v-for="item in slides">
          <div class="relative h-full" style="max-height: calc(100vh - 44px)">
            <div class="relative">
              <img
                :src="item.img"
                class="w-full h-72 sm:h-screen object-cover"
              />
              <span
                class="absolute bg-gradient-to-tr from-gray-900 to-blue-800/20 max-md:bg-gradient-to-t max-md:from-blue-900 max-sm:from-blue-900 max-md:to-transparent max-md:h-1/2 w-full h-full bottom-32 max-sm:top-36 md:top-0 md:mix-blend-multiply"
              ></span>
            </div>
            <span class="sm:hidden bg-gradient-to-t from-blue-"></span>
          </div>
        </swiper-slide>
      </Swiper>
      <div
        class="max-w-6xl mx-auto md:px-10 max-md:rounded-b-2xl overflow-hidden"
      >
        <div
          class="sm:absolute z-10 bottom-0 max-md:bg-blue-900 max-sm:bg-blue-900 max-md:p-3 w-7/12 max-md:w-full md:top-1/2 max-sm:text-center md:-translate-y-1/2"
        >
          <h1 class="text-4xl md:text-6xl xl:text-7xl text-white">
            Learning is not a Choice, It's a Life
          </h1>
          <div
            class="btn-group md:my-8 my-3 items-center max-sm:justify-center flex gap-4 max-md:gap-2 md:text-lg relative"
          >
            <Router-link
              draggable="false"
              to="/about"
              class="md:font-bold bg-gradient-to-t from-blue-400 to-blue-500 md:p-4 px-4 p-2 md:pr-7 rounded-full text-blue-50"
              ><i
                class="fi fi-br-route mr-2 whitespace-nowrap md:bg-blue-700 md:p-2 md:px-3 rounded-full"
              ></i>
              Get Started</Router-link
            >
            <a
              draggable="false"
              href="#tour"
              scroll-behaivour="smooth"
              class="md:font-bold bg-white rounded-full md:p-4 md:px-7 flex items-center p-2 px-4"
              ><i class="fi fi-rr-street-view mr-2"></i>Take a tour</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Video plaback section -->
    <section id="tour">
      <div class="relative bg-slate-50 min-h-5/6 py-10 group">
        <div class="title py-10 relative">
          <h2 class="md:text-5xl text-3xl text-black-700 text-center relative">
            <i class="fi fi-rr-street-view mr-2"></i> Take a tour
          </h2>
          <span
            class="bg-yellow-300 max-md:w-24 w-32 h-1 left-1/2 -translate-x-1/2 mt-4 absolute group-hover:w-10 transition-all duration-500 group-hover:bg-yellow-200"
          ></span>
        </div>
        <div class="md:max-w-7xl mx-auto lg:flex px-10 max-md:px-0">
          <div
            class="lg:w-3/4 max-lg:h-96 lg:py-16 max-lg:order-last max-lg:p-3 relative"
          >
            <video class="absolute w-full h-full top-0" controls>
              <source
                :src="videoPlaybackSource"
                type="video/mp4" height="600"
              />
              your browser does not support this video
            </video>
            <!-- <iframe class="w-full h-full rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe> -->
          </div>
          <div class="content lg:w-1/2 p-5 text-2xl text-blue-900">
            <p class="text-gray-900 lg:text-md text-lg">
              Kingsmead school was established in July, 2017 to provide
              qualitative educational opportunity for increasing number of
              primary school leavers within and outside Nigeria who have
              academic excellence as their focus.
            </p>
            <Router-link to="/about/history">
              <p
                class="text-lg gap-2 max-sm:bg-transparent max-sm:shadow-none max-sm:text-blue-900 max-sm:px-0 inline-flex rounded-sm md:rounded-full p-2 px-5 my-4 shadow-sm hover:bg-blue-400 transition-all bg-blue-500 text-white"
              >
                Read more
                <i class="fi fi-bs-interrogation flex items-center"></i>
              </p>
            </Router-link>
            <div class="grid grid-cols-2 gap-2">
              <Router-link
                to="/admissions/criteria-policy"
                class="bg-red-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-red-600 transition-all rounded"
              >
                <LightBulbIcon class="text-white w-10 h-10 mb-4" />
                <p class="text-white text-sm font-bold text-center">
                  Admission Guidlines
                </p>
              </Router-link>
              <Router-link
                to="life-at-kingsmead/pastoral-unit"
                class="bg-purple-500 flex md:border-l flex-col items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600 rounded"
              >
                <UserGroupIcon class="text-white w-10 h-10 mb-4" />
                <p class="text-white text-sm font-bold text-center">
                  Pastoral Care Unit
                </p>
              </Router-link>
              <button
                class="bg-blue-500 flex flex-col items-center justify-center p-10 max-sm:p-5 hover:blue-600 rounded"
              >
                <a
                  href="http://kingsmead-portal.tecxha.tk"
                  class="flex flex-col justify-center"
                >
                  <ArrowRightOnRectangleIcon
                    class="text-white w-10 h-10 mb-4"
                  />
                  <p class="text-white text-sm font-bold text-center">
                    Portal Login
                  </p>
                </a>
              </button>

              <Router-link
                to="/Life-at-Kingsmead/Alumni"
                class="bg-indigo-500 flex flex-col md:border-l items-center justify-center p-10 max-sm:p-5 hover:bg-purple-600 rounded"
              >
                <ChatBubbleBottomCenterIcon class="text-white w-10 h-10 mb-4" />
                <p class="text-white text-sm font-bold text-center">
                  Join Our community
                </p>
              </Router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- partners section -->
    <section class="bg-blue-50 group">
      <div class="title pt-10 max-md:pb-10 relative">
        <h2 class="text-5xl text-red-700 text-center max-md:text-3xl">
          Accreditations
        </h2>
        <span
          class="bg-black max-md:w-24 w-32 h-1 left-1/2 -translate-x-1/2 mt-4 absolute group-hover:w-10 transition-all duration-500 group-hover:bg-red-200"
        ></span>
      </div>
      <div class="md:max-w-7xl mx-auto md:py-28 py-10 max-md:px-5 px-10">
        <!-- <h2 class="text-5xl text-blue-800 mb-14">Accredited By:</h2> -->
        <div
          class="grid md:grid-cols-4 max-md:grid-cols-2 group mix-blend-multiply justify-center"
        >
          <div
            class="flex-col flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/British_Council_logo.svg.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/cambridge.jpg" alt="" />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/Coat_of_arms_of_Nigeria.svg.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/IELTS_logo.svg.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img
              src="../assets/logos/lagos-state.webp"
              alt=""
              class="object-cover"
            />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/neco.jfif" alt="" class="object-cover" />
          </div>
          <div
            class="flex items-center justify-center p-5 border border-black/10 border-dashed hover:bg-white transition-all"
          >
            <img src="../assets/logos/waec.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial section -->
    <div class="bg-indigo-500 relative">
      <testimonial class="text-blue-50" />
    </div>
    <!-- contact section -->
    <section>
      <div class="bg-indigo-700 group">
        <div class="title pt-10 max-md:pb-10 relative">
          <h2 class="text-5xl text-blue-50 text-center max-md:text-3xl">
            Contact us
          </h2>
          <span
            class="bg-white max-md:w-24 w-32 h-1 left-1/2 -translate-x-1/2 mt-4 absolute group-hover:w-10 transition-all duration-500 group-hover:bg-yellow-200"
          ></span>
        </div>
        <div class="md:max-w-7xl mx-auto md:p-20 md:flex gap-5">
          <div class="grid md:grid-cols-2 max-md:p-4md: gap-2 p-5">
            <div
              class="rounded-xl bg-white md:p-10 p-5 hover:outline outline-green-600 text-center transition-all flex-col flex items-center justify-center"
            >
              <MapIcon class="w-10 h-10 mb-4 mx-auto text-blue-500" />
              <p class="text-gray-500">
                9, Hon. N. S. Sholaja Street, off Erunwen Road,
              </p>
            </div>
            <div
              class="rounded-xl bg-white md:p-10 p-5 hover:outline outline-green-600 text-center flex-col flex items-center justify-center transition-all"
            >
              <ChatBubbleBottomCenterIcon
                class="w-10 h-10 mb-4 mx-auto text-green-500"
              />
              <p class="text-gray-500 whitespace-wrap">
                contact @kingsmead schools.org.ng
              </p>
              <!-- <p class="text-gray-500"></p> -->
            </div>
            <div
              class="rounded-xl bg-white md:p-10 p-5 hover:outline outline-green-600 text-center transition-all flex-col flex items-center justify-center"
            >
              <PhoneIcon class="w-10 h-10 mb-4 mx-auto text-yellow-500" />
              <p class="text-gray-500 tracking-wide">+234 906 048 3704</p>
            </div>
            <div
              class="rounded-xl bg-white md:p-10 p-5 hover:outline outline-green-600 text-center transition-all flex-col flex items-center justify-center"
            >
              <ChatBubbleBottomCenterIcon
                class="w-10 h-10 mb-4 mx-auto text-purple-500"
              />
              <p class="text-gray-500">Write to us</p>
              <Router-link
                class="underline p-3 bg-text-green-500 rounded-full my-2"
                to="/about/contact-us"
                >Click here</Router-link
              >
            </div>
          </div>
          <div class="">
            <div
              class="grayscale h-full rounded-xl max-md:rounded-b-none overflow-hidden"
            >
              <img
                src="../assets/images/DSC_0515.jpg"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <span
      @click="isPopup = !isPopup"
      class="cursor-pointer toggleBtn fixed top-1/2 right-0 z-10 -translate-y-1/2 bg-blue-500 text-blue-50 text-3xl p-4 rounded-l-2xl"
      ><i class="fi fi-rr-bell-ring"></i
    ></span>
    <transition name="popup">
      <div
        class="fixed inset-0 top-0 left-0 h-screen w-full z-30 flex items-center justify-center"
        v-if="isPopup"
      >
        <span
          @click="isPopup = !isPopup"
          class="bg-gray-700/70 w-full h-full fixed z-0"
        >
          <p class="top-10 relative mx-auto w-full text-center text-white">
            Click to dismiss
          </p>
        </span>
        <div class="z-10 md:w-6/12 mx-auto p-3">
          <router-link to="/admissions/registration-form">
            <img class="h-full border-2" src="/img/notification.jpeg" alt="" />
          </router-link>
        </div>
      </div>
    </transition>
    <transition name="slide_up">
      <div
        class="newsletter fixed md:bottom-10 max-md:bottom-0 z-10"
        v-if="newsletterNotify"
      >
        <div
          class="md:w-10/12 max-md:scale-90 md:border-2 md:border-white shadow-blue-700 flex max-md:flex-col gap-5 bg-blue-900 relative rounded-2xl max-md:text-center mx-auto shadow-2xl"
          :class="{ 'p-5': newsletterNotify }"
        >
          <span
            class="text-3xl -top-8 bg-white p-3 rounded-full right-5 absolute px-5"
            @click="newsletterNotify = !newsletterNotify"
            >X</span
          >
          <transition name="slide_down">
            <img
              src="../assets/email.png"
              class="w-56 relative max-md:mx-auto"
              alt=""
              v-if="newsletterNotify"
            />
          </transition>
          <transition name="slide_up">
            <div class="space-y-2" v-if="newsletterNotify">
              <h2 class="text-6xl text-white">Join our Newsletter</h2>
              <p class="text-white">
                Become Notified of our news and events. don't miss any update!!
              </p>
              <!-- <span class="text-gray-500">Sign up today</span> -->
              <div
                class="form flex mt-5 rounded-full overflow-hidden p-2 bg-white"
              >
                <input
                  type="email"
                  name=""
                  v-model="subscriber_email"
                  placeholder="email address"
                  id=""
                  class="w-full focus:border-0 focus:outline-none focus:ring-0 border-0"
                />
                <button
                  class="bg-indigo-500 px-5 text-white rounded-full"
                  @click="setSubscriber"
                >
                  Continue
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <loadingComponent v-if="isLoading"/>
    <successPrompt
      title="Success"
      description="Thank you for joining our Newsletter."
      @close="successPrompt = !successPrompt"
      v-if="successPrompt"
    />
    <failedPrompt title="Failed" :description="errorMsg" @close="failedPrompt = !failedPrompt" v-if="failedPrompt"/>

  </div>
</template>
<script>
import popup from "../components/popup.vue";
import axios from "axios";
import successPrompt from "../components/successPrompt.vue";
import failedPrompt from "../components/failedPrompt.vue"
import {
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  ChatBubbleBottomCenterIcon,
  MapIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import testimonial from "../components/testimonial.vue";
import loadingComponent from "../components/loadingComponent.vue";
// import 'swiper/css/effect'
export default {
  components: {
    Swiper,
    popup,
    SwiperSlide,
    LightBulbIcon,
    UserGroupIcon,
    ArrowRightOnRectangleIcon,
    ChatBubbleBottomCenterIcon,
    MapIcon,
    PhoneIcon,
    ArrowRightIcon,
    EffectFade,
    testimonial,
    successPrompt,
    loadingComponent,
    failedPrompt,
  },
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      slides: [
        {
          img: "img/kingsmead_front-page.jpg",
        },
        {
          img: "img/homepage_1.JPG",
        },
        {
          img: "img/homepage_2.jpg",
        },
        {
          img: "img/homepage_3.jpg",
        },
        {
          img: "img/homepage_4.jpg",
        },
        {
          img: "img/homepage_5.jpg",
        },
        {
          img: "img/homepage_6.jpg",
        },
        {
          img: "img/homepage_7.jpg",
        },
        {
          img: "img/homepage_8.JPG",
        },
        {
          img: "img/homepage_9.JPG",
        },
        {
          img: "img/homepage_10.JPG",
        },
        {
          img: "img/homepage_11.JPG",
        },
        {
          img: "img/homepage_12.jpeg",
        },
        {
          img: "img/homepage_13.jpeg",
        },
      ],
      isPopup: true,
      newsletterNotify: false,
      subscriber_email: "",
      successPrompt: false,
      isLoading:false,
        failedPrompt:false,
        errorMsg:"",
    };
  },
  methods: {
    async setSubscriber() {
    if(!this.subscriber_email) return;
    this.isLoading = true
      try {
        if (!this.subscriber_email) {
          this.errorMsg = "This email has been Registered, we will contact you soon."
          this.isLoading = false
        } else {
          await axios.post(
            `${import.meta.env.VITE_SERVER_API_URL}/subscriber/new`,
            {
              email: this.subscriber_email,
            }
          );
          this.newsletterNotify = false
          this.successPrompt = true;
          this.isLoading = false;
        }
      } catch (err) {
        this.errorMsg = err.response.data
        this.failedPrompt = true
        this.isLoading = false
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.newsletterNotify = true;
    }, 5000);
  },
  computed:{
    videoPlaybackSource(){
      return `${import.meta.env.VITE_SERVER_API_URL}/files/kingsmead-tour-video.mp4`
    }
  }
};
</script>
<style scoped>
.walk-enter-active,
.walk-leave-active {
  transition: opacity 2.5s ease;
}
.walk-enter-from {
  transition: 2.5s ease;
  transform: translateY(0%);
}
.walk-leave-to {
  transition: 2.5s ease;
  transform: translateX(-50%);
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 2.5s ease;
  opacity: 1;
}
.popup-enter-from,
.popup-leave-to {
  transform: translateX(150%);
}
.slide_up-enter-active,
.slide_up-leave-active,
.slide_down-enter-active,
.slide_down-leave-active {
  transition: all 1.5s ease;
  opacity: 1;
}
.slide_up-enter-from,
.slide_up-leave-to {
  transform: translateY(50%);
}
.slide_down-enter-from,
.slide_down-leave-to {
  transform: translateY(-100%);
}
</style>
