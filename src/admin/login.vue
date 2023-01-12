<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600"></p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" v-model="user.password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  <transition>
    <errorComponent @close-error="errorStatus = !errorStatus" :class="{'absolute bottom-0 bg-orange-200/30 transition-all':errorStatus,'-left-full bottom-0 absolute bg-red-50 transition-all ':!errorStatus}" class="transition-all absolute duration-700" :error="errorStatus"  />
  </transition>
</template>
  
<script>
import { LockClosedIcon } from '@heroicons/vue/24/solid'
import errorComponent from "./components/error.vue"
import cookie from 'js-cookie'
import axios from 'axios'
export default {
  components: {
    LockClosedIcon, errorComponent
  },
  data() {
    return {
      errorStatus: "",
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      try {
        await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/login`, this.user)
          .then(result => {
            // we will expect a token for which we will save to cookies
            cookie.set('jwt', result.data, { expires: 1 })
            // we can now tell the user that they have successfully logged in
            this.$router.push({path:"/admin/dashboard"})
          }).catch(err => {
            this.errorStatus = err.response.data.message
          })
      } catch {
        console.log('something went wrong!')
      }
    }
  },
  beforeMounted() {
    this.isloggedIn()
  }
}
</script>

<style>

</style>