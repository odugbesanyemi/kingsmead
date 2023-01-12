<template>
    <div class="">
        <div class="title mb-10 relative h-56">
            <img src="../assets/images/sport8.jpeg" class="w-full h-full object-cover object-top" alt="">
            <span class="bg-white/10 backdrop-blur-sm absolute inset-0"></span>
            <div class="max-w-5xl absolute mx-auto inset-0 max-md:mx-5 ">
                <h2 class="text-7xl max-md:text-5xl text-white text-center absolute top-1/2 -translate-y-1/2"> Gallery</h2>
            </div>
        </div>
        <div class="elements max-w-5xl mx-auto p-5">
            <div class="grid md:grid-cols-3 gap-5">
                <div class="relative group" v-for="category in categories" :key="category.id">
                    <span
                        class="bg-blue-100 absolute inset-0 w-full h-full -z-10 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-300"></span>
                    <span
                        class="bg-red-100 absolute inset-0 w-full h-full -z-10 group-hover:-rotate-6 group-hover:shadow-lg transition-all duration-300"></span>
                    <span class="h-96"><img src="../assets/images/sport3.jpeg" alt=""
                            class="w-full h-full group-hover:shadow-lg transition-all duration-500 group-hover:-rotate-3"></span>
                    <span
                        class="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent inset-0 transition-all duration-500 group-hover:-rotate-3"></span>
                    <p
                        class="text-xl font-bold absolute bottom-7 ml-5 translate-y-1/2 text-white transition-all duration-500 group-hover:-rotate-3">
                        {{ category.title }}</p>
                </div>
            </div>
            <div class="footer py-20 md:w-1/2">
                <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                    aria-label="Pagination">
                    <div class="hidden sm:block">
                        <p class="text-sm text-gray-700">
                            Showing
                            {{ ' ' }}
                            <span class="font-medium">1</span>
                            {{ ' ' }}
                            to
                            {{ ' ' }}
                            <span class="font-medium">10</span>
                            {{ ' ' }}
                            of
                            {{ ' ' }}
                            <span class="font-medium">20</span>
                            {{ ' ' }}
                            results
                        </p>
                    </div>
                    <div class="flex-1 flex justify-between sm:justify-end">
                        <a href="#"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Previous </a>
                        <a href="#"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    title: "Sport Activities",
                    img: "",
                },
                {
                    id: 2,
                    title: "Cultural Activites",
                    img: "",
                },
                {
                    id: 3,
                    title: "Hostel Facilites",
                    img: "",
                },
                {
                    id: 4,
                    title: "Clubs & societies",
                    img: "",
                },
                {
                    id: 5,
                    title: "Parents Association",
                    img: "",
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>