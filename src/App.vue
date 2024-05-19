<template>
  <div class="main bg-black h-screen">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>


.main {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover; /* This ensures the background covers the entire container */
}

</style>
