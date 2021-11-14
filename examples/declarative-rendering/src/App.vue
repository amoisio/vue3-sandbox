<template>
  <div id="counter">
    Counter : {{ counter }}
  </div>
  <div id="bind-attribute">
    <span :title="message">
      Hover your mouse over me for a few seconds to see the message!
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      counter: 0,
      message: "Hover message"
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
})
</script>
