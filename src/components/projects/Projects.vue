<template>
  <div class="bg-black min-h-screen flex flex-col items-center justify-center">
    <div
      v-motion-pop-visible
      class="text-3xl text-white font-extrabold font-mono text-center mt-10 mb-5 animate__animated animate__slideInUp lg:text-5xl"
    >
      Projects
    </div>
    <!-- Use grid layout with different column settings based on screen size -->
    <div class="w-[80%] m-auto mt-8 grid grid-cols-1 sm:grid-cols-5 gap-3">
      <!-- Middle card at the top -->
      <div class="hover-card-wrapper sm:col-start-3 sm:col-end-4">
        <HoverCard icon-name="GTA" projName="GTA5" />
      </div>
      <!-- Cards on the second row to form "V" diagonals -->
      <div
        class="hover-card-wrapper sm:col-start-2 sm:col-end-3 sm:row-start-2"
      >
        <HoverCard icon-name="workFlowProjIcon" projName="Workflow" />
      </div>
      <div
        class="hover-card-wrapper sm:col-start-4 sm:col-end-5 sm:row-start-2"
      >
        <HoverCard icon-name="vmw" projName="VMWare" />
      </div>
      <!-- Cards on the third row to complete the "V" -->
      <div
        class="hover-card-wrapper sm:col-start-1 sm:col-end-2 sm:row-start-3"
      >
        <HoverCard icon-name="Trello" projName="Trello" />
      </div>
      <div
        class="hover-card-wrapper sm:col-start-5 sm:col-end-6 sm:row-start-3"
      >
        <HoverCard icon-name="JVS" projName="JVS" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HoverCard from "../UI/HoverCard.vue";
import ProjectCard from "../UI/ProjectCard.vue";

const workFLowStack = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "TypeScript",
  "Vue3",
  "Webpack",
  "Jest",
  "Vue-Router",
];
const JVSStack = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Vue2",
  "Nuxt2",
  "TypeScript",
  "Webpack",
  "JavaScript",
  "Vuex",
  "Jest",
  "VueUse",
  "Vue-Router",
];
const VMWStack = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Nuxt3",
  "TypeScript",
  "Webpack",
  "JavaScript",
  "Eslint",
  "Sass",
  "Pinia",
  "Vue-Router",
];
const TrelloStack = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Vue3",
  "Vite",
  "JavaScript",
  "Eslint",
  "Vuex",
  "Vue-Router",
];
</script>

<style scoped></style>
