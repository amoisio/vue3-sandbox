<template>
  <person first-name="Aleksi" :age="39"></person>
  <br />
  <person first-name="Aleksi" :age="39">
    <template #name="{ firstName }">
      <strong>{{ firstName }}</strong>
    </template>
    <template #age="slotProps">
      <p style="color: red">{{ slotProps.age }}</p>
    </template>
  </person>
  <br />
  <address-comp address="Lukiotie 1 C"></address-comp>
  <br />
  <address-comp address="Kultarinnantie 2" v-slot="{ item }">
    <p>
      <b>{{ item }}</b>
    </p>
  </address-comp>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Person from "./Person.vue";
import AddressComp from "./Address.vue";

export default defineComponent({
  components: {
    Person,
    AddressComp,
  },
});
</script>
