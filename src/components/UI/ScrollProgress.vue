<template>
  <div class="header z-20">
    <div class="progress-container">
      <div class="progress-bar z-20" ref="progressBar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  scrollContainer: any;
}>();

const progressBar = ref(null);

const progressIndicator = () => {
  if (props.scrollContainer) {
    const winScroll = props.scrollContainer.scrollTop;
    const height =
      props.scrollContainer.scrollHeight - props.scrollContainer.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.value.style.width = scrolled + "%";
  }
};

watch(
  () => props.scrollContainer,
  (newVal) => {
    if (newVal) {
      newVal.addEventListener("scroll", progressIndicator);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (props.scrollContainer) {
    props.scrollContainer.removeEventListener("scroll", progressIndicator);
  }
});
</script>

<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
  font-family: Tahoma;
}

.header {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-color: transparent;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: #00a97f;
  width: 0%;
}
</style>
