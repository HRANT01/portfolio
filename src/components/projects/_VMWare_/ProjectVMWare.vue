<template>
  <div class="text-[#00A97F] bg-black h-fit">
    <div class=" right-0 pt-10 ">
      <Lightbox :description="description" :images="images"  heading="VMWare"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Lightbox from "../../UI/Lightbox.vue";

import screen_1 from "../../../assets/VMWare-proj/1.jpg";
import screen_2 from "../../../assets/VMWare-proj/2.png";
import screen_3 from "../../../assets/VMWare-proj/3.jpg";
import screen_4 from "../../../assets/VMWare-proj/4.jpg";
import screen_5 from "../../../assets/VMWare-proj/5.jpg";
import screen_6 from "../../../assets/VMWare-proj/6.png";
import screen_7 from "../../../assets/VMWare-proj/7.png";
import screen_8 from "../../../assets/VMWare-proj/8.png";
import screen_9 from "../../../assets/VMWare-proj/9.jpg";
import screen_10 from "../../../assets/VMWare-proj/10.jpg";

const images = [screen_1, screen_2, screen_3, screen_4, screen_5, screen_6, screen_7, screen_8, screen_9, screen_10]

const description = '\n' +
    'VMware, founded in 1998, has been a pioneering force in virtualization technology, revolutionizing the way businesses manage their IT infrastructure. With its headquarters in Palo Alto, California, VMware has established itself as a global leader in cloud computing and virtualization solutions. VMware\'s journey began with a vision to empower organizations to unleash the full potential of their IT resources through virtualization. From its inception, VMware has been committed to innovation, continuously pushing the boundaries of what\'s possible in the realm of virtualization technology. '


</script>


<style lang="scss" scoped>

</style>