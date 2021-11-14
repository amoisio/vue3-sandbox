<template>
  <div id="computed-basics">
    <p>{{fullName}} Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <button @click="fullName='Elvis Presley'">Make me Elvis!</button>
  </div>
  <div id="watchers">
    <input type="text" v-model="question"/>
    Answer: {{answer}}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      author: {
        firstName: "John",
        lastName: "Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      question: '',
      answer: 'End with a question mark (?).'
    };
  },
  watch: {
    question(newQuestion: string, oldQuestion: string) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer();
      }
    }
  },
  methods: {
    getAnswer() {
        this.answer = 'Thinking...'
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
      }
  },
  computed: {
    publishedBooksMessage(): string {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
    fullName: {
      get(): string {
        return this.author.firstName + " " + this.author.lastName;
      },
      set(newName: string) {
        const names = newName.split(' ');
        this.author.firstName = names[0];
        this.author.lastName = names[1];
      }

    }
  }
});
</script>
