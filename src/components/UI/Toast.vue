<template>
  <div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "App",
  setup() {
    const notify = () => {
      toast("Wow so easy !", {
        autoClose: 5000,
        className: 'custom-toast-style'
      }); // ToastOptions
    }
    return { notify };
  }
};
</script>


<style scoped>

.custom-toast-style {
  /* Add your custom styles here */
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 2px 10px rgb(0, 185, 97);
}

</style>