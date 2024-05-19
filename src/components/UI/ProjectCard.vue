<template>
  <div v-if="!props.positionType || props.positionType === 'left'" class="flex justify-between w-[80%] m-auto pb-10 ">
    <div v-motion-pop-visible class="card basis-1/2">
      <icon :icon-name="props.iconName"/>
      <div v-if="props.projName" >{{ props.projName.toUpperCase() }}</div>
      <div class="overlay"></div>
      <router-link class="card-btn"  :to="`/project-${props.projName.toLowerCase()}`" target="_blank">More</router-link>
    </div>
    <div v-motion-pop-visible class="text-[#00A97F]  basis-1/2 w-full ">
      <div class="ml-[5%]">
        <h3 class="text-2xl mb-2 text-white">Used Stack</h3>
        <div class="flex flex-wrap mb-4">
          <span v-for="teck in props.usedStack" class="badge-wrapper">
            <Badge>{{ teck }}</Badge>
          </span>
        </div>
      </div>

    </div>
  </div>

  <div v-if="props.positionType === 'right'" class="flex justify-between w-[80%] m-auto pb-10 ">
    <div v-motion-pop-visible class="text-[#00A97F]  basis-1/2 w-full ">
      <h2 class="text-2xl mb-2 text-white">Used Stack</h2>

      <div class="flex flex-wrap">
          <span v-for="teck in props.usedStack" class="badge-wrapper">
            <Badge>{{ teck }}</Badge>
          </span>
      </div>
    </div>
    <div v-motion-pop-visible class="card  basis-1/2">
      <icon :icon-name="props.iconName"/>
      <div v-if="props.projName">{{ props.projName.toUpperCase() }}</div>
      <div class="overlay"></div>
      <router-link class="card-btn"  :to="`/project-${props.projName.toLowerCase()}`" target="_blank">More</router-link>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Icon from "./Icon.vue";
import Badge from "./Badge.vue";



const props = defineProps<{
  iconName: string
  projName: string
  positionType?: 'left' | 'right'
  usedStack: string[]
  link?: string
}>()





</script>

<style scoped>
.card {
  position: relative;
  width: 350px;
  height: 250px;
  background-color: #00A97F;
  border-radius: 10px;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.heading {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.para {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  line-height: 1.4;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover .overlay {
  opacity: 1;
  pointer-events: auto;
}

.card .card-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover .card-btn {
  opacity: 1;
  scale: 1;
}

.card .card-btn:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn:active {
  scale: 0.95;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #00b961 0%, rgba(0, 185, 97, 0.8) 100%);
  transition: transform 0.5s ease;
}

.card:hover .overlay::after {
  transform: translate(-50%, -50%) scale(2);
}


</style>