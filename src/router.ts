import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const HelloWorld = import('./components/HelloWorld.vue')

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Hello World',
		component: HelloWorld,
		meta: { buttonName: 'Hello World' }
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router
