<template>
  <slot :firstName="firstName" name="name">
    {{ firstName }}
  </slot>
  <slot :age="age" name="age">
    {{ age }}
  </slot>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    firstName: String,
    age: Number,
  }
});
</script>
