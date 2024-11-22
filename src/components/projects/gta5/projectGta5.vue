<template>
  <div class="text-[#00A97F] bg-black h-fit">
    <div class="right-0 pt-10">
      <Lightbox
        :description="description"
        :images="images"
        heading="GTA5 Custom Server"
      />
    </div>
  </div>
</template>

<script setup>
import Lightbox from "../../UI/Lightbox.vue";

import screen1 from "../../../assets/gta5-proj/screen1.png";
import screen2 from "../../../assets/gta5-proj/screen2.png";
import screen3 from "../../../assets/gta5-proj/screen3.png";
import screen4 from "../../../assets/gta5-proj/screen4.png";
import screen5 from "../../../assets/gta5-proj/screen5.png";
import screen6 from "../../../assets/gta5-proj/screen6.png";
import screen7 from "../../../assets/gta5-proj/screen7.png";
import screen8 from "../../../assets/gta5-proj/screen8.png";
import screen9 from "../../../assets/gta5-proj/screen9.png";
import screen10 from "../../../assets/gta5-proj/screen10.png";

const images = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
];

const description =
  "The GTA 5 Custom Server project was built on top of the GTA 5 game using Vue 3. It provided players with a seamless, interactive interface within the game, enhancing their overall experience. The interface was rendered using the Chromium Embedded Framework (CEF), enabling the integration of modern web technologies directly into the game. This project involved crafting responsive and intuitive UI components that interacted dynamically with the server, delivering real-time updates and ensuring minimal disruption to gameplay. Additionally, it utilized Vue's reactive features to create a smooth and engaging user experience.";
</script>

<style lang="scss" scoped></style>
