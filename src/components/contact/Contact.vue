<template>
  <div class="bg-black h-full flex items-center justify-center">
    <form
      id="form"
      class="md:flex rounded-lg shadow-lg p-8 bg-gray-900 w-[90%]"
      style="box-shadow: 0px 15px 160px #00a97f"
      action="https://formspree.io/f/xleqzzpl"
      method="POST"
      @submit.prevent="submitForm"
    >
      <div class="basis-1/2 text-[#00A97F] text-center md:text-left">
        <div class="mb-10">
          <h1 class="mb-0.5">Name:</h1>
          <p class="text-2xl">Hrant Aleksanyan</p>
        </div>
        <div class="mb-10">
          <h1 class="mb-0.5">Email:</h1>
          <p class="md:text-[1em]">hrant.frontend.developer@gmail.com</p>
          <p class="md:text-[1em] mt-3">hrantalexanyan13@gmail.com</p>
        </div>
        <div class="mb-10">
          <h1 class="mb-0.5">Phone:</h1>
          <p class="text-2xl">+374 (77) 67-26-07</p>
        </div>
        <div class="flex justify-center md:justify-start">
          <!-- Centering ContactSocial horizontally -->
          <ContactSocial />
        </div>
      </div>
      <div class="basis-1/2">
        <div id="form-body">
          <div id="welcome-lines" class="text-center">
            <div
              id="welcome-line-1"
              class="text-[#00A97F] font-semibold text-4xl"
            >
              Contact Me
            </div>
            <div id="welcome-line-2" class="text-white text-lg mt-4">
              Get in touch by sending an Email to me
            </div>
          </div>
          <div id="input-area" class="mt-8">
            <div class="form-inp mb-6">
              <input
                v-model="senderEmail"
                name="_replyto"
                class="w-full bg-transparent text-[#00A97F] border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00A97F] focus:outline-none"
                placeholder="Your Email Address"
                type="email"
                required
              />
            </div>
            <textarea
              v-model="message"
              name="message"
              class="w-full bg-transparent text-[#00A97F] border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00A97F] focus:outline-none"
              cols="30"
              placeholder="Message"
              required
              rows="3"
              style="resize: vertical; min-height: 100px; max-height: 250px"
            ></textarea>
          </div>
          <div id="submit-button-cvr" class="mt-6">
            <button
              id="submit-button"
              class="w-full bg-transparent text-[#00A97F] font-semibold text-lg border border-[#00A97F] rounded-lg px-4 py-3 transition duration-300 ease-in-out hover:bg-[#00A97F] hover:text-gray-900"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContactSocial from "../UI/contactSocial.vue";
import { toast } from "vue3-toastify";
import Toast from "../UI/Toast.vue";

const senderEmail = ref<string>("");
const message = ref<string>("");

const notify = (message: string) => {
  toast(message, {
    autoClose: 5000,
    toastStyle: {
      backgroundColor: "black",
      color: "#00b961",
    },
    progressClassName: "progress-bar-custom",
  }); // ToastOptions
};

const submitForm = () => {
  const formData = new FormData();
  formData.append("_replyto", senderEmail.value);
  formData.append("message", message.value);

  fetch("https://formspree.io/f/xzbnwjko", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      // Optionally, handle success here
      senderEmail.value = "";
      message.value = "";
      notify("Message successfully sent, I will get in touch soon");
    })
    .catch((error) => {
      console.error("Form submission failed:", error);
      // Optionally, handle error here
      notify("Something went wrong");
    });
};
</script>

<style scoped>
.progress-bar-custom {
  color: #00b961;
  background-color: #00b961;
}
</style>
