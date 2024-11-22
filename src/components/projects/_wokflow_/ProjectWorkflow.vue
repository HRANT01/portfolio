<template>
  <div class="text-[#00A97F] bg-black h-fit">
    <div class="right-0 pt-10">
      <Lightbox
        :description="description"
        :images="images"
        heading="Workflow"
      />
    </div>
  </div>
</template>

<script setup>
import Lightbox from "../../UI/Lightbox.vue";

import Screenshot_1 from "../../../assets/workflow-proj/Screenshot_1.png";
import Screenshot_2 from "../../../assets/workflow-proj/Screenshot_2.png";
import Screenshot_3 from "../../../assets/workflow-proj/Screenshot_3.png";
import Screenshot_4 from "../../../assets/workflow-proj/Screenshot_4.png";
import Screenshot_5 from "../../../assets/workflow-proj/Screenshot_5.png";
import Screenshot_6 from "../../../assets/workflow-proj/Screenshot_6.png";
import Screenshot_7 from "../../../assets/workflow-proj/Screenshot_7.png";
import Screenshot_8 from "../../../assets/workflow-proj/Screenshot_8.png";
import Screenshot_9 from "../../../assets/workflow-proj/Screenshot_9.png";
import Screenshot_10 from "../../../assets/workflow-proj/Screenshot_10.png";

const images = [
  Screenshot_1,
  Screenshot_2,
  Screenshot_3,
  Screenshot_4,
  Screenshot_5,
  Screenshot_6,
  Screenshot_7,
  Screenshot_8,
  Screenshot_9,
  Screenshot_10,
];

const description =
  "Workflow is a kitchen installing platform made for the Netherland company. The aim of the project is to\n" +
  "        digitalize the installation flow to ensure that the kitchens are installed efficiently and effectively. Through\n" +
  "        the system clients are able to hire a mechanic, see his available days/hours, create an order, track the flow of\n" +
  "        their order, see generated reports and so on. It consists of web admin panel (intended for clients and company\n" +
  "        admins) and mobile app (intended for mechanics).";
</script>

<style lang="scss" scoped></style>
