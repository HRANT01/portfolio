<template>
  <div>
    <div class="card">
      <a class="socialContainer containerOne text-2xl" href="https://t.me/SomeOriginalUserName" target="_blank">
        <font-awesome-icon :icon="telegramIcon" />
      </a>

      <a class="socialContainer containerTwo text-2xl" href="https://www.linkedin.com/in/hrantaleksanyan/" target="_blank">
        <font-awesome-icon :icon="linkedinIcon" />
      </a>

      <a class="socialContainer containerThree text-2xl" href="https://wa.me/37477672607" target="_blank">
        <font-awesome-icon :icon="whatsappIcon" />
      </a>

      <a class="socialContainer containerFour text-2xl" href="https://github.com/HRANT01" target="_blank">
        <font-awesome-icon :icon="githubIcon" />
      </a>
    </div>


  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {faTelegram, faLinkedin, faWhatsapp, faGithub} from '@fortawesome/free-brands-svg-icons'

const telegramIcon = ref(faTelegram)
const linkedinIcon = ref(faLinkedin)
const whatsappIcon = ref(faWhatsapp)
const githubIcon = ref(faGithub)

</script>

<style lang="scss" scoped>

.card {
  width: fit-content;
  height: fit-content;
  background-color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
}
/* instagram*/
.containerOne:hover {
  background-color: #cecedf;
  transition-duration: .3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #cecedf;
  transition-duration: .3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #cecedf;
  transition-duration: .3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #cecedf;
  transition-duration: .3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}




</style>