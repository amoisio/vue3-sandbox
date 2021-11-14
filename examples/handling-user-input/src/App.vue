<template>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button @click="reverse">Reverse Message</button>
  </div>
  <div id="two-way-binding">
    <p>{{ userMessage }}</p>
    <input type="text" v-model="userMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      message: "This is a reversable message",
      userMessage: "This is a user message"
    };
  },
  methods: {
    reverse() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});
</script>
