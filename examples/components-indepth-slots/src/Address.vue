<template>
  <slot :item="address">
    {{ address }}
  </slot>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    address: String
  }
});
</script>
