<template>
  <div id="todo-list-app">
    <ol>
      <todo v-for="item in groceryList" :todo="item" :key="item.id"> </todo>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./Todo.vue";

export default defineComponent({
  components: {
    Todo,
  },
  data() {
    return {
      groceryList: [
        { id: 1, text: "test1" },
        { id: 2, text: "test2" },
      ],
    };
  },
});
</script>
