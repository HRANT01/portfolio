<template>
  <div class="text-[#00A97F] bg-black h-fit">
    <div class=" right-0 pt-10 ">
      <Lightbox :description="description" :images="images"  heading="Trello Test Board"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Lightbox from "../../UI/Lightbox.vue";

import Screenshot_1 from '../../../assets/Trello-proj/1.jpeg'
import Screenshot_2 from '../../../assets/Trello-proj/2.jpeg'
import Screenshot_3 from '../../../assets/Trello-proj/3.jpeg'
import Screenshot_4 from '../../../assets/Trello-proj/4.jpeg'
import Screenshot_5 from '../../../assets/Trello-proj/5.jpeg'
import Screenshot_6 from '../../../assets/Trello-proj/6.jpeg'


const images = [Screenshot_1, Screenshot_2, Screenshot_3, Screenshot_4, Screenshot_5, Screenshot_6]

const description = '\n' +
    'This one is the test analog of trello board with ability of registration and login. You can find it deployed on gitHub pages in my account'


</script>


<style lang="scss" scoped>

</style>