<template>
  <div id="root">
    <div>
      {{ windowWi }}
    </div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      showNavBar: true, // if the navbar should be showing
      forceNavBar: false // if user has turned navbar on or off
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: black;
}

#root {
  display: flex;
  overflow: auto;
  height: 100%;
}

.page {
  position: relative;
  padding: 20px;
  flex-grow: 1;
  background-color: #f6f9f1;
}

.page footer {
  position: absolute;
  background-color: #f1a208;
  width: 100%;
  left: 0;
  bottom: 0;
}

.footer-body {
  padding: 20px;
}
</style>
