import { createWebHistory, createRouter} from "vue-router";
import Home from "../pages/HomePage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import SustenabilityPage from "../pages/SustenabilityPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/servicios",
			name: "services",
			component: ServicesPage,
		},
		{
			path: "/sostenibilidad",
			name: "sostenibilidad",
			component: SustenabilityPage,
		}
	]
})

export default router;