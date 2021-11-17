<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Welcome to Your Vue.js + TypeScript App</h1>
  <button @click="warn('cannot submit yet', $event)">
    Submit
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    warn(message: string, $event: any) {
      if ($event) {
        $event.preventDefault();
      }
      alert(message);
    }
  }
})
</script>

