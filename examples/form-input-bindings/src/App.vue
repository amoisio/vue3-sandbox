<template>
  <div id="text">
    <input type="text" v-model="textValue" />
    {{ textValue }}
  </div>
  <div id="textarea">
    <textarea v-model="textareaValue"></textarea>
    {{ textareaValue }}
  </div>
  <div id="checked">
    <input type="checkbox" v-model="checked" />
    {{ checked }}
  </div>
  <div id="multiple-checked">
    <input id="jack" type="checkbox" value="Jack" v-model="multiChecked" />
    <label for="jack">Jack</label>
    <input id="jill" type="checkbox" value="Jill" v-model="multiChecked" />
    <label for="jill">Jill</label>
    <input
      id="william"
      type="checkbox"
      value="William"
      v-model="multiChecked"
    />
    <label for="william">William</label>
    {{ multiChecked }}
  </div>
  <div id="radio">
    <input id="one" type="radio" value="One" v-model="radio" />
    <label for="one">One</label>
    <input id="two" type="radio" value="Two" v-model="radio" />
    <label for="two">Two</label>
    {{ radio }}
  </div>
  <div id="select">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <div id="lazyinput">
    <input type="text" v-model.lazy="lazytext"/>
    {{ lazytext }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      textValue: undefined,
      textareaValue: undefined,
      checked: false,
      multiChecked: [],
      radio: undefined,
      selected: "",
      lazytext: undefined
    };
  },
});
</script>
