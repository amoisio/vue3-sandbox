<template>
    <li>{{ todo.text }}</li>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        todo: {
            type: Object as PropType<{ text: String }>,
            required: true
        }
    }    
})
</script>
