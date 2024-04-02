<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)
// TODO - Pass Helloworld a prop via router.
// TODO - Restrict the sizing of the router view so there are sidebars
</script>
<template>
	<div>
		<router-link
			to="/HelloWorld"
			:class="{ disabled: currentRouteName == 'Hello World' }"
		>
			HelloWorld
		</router-link>
	</div>
	<div>
		<router-link 
			to="/" 
			:class="{ disabled: currentRouteName == 'Home' }"
		>
			Home
		</router-link>
	</div>
</template>
