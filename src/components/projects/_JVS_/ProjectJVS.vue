<template>
  <div class="text-[#00A97F] bg-black h-fit">
    <div class=" right-0 pt-10 ">
      <Lightbox :description="description" :images="images"  heading="JVS"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Lightbox from "../../UI/Lightbox.vue";

import screen_1 from "../../../assets/JVS-proj/1.png";
import screen_2 from "../../../assets/JVS-proj/2.png";
import screen_3 from "../../../assets/JVS-proj/3.png";
import screen_4 from "../../../assets/JVS-proj/4.png";
import screen_6 from "../../../assets/JVS-proj/6.png";
import screen_7 from "../../../assets/JVS-proj/7.png";
import screen_8 from "../../../assets/JVS-proj/8.png";
import screen_9 from "../../../assets/JVS-proj/9.png";
import screen_10 from "../../../assets/JVS-proj/10.png";
import screen_11 from "../../../assets/JVS-proj/11.png";
import screen_12 from "../../../assets/JVS-proj/12.png";
import screen_13 from "../../../assets/JVS-proj/13.png";
import screen_14 from "../../../assets/JVS-proj/14.png";
import screen_15 from "../../../assets/JVS-proj/15.png";

const images = [screen_1, screen_2, screen_3, screen_4, screen_6, screen_7, screen_8, screen_9, screen_10, screen_11, screen_12, screen_13, screen_14, screen_15]

const description = 'Jan Van Sundert is 50 years old and has been an integral part of the West Brabant region since 1969. Located in Etten-Leur, where grandfather and grandmother Van Sundert laid the foundation for a healthy family business. There are now more than fifty employees, several generations have worked within the company and the showroom with 5500 m2 has grown to become the largest in the Benelux. '


</script>


<style lang="scss" scoped>

</style>