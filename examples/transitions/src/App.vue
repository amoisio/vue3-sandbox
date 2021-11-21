<template>
  <div id="demo">
    Push this button to do something you shouldn't be doing:<br />

    <div id="button" :class="{ shake: noActivated }">
      <button @click="noActivated = !noActivated">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>

    <div id="msg" :class="{ spin: noActivated }">
      <span>Spinning!</span>
    </div>

    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea">
      <h3>Move your mouse across the screen...</h3>
      <p>x: {{x}}</p>
    </div>

    <div>
      <button class="button normal-button">Normal</button>
      <button class="button ease-button">Easing</button>
      <p>
        ease-in will start the animation slowly, and finish at full speed. ease-out will start the animation at full speed, then finish slowly. ease-in-out will start slowly, be fastest at the middle of the animation, then finish slowly. ease is like ease-in-out , except it starts slightly faster than it ends.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      noActivated: false,
      x: 0
    };
  },
  methods: {
    xCoordinate(e: any) {
      this.x = e.clientX
    }
  }
});
</script>

<style scoped>

.button {
  background: #1b8f5a;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.ease-button {
  transition: background 0.5s ease-out;
}
.ease-button:hover,
.ease-button:focus {
  transition: background 0.5s ease-out;
  background: #3eaf7c;
}
.ease-button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

.normal-button:hover,
.normal-button:focus {
  background: #3eaf7c;
}
.normal-button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

.movearea {
  transition: 0s background-color linear;
}

#demo {
  border: 2px solid red;
}

#button {
  border: 2px solid blue;
}

#msg {
  border: 1px solid green;
  width: fit-content;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.spin {
  animation: spin 0.82s linear both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes spin {
  from {
    transform: rotate(0.0turn);
  }

  to {
    transform: rotate(1.0turn);
  }
}
</style>
