<template>
  <div >
    <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-4 max-w-[80%] m-auto pb-20 " >
      <div v-for="(skill, index) in skills" v-if="!props.isShowSkills" :key="skill"
           :title="skill" class="skill-item bg-[#00A97F] text-center rounded h-[5rem]  flex items-center justify-center"
           v-motion
           :initial="{ opacity: 0, transform: 'translateY(0)' }"
           :visible="{opacity: 1, transform: 'translateY(0)'}"
           :delay="index * 20"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="text-xs font-bold flex flex-col justify-center items-center">
            <icon :icon-name="skill" />
            <span class="text-[1.2em]  mt-2"> {{skill}} </span>
          </div>
        </div>
      </div>
      <div v-for="(tool, index) in tools" v-else :key="tool"
           :title="tool" class="tool-item bg-[#00A97F] text-center rounded h-[5rem] flex items-center justify-center"
           v-motion
           :initial="{ opacity: 0, transform: 'translateY(0)' }"
           :visible="{opacity: 1, transform: 'translateY(0)'}"
           :delay="index * 20"
           >
        <div class="flex flex-col items-center justify-center">
          <div class="text-xs font-bold flex flex-col justify-center items-center">
            <icon :icon-name="tool" />
            <span class="text-[1.2em] mt-2"> {{tool}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../Icon.vue";
import { MotionDirective as motion } from '@vueuse/motion';

const props = defineProps<{
  isShowSkills: boolean,
}>()

const skills = ref(['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'SASS', 'LESS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'Vuetify', 'Socket IO', 'Jest', 'vueUse', 'Pinia', 'Vuex', 'React', 'Redux'])
const tools = ref(['Git', 'GitHub', 'GitLub', 'npm', 'yarn', 'BitBucket', 'CI/CD', 'WebStorm', 'Notion', 'Webpack', 'Vite', 'ESLint', 'Postman', 'Swagger'])

// Registering the v-motion directive
const myDirective = motion;
</script>

<style scoped>
.skill-item,
.tool-item {
  transition: transform 0.3s ease;
}

.skill-item:hover,
.tool-item:hover {
  transform: scale(1.1);
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
