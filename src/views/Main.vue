<template>
  <div class="h-full overflow-y-scroll" ref="scrollSection">
    <ScrollProgress :scrollContainer="scrollSection" />
    <div class="w-full mainBlock fixed overflow-hidden z-30">
      <NavBar :active-tab="activeTab" :menu-items="menuItems" @select-menu-item="scrollToSection($event)" />
    </div>
    <div id="About" ref="aboutSection" class="about h-auto">
      <About @lets-work="scrollToSection" />
    </div>
    <div id="Toolset" ref="toolsetSection" class="toolset bg-black min-h-[45em] h-auto">
      <Toolset />
    </div>
    <div id="Experience" ref="experienceSection" class="experience h-auto bg-black">
      <Experience />
    </div>
    <div id="Projects" ref="projectsSection" class="projects h-auto">
      <Projects />
    </div>
    <div id="Contact" ref="contactSection" class="contact min-h-full h-full">
      <Contact />
    </div>
    <div class="fixed top-1/3 transform -translate-y-1/2">
      <SocialMedias />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, watch, onMounted } from 'vue';
import NavBar from "../components/UI/NavBar.vue";
import About from "../components/about/About.vue";
import Toolset from "../components/toolset/Toolset.vue";
import Projects from "../components/projects/Projects.vue";
import Experience from "../components/experience/Experience.vue";
import Contact from "../components/contact/Contact.vue";
import { useIntersectionObserver } from '@vueuse/core';
import SocialMedias from "../components/UI/SocialMedias.vue";
import ScrollProgress from "../components/UI/ScrollProgress.vue";

const activeTab = ref<string>('About');
const menuItems = ['About', 'Toolset', 'Experience', 'Projects', 'Contact'];

const aboutSection = ref<HTMLElement | null>(null);
const toolsetSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const experienceSection = ref<HTMLElement | null>(null);
const contactSection = ref<HTMLElement | null>(null);
const scrollSection = ref<HTMLElement | null>(null);



const scrollToSection = async (sectionName: string) => {
  await nextTick(); // Ensure DOM updates are complete before scrolling
  let sectionRef: HTMLElement | null = null;
  switch (sectionName.toLowerCase()) {
    case 'about':
      sectionRef = aboutSection.value;
      break;
    case 'toolset':
      sectionRef = toolsetSection.value;
      break;
    case 'projects':
      sectionRef = projectsSection.value;
      break;
    case 'experience':
      sectionRef = experienceSection.value;
      break;
    case 'contact':
      sectionRef = contactSection.value;
      break;
    default:
      break;
  }
  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: 'smooth' });
  }
};

const observers = {
  About: useIntersectionObserver(aboutSection, handleIntersection, { threshold: 0.5 }),
  Toolset: useIntersectionObserver(toolsetSection, handleIntersection, { threshold: 0.5 }),
  Experience: useIntersectionObserver(experienceSection, handleIntersection, { threshold: 0.2 }),
  Projects: useIntersectionObserver(projectsSection, handleIntersection, { threshold: 0.3 }),
  Contact: useIntersectionObserver(contactSection, handleIntersection, { threshold: 0.5 })
};

function handleIntersection(entries: IntersectionObserverEntry[]) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.id;
      activeTab.value = sectionName;
    }
  });
}
</script>

<style lang="scss" scoped>
.body {
  background-color: black;
}
</style>
