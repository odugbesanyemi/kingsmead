<template>
  <div class="">
    <div class="title md:mb-10 mb-5 relative h-56">
      <img
        src="../assets/images/sport8.jpeg"
        class="w-full h-full object-cover object-top"
        alt=""
      />
      <span class="bg-white/10 backdrop-blur-sm absolute inset-0"></span>
      <div
        class="absolute top-1/2 -translate-1/2 left-1/2 -translate-x-1/2 text-slate-700"
      >
        <h3 class="text-7xl max-md:text-5xl text-center font-bold">Gallery</h3>
      </div>
    </div>
    <div class="elements max-w-5xl mx-auto p-5">
      <div class="title py-4 flex max-md:flex-col gap-4 justify-between">
        <h3 class="text-3xl uppercase">Browse Categories</h3>
      </div>
      <div v-if="isLoading" class="mx-auto">
        <img src="../assets/Loading_icon.gif" class="mx-auto" />
      </div>
      <div
        class="grid md:grid-cols-3 gap-5 my-10"
        v-else-if="categories.length"
      >
        <div
          class="relative group rounded-lg overflow-hidden cursor-pointer border hover:shadow-lg"
          v-for="category in categories"
          :key="category.id"
          @click="
            $router.push({
              path: `/gallery/categories/${category.id}`,
              query: { category: `${category.category_name}` },
            })
          "
        >
          <img
            :src="category.category_image"
            alt=""
            class="h-56 w-full object-cover top-0"
          />
          <p class="text-white py-2 px-4 bg-indigo-600 block">
            {{ category.category_name }}
          </p>
        </div>
      </div>
      <div class="flex items-center h-44" v-else>
        <div class="text-center w-full">
          <img
            src="../assets/broken-image.png"
            alt=""
            class="w-16 mx-auto my-5"
          />
          <p class="text-2xl font-medium">Nothing to see here.</p>
          <p class="text-xs">Kindly check back later</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Bars2Icon, FunnelIcon } from "@heroicons/vue/24/solid";
export default {
  components: { FunnelIcon, Bars2Icon },
  data() {
    return {
      categories: [],
      isLoading:false,
    };
  },
  methods: {
    async getGalleryCategory() {
        this.isLoading=true;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL}/gallery/categories`
        );
        this.categories = response.data;
        this.isLoading = false;
      } catch (err) {
        // toast error
        this.isLoading=false;
      }
    },
  },
  mounted() {
    this.getGalleryCategory();
  },
};
</script>
<style lang=""></style>
