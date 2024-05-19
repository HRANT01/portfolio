<template>
  <div class="bg-black min-h-screen flex flex-col items-center justify-center">
    <div v-motion-pop-visible class="text-3xl text-[#00A97F] text-white font-extrabold font-mono text-center mt-10 mb-5 animate__animated animate__slideInUp lg:text-5xl">
      Projects
    </div>
    <div class="w-[80%] m-auto mt-8">
      <project-card icon-name="workFlowProjIcon" proj-name="Workflow" :used-stack="workFLowStack"></project-card>
      <project-card icon-name="JVS" proj-name="JVS" position-type="right" :used-stack="JVSStack"></project-card>
      <project-card icon-name="vmw" proj-name="VMWare" :used-stack="VMWStack" ></project-card>
      <project-card icon-name="Trello" proj-name="Trello" position-type="right" :used-stack="TrelloStack" ></project-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "../UI/ProjectCard.vue";

const workFLowStack = ['HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'TypeScript', 'Vue3', 'Webpack', 'Jest', 'Vue-Router']
const JVSStack = ['HTML', 'CSS', 'TailwindCSS', 'Vue2', 'Nuxt2', 'TypeScript', 'Webpack', 'JavaScript', 'Vuex', 'Jest', 'VueUse', 'Vue-Router' ]
const VMWStack = ['HTML', 'CSS', 'TailwindCSS', 'Nuxt3', 'TypeScript', 'Webpack', 'JavaScript', 'Eslint', 'Sass', 'Pinia', 'Vue-Router' ]
const TrelloStack = ['HTML', 'CSS', 'TailwindCSS', 'Vue3', 'Vite', 'JavaScript', 'Eslint', 'Vuex', 'Vue-Router']

</script>

<style lang="scss" scoped>

</style>