<template>
	<div class="h-screen flex justify-center items-center ">
		<div class="text-center space-y-3">
			<h3 class="text-7xl text-red-500">
				404
			</h3>
			<p class="text-md">Page not found</p>
			<button @click="$router.go(-1)" class="flex items-center gap-3"><Icon icon="ep:back" /> go back</button>
		</div>
	</div>
</template>

<script type="">
	import {Icon} from "@iconify/vue"
	export default{
		components:{Icon,}
	}
</script>