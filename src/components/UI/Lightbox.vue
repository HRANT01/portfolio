<template>
  <div class="w-full">
    <div class="md:flex ">
      <div class="text-justify p-7 md:w-1/2">
        <div class="text-7xl md:text-4xl">
          {{ props.heading }}
        </div>
        <p class=" mt-10">
          {{ props.description }}
        </p>

      </div>
      <div class="md:w-2/3 grid  md:grid-cols-1 lg:grid-cols-2 gap-4 md:mt-28 md:pr-5 pb-0 p-7">
        <div v-for="image in firstArray">
          <img :src="image" alt="-">
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-4 p-7">
      <div v-for="image in secondArray">
        <img :src="image" alt="-">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {computed} from "vue";

const props = defineProps<{
  images: []
  heading: string
  description: string
}>()

const firstArray = computed(() => props.images.slice(0, 2));
const secondArray = computed(() => props.images.slice(2));

// Creating the second array with all other items


</script>

<style lang="scss" scoped>

</style>