<template>
  <div>
    <div class="max-w-[80%] text-[#00A97F] text-justify mt-7 mb-10">
      <h3>
        {{ props.header }}
      </h3>

      <p>{{props.description}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  header: string
  description: string
}>()

</script>

<style lang="scss" scoped>

</style>