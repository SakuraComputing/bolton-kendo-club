<template>
  <div class="home">
    <div class="box-layout">
        <div class="box-layout__box">
          <h1 class="box-layout__title">Bolton Kendo Club</h1>
          <p class="box-layout__synopsis">"Welcome to Doshinkenyukai / KNMS"</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style scoped>

.box-layout {
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('/img/background/kyoto-taikai.jpg');
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: left;
  width: 100vw;
}

.box-layout__box {
  position: absolute;
  width: 100%;
  top: 80%;
  left: 50%;
  padding: 5%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}

.box-layout__title {
  color: #fff;
  font-size: 550%;
  font-weight: 1%;
  letter-spacing: 2px;
  margin: 0 0 0 0;
  line-height: 1;
}

.box-layout__synopsis {
  font-size: 200%;
  font-style: italic;
  color: #fff;
}


</style>

