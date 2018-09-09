<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <LandingPage msg="Welcome to the exciting world of kendo"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue';

@Component({
  components: {
    HelloWorld,
    LandingPage
  },
})
export default class Home extends Vue {}
</script>
