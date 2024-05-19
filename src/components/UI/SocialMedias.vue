<template>
  <div class="redes w-10 text-xl">
    <a class="telegram bg-[#00A97F]" href="https://t.me/SomeOriginalUserName" target="_blank">
      <font-awesome-icon :icon="telegramIcon" />
    </a>

    <a class="linkedin bg-[#00A97F]" href="https://www.linkedin.com/in/hrantaleksanyan/" target="_blank">
      <font-awesome-icon :icon="linkedinIcon" />
    </a>

    <a class="whatsapp bg-[#00A97F]" href="https://wa.me/37477672607" target="_blank">
      <font-awesome-icon :icon="whatsappIcon" />
    </a>

    <a class="github bg-[#00A97F]" href="https://github.com/HRANT01" target="_blank">
      <font-awesome-icon :icon="githubIcon" />
    </a>


  </div>

  <div class="redes">
    <a href="../../../public/CV/HrantAleksanyanCV.pdf" download="HrantAleksanyanCV.pdf" class="bg-[#00A97F] mt-7 flex flex-col items-center justify-center ">
      <font-awesome-icon :icon="faFileDownload" class="mt-2 text-2xl" />
      <span class="text-black font-bold ">PDF</span>
    </a>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {faTelegram, faLinkedin, faWhatsapp, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const telegramIcon = ref(faTelegram)
const linkedinIcon = ref(faLinkedin)
const whatsappIcon = ref(faWhatsapp)
const githubIcon = ref(faGithub)
</script>

<style scoped>
.redes {
  height: auto;
  display: flex;
  flex-direction: column;
}

.redes a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 2.3em;
  height: auto;
  transition: all 0.2s ease-in-out;
}



.redes a:hover {
  width: 130%;
  border-radius: 0 10px 10px 0;
}
</style>
