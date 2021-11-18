<template>
  <div>
    person.firstName {{ person ? person.firstName : undefined }} <br />
    person.lastName {{ person ? person.lastName : undefined }} <br />
    another.firstName {{ another.firstName }} <br />
    another.lastName {{ another.lastName }} <br />
    age {{ age }} <br/>
    name {{ name}}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Person } from "./Person";
export default defineComponent({
  props: {
    person: Person,
    another: {
      type: Person,
      required: true,
    },
    age: {
      type: Number,
      default: 20,
    },
    name: {
      type: String,
      validator(value: string) {
        return value == "Aleksi";
      },
    },
  },
});
</script>
