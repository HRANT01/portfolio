<template>
  <div class="bg-black h-full w-full flex flex-col items-center justify-center">
    <div v-motion-pop-visible class="text-3xl text-white font-extrabold font-mono text-center animate__animated animate__slideInUp lg:text-left lg:mb-5 lg:mt-5 lg:text-5xl">
      Professional Experience
    </div>
    <card v-motion-pop-visible/>
    <div
        v-motion-pop-visible
        class="max-w-[80%] min-w-[80%] text-[#00A97F] text-justify mt-7 mb-10"
    >
      <span class="block mb-3 text-xl text-white">
      Online Store
      </span>

      <p class="mb-4"><span class="text-white">E-commerce:</span> Crafting seamless user experiences by designing and developing intuitive product pages, streamlined
        shopping carts, and hassle-free checkout processes.</p>
      <p class="mb-4"><span class="text-white">Payment Integration:</span> Integrating robust payment gateways to facilitate secure and efficient transactions,
        ensuring peace of mind for both buyers and sellers.</p>
      <p class="mb-4"><span class="text-white">Product Search and Filters:</span> Enhancing user convenience with advanced search and filtering functionalities,
        empowering customers to easily locate desired products amidst vast inventories.</p>
      <p class="mb-4"><span class="text-white">Responsive Design:</span> Employing responsive design techniques to optimize the online store's usability across
        diverse devices and screen sizes, delivering consistent performance and accessibility.</p>

    </div>
    <div
        v-motion-pop-visible
        class="max-w-[80%] min-w-[80%] text-[#00A97F] text-justify  mb-10"
    >
      <span class="block mb-3 text-xl text-white">
      Virtual Machine Control Platform:
      </span>

      <p class="mb-5"><span class="text-white">Control Panel Design:</span> Developing an intuitive control panel for monitoring and managing virtual machines.</p>
      <p class="mb-5"><span class="text-white">Visualization:</span> Integrating graphical representations of virtual machine states and performance metrics.</p>
      <p class="mb-5"><span class="text-white">Product Search and Filters:</span> Enhancing user convenience with advanced search and filtering functionalities,
        empowering customers to easily locate desired products amidst vast inventories.</p>
      <p><span class="text-white">Responsive Design:</span> Employing responsive design techniques to optimize the online store's usability across
        diverse devices and screen sizes, delivering consistent performance and accessibility.</p>


    </div>

    <div
        v-motion-pop-visible
        class="max-w-[80%] text-[#00A97F] text-justify mb-10"
    >
      <span class="block mb-3 text-xl text-white">
        Gambling Platform
      </span>

      <p class="mb-5"><span class="text-white">Game Interface:</span> Skillfully crafting visually captivating and immersive interfaces for a diverse range of gambling games to captivate and retain user interest.</p>
      <p class="mb-5"><span class="text-white">User Account Management:</span> Implementing comprehensive user account management functionalities, including streamlined registration processes, seamless login experiences, and personalized profile customization options.</p>
      <p class="mb-5"><span class="text-white">Payment Integration:</span> Seamlessly integrating a variety of secure payment methods, including credit cards, e-wallets, and cryptocurrencies, to provide users with convenient options for both deposits and withdrawals, thereby ensuring a smooth and hassle-free financial transaction experience.</p>
      <p><span class="text-white">Data Security:</span> Adhering to stringent security protocols and employing advanced encryption techniques to safeguard sensitive user data and financial transactions, thereby instilling confidence and trust among users in the platform's commitment to their privacy and security.</p>


    </div>

    <div
        v-motion-pop-visible
        class="max-w-[80%] min-w-[80%] text-[#00A97F] text-justify mb-10"
    >
      <span class="block mb-3 text-xl text-white ">
        Messaging Application
      </span>

      <p class="mb-5"><span class="text-white">Real-time Communication:</span> Developing features for instant message sending and receiving using WebSocket connections to facilitate seamless real-time communication.</p>
      <p class="mb-5"><span class="text-white">User Interface:</span> Creating a user-friendly interface with chat bubbles, emojis, and multimedia content exchange capabilities for enhanced user engagement.</p>
      <p class="mb-5"><span class="text-white">Responsiveness:</span> Ensuring the application's responsiveness across various devices, including smartphones, tablets, and desktop computers.</p>
      <p class="mb-5"><span class="text-white">Notifications:</span> Implementing notifications for new messages and updates to keep users informed and engaged.</p>


    </div>

  </div>
</template>

<script lang="ts" setup>
import Card from "../UI/Card.vue";

</script>

<style lang="scss" scoped>

</style>