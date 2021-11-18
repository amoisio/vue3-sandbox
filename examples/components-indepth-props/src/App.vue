<template>
  <child 
    :person="aleksi"
    :another="anni"
    name="Aatami"
  ></child>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Child from './Child.vue';
import {Person} from './Person';
export default defineComponent({
  components : {
    Child
  },
  data() {
    return {
      aleksi: new Person("Aleksi", "Moisio"),
      anni: new Person("Anni", "Moisio")
    }
  }
})
</script>

