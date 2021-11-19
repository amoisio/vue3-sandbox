<template>
  <div id="keep-alive">
    <p>
      {{ tab }}
    </p>
    <span>Without keep-alive</span>
    <component :is="tab"></component>
    <br />
    <span>With keep-alive</span>
    <keep-alive>
      <component :is="tab"></component>
    </keep-alive>
    <button @click="nextTab">Next</button>
  </div>
  <div id="dynamic">
    <button @click="toggle=!toggle">Load component</button>
    <dynamic-tab v-if="toggle"></dynamic-tab>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import FirstTab from './FirstTab.vue';
import SecondTab from './SecondTab.vue';
import ThirdTab from './ThirdTab.vue';
export default defineComponent({
  components : {
    FirstTab,
    SecondTab,
    ThirdTab,
    DynamicTab: defineAsyncComponent(() =>
      import('./DynamicTab.vue')
    )
  },
  data() {
    return {
      tab: "FirstTab",
      toggle: false
    };
  },
  methods: {
    nextTab() {
      if (this.tab === "FirstTab") {
        this.tab = "SecondTab";
      } else if (this.tab === "SecondTab") {
        this.tab = "ThirdTab";
      } else {
        this.tab = "FirstTab";
      }
    },
  },
});
</script>
