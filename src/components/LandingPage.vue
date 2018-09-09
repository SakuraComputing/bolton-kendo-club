<template>
    <div>
        <h1>Welcome to Bolton Kendo Club</h1>
        
        <h3>{{ msg }}</h3>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LandingPage extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>

</style>

