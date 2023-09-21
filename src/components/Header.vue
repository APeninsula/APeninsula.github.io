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
		<h2>Header</h2>
		<h3>Current Time: {{ currentTime.toLocaleTimeString() }}</h3>
	</div>
</template>
