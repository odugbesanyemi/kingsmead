<template>
    <div class="accordion">
        <!-- accordion child -->
        <ul class="parent">
            <!-- title -->

            <li class="child-element mb-1 relative" v-for="item in data" :key="item.id">
                <!-- anything goes here -->
                <div class="title bg-white text-2xl font-bold flex flex-row justify-between items-center px-3"
                    @click="item.collapsed = !item.collapsed">
                    <p class="inline-block p-4">{{ item.title }}</p>
                    <PlusIcon class="h-8 w-8 mr-5 "
                        :class="{ 'rotate-45 transition-all ease-in-out duration-500': item.collapsed, 'transition-all duration-700': !collapsed }" />
                </div>
                <div class="content bg-white/40 p-5 transition-all "
                    :class="{ 'transition-all ease-in-out duration-500': item.collapsed, 'transition-all duration-700': !collapsed }"
                    v-show="item.collapsed">
                    <component :is="item.body"></component>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { PlusIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
export default {
    components: { PlusIcon, ChevronDownIcon },
    props: {
        data: Array, 
    },
    data() {
        return {
            items: []
        }
    }
}
</script>

<style scoped>

</style>