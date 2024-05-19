<template>
  <label class="switch">
    <input class="cb" type="checkbox" v-model="isChecked" @change="toggleCheckbox" />
    <span class="toggle">
      <span class="left">Skills</span>
      <span class="right">Tools</span>
    </span>
  </label>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const isChecked = ref(false);

const emit = defineEmits<{
  (e: 'change-switch', value: boolean): void
}>()

const toggleCheckbox = () => {
  emit('change-switch', isChecked.value)
}

</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 10em;
  height: 5em;
  user-select: none;
}

/* Hide default HTML checkbox */
.switch .cb {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.toggle {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 0.1em;
  transition: 0.4s;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;

}

.toggle > .left {
  position: absolute;
  display: flex;
  width: 50%;
  height: 88%;
  background-color: #2e2e2e;
  color: rgb(206, 206, 206);
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  transform-origin: right;
  transform: rotateX(10deg);
  transform-style: preserve-3d;
  transition: all 150ms;
}

.left::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(206, 206, 206);
  transform-origin: center left;
  transform: rotateY(90deg);
}

.left::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(112, 112, 112);
  transform-origin: center bottom;
  transform: rotateX(90deg);
}

.toggle > .right {
  position: absolute;
  display: flex;
  width: 50%;
  height: 88%;
  background-color: #2e2e2e;
  color: rgb(206, 206, 206);
  right: 1px;
  bottom: 0;
  align-items: center;
  justify-content: center;
  transform-origin: left;
  transform: rotateX(10deg) rotateY(-45deg);
  transform-style: preserve-3d;
  transition: all 150ms;
}

.right::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(206, 206, 206);
  transform-origin: center right;
  transform: rotateY(-90deg);
}

.right::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(112, 112, 112);
  transform-origin: center bottom;
  transform: rotateX(90deg);
}

.switch input:not(:checked) + .toggle > .left {
  background-color: #00A97F;
  color: black;
}

.switch input:checked + .toggle > .left {
  transform: rotateX(10deg) rotateY(45deg);
}

.switch input:checked + .toggle > .right {
  transform: rotateX(10deg) rotateY(0deg);
  background-color: #00A97F;
  color: black;
}

@media screen and (min-width: 320px) and (max-width: 450px) {
  .switch {
    font-size: .6em;
    position: relative;
    display: inline-block;
    width: 10em;
    height: 5em;
    user-select: none;
  }
}

</style>
