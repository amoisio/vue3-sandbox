<template>
  <button @click="service.inc()">LOW: Inc ({{ service.count }})</button>
  LOW: {{ todos }}
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import CounterService from "./CounterService";

export default defineComponent({
  computed: {
    service(): CounterService {
      return inject("counter") as CounterService;
    },
    todos(): number {
      return inject("todos") as number;
    },
  },
});
</script>
