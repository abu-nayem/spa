import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../pages/home.vue';
import categorylist from '../pages/category/index.vue';
import createcategory from '../pages/category/create.vue';
const routes=new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component: Home,
			name:'home',
		},
		{
			path:'/category',
			component:categorylist,
			name:'category-list'
		},
		{
			path:'/categpry/create',
			component:createcategory,
			name:'category-create',
		}
	]
});
export default routes;