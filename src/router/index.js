import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../components/AddProject.vue'
import EditProject from "../components/EditProject.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addProject",
    name: "addProject",
    component: AddProject,
  },
  {
    path: "/editProject/:id",
    name: "editProject",
    component: EditProject,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
