<template>
  <div class="bg-black flex flex-col h-full 2xl:w-[90%] m-auto lg:h-[100vh]">
    <div class="m-auto lg:">
      <div class="flex flex-col justify-center lg:flex lg:flex-row ">
        <div class="w-[50%] h-[50%] m-auto mt-[5%] lg:mt-[6%] lg:m-auto lg:ml-[5%] 2xl:mt-[10%] " v-motion-pop-visible >
          <img src="../../assets/avatar3.webp" class="lg:w-[50%] lg:m-auto lg:mb-[3%] lg:min-w-[40%] mt-7 2xl:w-[70%]" >
        </div>
        <div class="lg:flex-row lg:m-auto mt-3 mb-3 "  >
        <p class="text-3xl text-[#00A97F] font-extrabold font-mono text-center animate__animated animate__slideInUp lg:text-left lg:mb-5 lg:mt-5 lg:text-5xl">I'm Hrant</p>
        <p class="m-auto w-[80%] text-2xl text-[#00A97F] font-bold font-mono text-center animate__animated animate__slideInUp lg:text-left lg:m-0 lg:text-3xl">The Front-End Magician You Were Looking For</p>
        </div>
      </div>
    </div>

    <div class=" text-justify text-[#00A97F] 2xl:mt-[4%] 2xl:mb-[4%] ">
      <p class="max-w-[80%] m-auto pb-2 animate__animated animate__slideInUp delay-500">
        Hey there! I'm Hrant, a passionate front-end developer dedicated to transforming ideas into captivating digital experiences. From crafting clean, efficient code to bringing designs to life, I thrive on the creative challenge of building user-friendly websites and apps.
      </p>
      <p class="max-w-[80%] m-auto pb-2 animate__animated animate__slideInUp delay-800">
        Staying at the forefront of technology trends is my priority, ensuring that I deliver innovative solutions that resonate with users. Collaboration is at the heart of my process—I love working with others to turn concepts into reality.
      </p>
      <p class="max-w-[80%] m-auto animate__animated animate__slideInUp delay-1100">
        Beyond coding, you'll often find me exploring new design ideas or shooting hoops at the basketball court. These diverse interests fuel my creativity and keep me inspired.
        Let's collaborate and bring your digital vision to life!
      </p>

    </div>
    <div class="m-auto mt-5 mb-5 z-0 relative">
      <custom-button @lets-work="letsWork"></custom-button>
    </div>

  </div>

</template>

<script setup lang="ts">
import CustomButton  from "../UI/CustomButton.vue";

const emit = defineEmits<{
  (e: 'lets-work', item: string): void;
}>()
const letsWork = () => {
  emit('lets-work', 'contact')
}

</script>

<style lang="scss" scoped>
/* Adjust the sliding animation without changing size */
@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate__slideInUp {
  animation: slideInUp 1s ease;
}
</style>
