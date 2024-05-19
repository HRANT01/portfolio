import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import ProjectWorkflow from "../components/projects/_wokflow_/ProjectWorkflow.vue";
import ProjectJVS from "../components/projects/_JVS_/ProjectJVS.vue";
import ProjectVMWare from "../components/projects/_VMWare_/ProjectVMWare.vue";
import ProjectTrello from "../components/projects/_Trello_/ProjectTrello.vue";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/portfolio/project-workflow',
    component: ProjectWorkflow
  },
  {
    path: '/portfolio/project-JVS',
    component: ProjectJVS
  },
  {
    path: '/portfolio/project-VMWare',
    component: ProjectVMWare
  },
  {
    path: '/portfolio/project-Trello',
    component: ProjectTrello
  }
];

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
});

export default router;
