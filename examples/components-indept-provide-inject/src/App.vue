<template>
  <p>About reactivity:
    The provided value itself is not reactive. That is, if a reference type object is swapped for another one in the 
    parent component, then the injected objects will not be refreshed.
  </p>
  <p>
    To make the reference reactive, we can wrap it with the computed() method and cast it as ComputedRef`T in the 
    consuming type - what a shitty way to do this.
  </p>
  <p>
    So to make things simple - avoid having to use computed() method and keep inject logic simple.
  </p>
  <middle></middle>
  <button @click="counter.inc()">APP: Inc ({{ counter.count }})</button>
  <button @click="swap">Swap</button>
  <button @click="add">Add</button>
  APP: {{ todos.length }}
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import Middle from "./Middle.vue";
import CounterService from "./CounterService";
export default defineComponent({
  components: {
    Middle,
  },
  data() {
    return {
      counter: new CounterService(),
      todos: ["first"],
    };
  },
  provide() {
    return {
      counter: this.counter,
      todos: computed(() => this.todos.length),
    };
  },
  methods: {
    swap() {
      this.counter = new CounterService();
    },
    add() {
      this.todos.push("add");
    },
  },
});
</script>
