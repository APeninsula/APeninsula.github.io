import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const HelloWorld = () => import('./components/HelloWorld.vue')
const Home = () => import('./views/Home.vue')

const routes: RouteRecordRaw[] = [
	{
		path: '/helloworld',
		name: 'Hello World',
		component: HelloWorld
	},
	{
		path: '/',
		name: 'Home',
		component: Home
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router
