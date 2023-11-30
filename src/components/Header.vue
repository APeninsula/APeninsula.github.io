<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

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
	<div>
		<div class="text-3xl fw-300">Header</div>
		<div class="text-2xl op50">
			Current Time: {{ currentTime.toLocaleTimeString() }}
		</div>
	</div>
	<div><router-link to="/HelloWorld">HelloWorld</router-link></div>
	<div><router-link to="/">Home</router-link></div>
</template>
