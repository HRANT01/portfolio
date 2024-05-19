<template>
  <div class="bg-black  pt-20 h-full  ">
    <div class="w-full flex mb-10">
      <div class="m-auto w-fit">
        <Switch @change-switch="changeActiveSection"/>
      </div>
    </div>
    <SkillsAndToolset :is-show-skills="activeSectionValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SkillsAndToolset from "../UI/skillsAndTools/SkillsAndToolset.vue";
import Switch from "../UI/Switch.vue";

const activeSectionValue = ref<boolean | null>(false)

const changeActiveSection = (val: boolean) => {
  activeSectionValue.value = !activeSectionValue.value
}


</script>

<style lang="scss" scoped>

</style>