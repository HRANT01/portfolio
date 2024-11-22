<template>
  <div class="navbar-container">
    <div
      :class="{ 'hidden-navbar': hideNavbar }"
      class="navbar w-[80%] md:pt-[1em] transition-transform duration-300 p-3 m-auto mt-3 rounded-3xl"
      :style="{ transform: navbarTransform }"
    >
      <div class="flex justify-between rounded-lg relative w-full m-auto">
        <!-- Tabs -->
        <div
          v-for="(item, index) in props.menuItems"
          :key="item"
          class="tab cursor-pointer flex items-center justify-center text-xs text-[#00A97F] rounded-3xl md:text-[1em]"
          :class="{ active: item === props.activeTab }"
          @click="setActiveTab(item)"
          ref="tabRefs"
        >
          {{ item }}
        </div>

        <!-- Indicator -->
        <div
          ref="indicatorRef"
          class="indicator bg-green-500/25 rounded flex justify-center m-auto"
          :style="{
            left: indicatorLeft,
            width: indicatorWidth,
            height: '150%',
            padding: '0 10px', // Add padding to both sides
            boxSizing: 'border-box', // Ensure padding is included in width calculation
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  menuItems: string[];
  activeTab: string;
}>();

const emit = defineEmits<{
  (e: "selectMenuItem", item: string): void;
}>();

const setActiveTab = (item: string) => {
  emit("selectMenuItem", item);
};

// Refs for tabs and indicator
const tabRefs = ref<HTMLElement[]>([]);
const indicatorRef = ref<HTMLElement | null>(null);
const lastScrollPosition = ref(0);
const hideNavbar = ref(false);
const navbarTransform = ref("translateY(0)");

// Handle scroll event to hide/show navbar
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  hideNavbar.value = currentScrollPosition > lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
  navbarTransform.value = hideNavbar.value
    ? "translateY(-100%)"
    : "translateY(0)";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Capture all tab elements
  tabRefs.value = Array.from(document.querySelectorAll(".tab"));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Calculate the left offset for the indicator, centering it
const indicatorLeft = computed(() => {
  const activeIndex = props.menuItems.findIndex(
    (item) => item === props.activeTab
  );
  let leftOffset = 0;
  for (let i = 0; i < activeIndex; i++) {
    leftOffset += (tabRefs.value[i]?.offsetWidth ?? 0) + 5; // Add margin between tabs
  }
  const activeTabWidth = tabRefs.value[activeIndex]?.offsetWidth ?? 0;
  const indicatorWidth =
    (tabRefs.value[activeIndex]?.scrollWidth ?? 0) / 2 + 20; // Include padding in width and divide by 2
  // Adjust the leftOffset by centering the indicator based on divided width
  return leftOffset + (activeTabWidth - indicatorWidth) / 2 + "px";
});

// Calculate the width of the indicator, dividing it by 2 and adding padding
const indicatorWidth = computed(() => {
  const activeIndex = props.menuItems.findIndex(
    (item) => item === props.activeTab
  );
  const textWidth = (tabRefs.value[activeIndex]?.scrollWidth ?? 0) / 2;
  const padding = 20; // Padding on each side
  return textWidth + padding + "px"; // Width based on text size divided by 2 with padding
});
</script>

<style scoped>
.navbar {
  background-color: hsla(143, 21%, 21%, 1);
  position: relative;
}

.navbar-container {
  z-index: 9999;
}

.hidden-navbar {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 169, 127, 0.25);
  transition: width 0.3s ease, left 0.3s ease;
}

.tab {
  flex: 1;
  margin-right: 5px;
}

.tab:last-child {
  margin-right: 0;
}
</style>
