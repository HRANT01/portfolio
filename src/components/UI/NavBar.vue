<template>
  <div class="navbar-container">
    <div :class="{'hidden-navbar': hideNavbar}" class="navbar w-[80%] md:pt-[1em] transition-transform duration-300 p-3 m-auto mt-3 rounded-3xl" :style="{ transform: navbarTransform }">
      <div class="flex justify-between rounded-lg relative w-full m-auto">
        <!-- Your tabs -->
        <div
            v-for="(item, index) in props.menuItems"
            :key="item"
            class="tab cursor-pointer flex items-center justify-center text-xs text-[#00A97F] rounded-3xl md:text-[1em]"
            :class="{'active': item === props.activeTab}"
            @click="setActiveTab(item, index)"
            ref="tabRefs"
        >
          {{ item }}
        </div>

        <!-- Indicator -->
        <div
            ref="indicatorRef"
            class="indicator bg-green-500/25 rounded flex justify-center m-auto "
            :style="{
              left: indicatorLeft,
              width: indicatorWidth,
              height: '100%',
              padding: '0 10px', // Add padding here
              boxSizing: 'border-box', // Ensure padding is included in width calculation
            }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  menuItems: string[];
  activeTab: string;
}>();

const emit = defineEmits<{
  (e: 'selectMenuItem', item: string): void;
}>()

const setActiveTab = (item: string, index: number) => {
  emit('selectMenuItem', item);
};

// Ref to tabs and indicator
const tabRefs = ref<HTMLElement[]>([]);
const indicatorRef = ref<HTMLElement | null>(null);
const lastScrollPosition = ref(0);
const hideNavbar = ref(false);
const navbarTransform = ref('translateY(0)');

// Function to handle scroll event
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  hideNavbar.value = currentScrollPosition > lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
  navbarTransform.value = hideNavbar.value ? 'translateY(-100%)' : 'translateY(0)';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Computed property to calculate the left position of the indicator
const indicatorLeft = computed(() => {
  if (!indicatorRef.value) return 0;
  const activeIndex = props.menuItems.findIndex(item => item === props.activeTab);
  let leftOffset = 0;
  for (let i = 0; i < activeIndex; i++) {
    leftOffset += (tabRefs.value[i]?.offsetWidth ?? 0) + 5; // Consider the margin added to each tab
  }
  return leftOffset + 'px';
});

// Computed property to calculate the width of the indicator
const indicatorWidth = computed(() => {
  if (!indicatorRef.value) return '0px';
  const activeIndex = props.menuItems.findIndex(item => item === props.activeTab);
  const tabWidth = tabRefs.value[activeIndex]?.offsetWidth ?? 0;
  return tabWidth + 'px';
});
</script>

<style scoped>
.navbar {
  background-color: hsla(143, 21%, 21%, 1);
  position: relative; /* Ensure indicator positioning relative to navbar */
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
  bottom: 0;
  left: 0; /* Ensure the indicator starts from the left edge of the navbar */
  background-color: rgba(0, 169, 127, 0.25); /* Adjust the color and opacity as needed */
  transition: width 0.3s ease, left 0.3s ease; /* Transition width and left changes */
}

.tab {
  flex: 1;
  margin-right: 5px; /* Adjust this value to set the desired gap between tabs */
}

.tab:last-child {
  margin-right: 0; /* Remove margin from the last tab */
}
</style>
