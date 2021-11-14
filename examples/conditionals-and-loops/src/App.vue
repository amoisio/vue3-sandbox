<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
    <button @click="seen=!seen">Toggle</button>
  </div>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
});
</script>
