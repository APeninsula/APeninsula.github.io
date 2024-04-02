<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import Navbar from './Navbar.vue'

// For Future: Use this Header as an on hover dropdown for navigation
// Have a smol timestamp in the corner because its fun

const currentTime = ref(new Date())
const updateTime = () => {
	currentTime.value = new Date()
}
const updateTimeInterval = setInterval(updateTime, 1000)
onBeforeUnmount(() => {
	clearInterval(updateTimeInterval)
})
</script>

<template>
	<div class="fixed w-full top-0 left-0 text-left pl-12 pt-6">
		<div>
			<div class="text-3xl fw-300">Header</div>
			<div class="text-2xl op50">
				Current Time: {{ currentTime.toLocaleTimeString() }}
			</div>
		</div>
		<Navbar />
	</div>
</template>
