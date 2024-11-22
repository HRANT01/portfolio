<template>
  <div ref="cursor" class="custom-cursor"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const cursor = ref<HTMLElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
  if (cursor.value) {
    const { clientX: x, clientY: y } = event;
    cursor.value.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`; // Center the cursor effect
  }
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 300px; /* Larger size for background effect */
  height: 300px; /* Larger size for background effect */
  background-color: rgba(
    0,
    169,
    127,
    0.3
  ); /* Very transparent green background */
  border-radius: 50%; /* Make it a circle */
  pointer-events: none; /* Prevent interference with page interactions */
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  z-index: 9999;
  opacity: 1; /* Subtle presence */
  filter: blur(50px); /* Softens the edges */
}

/* Optional hover effect */
.custom-cursor.hover {
  opacity: 1; /* Slightly more visible on hover */
}
</style>
