<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
        <ul class="nav__sub-menu">
        </ul>
      </li>
      <li>
        <router-link to="/about">Where and When</router-link>
        <ul class="nav__sub-menu">
          <!-- <li>
            <a href="">Where</a>
          </li>
          <li>
            <a href="">Practise Times</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li> -->
        </ul>
      </li>
      <li>
        <!-- <router-link to="/calendar">Calendar</router-link> -->
        <ul class="nav__sub-menu">
        </ul>
      </li>
      <li>
        <router-link to="/history">Club History</router-link>
        <ul class="nav__sub-menu">
        </ul>
      </li>
      <li>
        <router-link to="/whatskendo">What is Kendo</router-link>
        <ul class="nav__sub-menu">
        </ul>
      </li>
      <li>
        <router-link to="/study">Kendo Study</router-link>
        <ul class="nav__sub-menu">
        </ul>
        <li>
          <router-link to="/links">Kendo Links</router-link>
        </li>
        <li>
          <router-link to="/photos">Kendo Photograph's</router-link>
        </li>
        <li>
          <router-link to="/videos">Kendo Videos</router-link>
        </li>
        <!-- <li>
          <router-link to="/login">Login / Register</router-link><span v-if="isLoggedIn"> | <a @click="logout"></a></span>
        </li> -->
    </ul>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Menu from './../src/components/Menu.vue';

  @Component({
    components: {
      Menu
    },
  })
  export default class App extends Vue {
    get isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
    logout() {
      return this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
  overflow-x: hidden;
}
/*------------------------------------*\
    Settings
\*------------------------------------*/

$spacing: 1em;
$color__primary: #262788;


/*------------------------------------*\
    NAV
\*------------------------------------*/
.nav {
    float: left; /* Clear floats */
    width: 100%;
    margin-bottom: $spacing;
    // padding: 0 $spacing;
    list-style: none;
    // font-weight: bold;
    background: $color__primary;
    margin: 0;
    border-bottom: 1px solid #fff;
}

.nav li {
    position: relative;
    float: left;
    margin-right: $spacing;
}

.nav a {
    display: block;
    padding: $spacing $spacing/3;
    color: #fff;
    text-decoration: none;
}

.nav a:hover{
    color: #fff;
    background: lighten($color__primary, 5%);
}

/*--- DROPDOWN ---*/
.nav__sub-menu {
    background: rgba(255,255,255,0); /* But! Let's make the background fully transparent where we can, we don't actually want to see it if we can help it... */
    list-style: none;
    position: absolute;
    left: -9999px; /* Hide off-screen when not needed (this is more accessible than display:none;) */
}

.nav__sub-menu li {
    float: none;
}

.nav__sub-menu a {
    white-space: nowrap; /* Stop text wrapping and creating multi-line dropdown items */
}

.nav li:hover ul{ /* Display the dropdown on hover */
    left: 0; /* Bring back on-screen when needed */
}

.nav li:hover a { /* These create persistent hover states, meaning the top-most link stays 'hovered' even when your cursor has moved down the list. */
    background: lighten($color__primary, 10%);
}

.nav li:hover ul a { /* The persistent hover state does however create a global style for links even before they're hovered. Here we undo these effects. */
}

.nav li:hover ul li a:hover { /* Here we define the most explicit hover states--what happens when you hover each individual link. */
    background: $color__primary;
}
</style>
