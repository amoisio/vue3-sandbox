<template>
  <p :class="{ large: isLarge, red: isRed }">Welcome to Your Vue.js + TypeScript App</p>
  <button @click="isLarge=!isLarge">Large?</button>
  <button @click="isRed=!isRed">Red?</button>

  <p :class="computedClass">This used a computed class object</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isLarge: false,
      isRed: false
    }
  },
  computed: {
    computedClass() : any {
      return {
        large: this.isLarge,
        red: this.isRed
      }
    }
  }
})
</script>
<style scoped>
.red {
  color:red
}

.large {
  font-size: x-large;
}

</style>

