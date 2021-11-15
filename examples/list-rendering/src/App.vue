<template>
  <p>Iterating over an Array</p>
  <ul>
    <li v-for="(item, index) of items" :key="item.message">
      ({{index}}) {{ item.message }} - {{parentMessage}}
    </li>
  </ul>
  <p>Iterating over an Object</p>
  <ul>
    <li v-for="(item, name, index) in author" :key="name">
      {{index}}. {{name}} : {{ item }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      parentMessage: 'msg',
      items: [
        {
          message: 'Foo'
        },
        {
          message: 'Bar'
        }
      ],
      author: {
        title: "Senior Software Engineer",
        name: "Aleksi Moisio",
        employer: "Elekta"
      }
    }
  }
});
</script>
