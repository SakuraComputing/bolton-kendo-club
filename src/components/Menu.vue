<template>
    <div>
        <h1>Menu Component</h1>
        
        <h3>{{ msg }}</h3>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>

</style>

