<template>
  <div id="data-properties">
    <span>
      count: {{ count }}
      $data.count : {{ $data.count }}
    </span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 4
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
})
</script>
