<template>
  <low></low>
  <button @click="service.inc()">MIDDLE: Inc ({{ service.count }})</button>
  MIDDLE: {{ todos }}
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent, inject } from "vue";
import CounterService from "./CounterService";
import Low from "./Low.vue";

export default defineComponent({
  components: {
    Low,
  },
  computed: {
    service(): CounterService {
      return inject("counter") as CounterService;
    },
    todos(): number {
      return inject("todos") as number;
    },
  }
});
</script>
