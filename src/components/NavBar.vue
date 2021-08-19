<template>
  <nav id="main-nav">
    <div class="business-card">
      <img src="@/assets/profile.jpg" alt="profile" />
      <div class="description">
        <h1>Kevin Chen</h1>
        <p>Student at UNC Chapel Hill</p>
      </div>
    </div>
    <ul class="nav-links">
      <li :class="checkCurrentPath('HomePage')">
        <router-link :to="{ name: 'HomePage' }">home</router-link>
      </li>
      <li :class="checkCurrentPath('AboutPage')">
        <router-link :to="{ name: 'AboutPage' }">about me</router-link>
      </li>
      <li :class="checkCurrentPath('ResumePage')">
        <router-link :to="{ name: 'ResumePage' }">résumé</router-link>
      </li>
      <li :class="checkCurrentPath('IdeasPage')">
        <router-link :to="{ name: 'IdeasPage' }">ideas</router-link>
      </li>
      <li :class="checkCurrentPath('ContactPage')">
        <router-link :to="{ name: 'ContactPage' }">contact me</router-link>
      </li>
    </ul>
    <div class="socials">
      <a href="https://linkedin.com/in/kekevinchen"><i class="fab fa-linkedin" /></a>
      <a href="https://github.com/kekevi/"><i class="fab fa-github" /></a>
      <a href="https://instagram.com/kev.qen/"><i class="fab fa-instagram" /></a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    checkCurrentPath(routeName) {
      return routeName === this.$route.name ? 'current-link' : '';
    }
  }
};
</script>

<style lang="scss">
#main-nav {
  color: #eeeeee;
  background-color: #1d1e21;
  height: 100%;
}

.business-card {
  margin: 20px;

  img {
    height: 150px;
    border-radius: 75px;
  }

  h1 {
    margin: 0;
    font-size: 40px;
  }
}

a,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: #666;
}

.nav-links {
  width: 250px;
  margin: 0 auto;
  font-size: 3em;
  font-family: monospace;
  margin-top: 80px;

  li {
    text-align: left;
    list-style-type: none;
    margin-top: 15px;
  }

  .current-link {
    /* color: rgb(255, 236, 96); */
    color: #e6af2e;
    /* color: #efd6ac; */
  }
  .current-link::marker {
    content: '>';
  }
}

.socials {
  font-size: 2.5em;
  bottom: 10%;
  a {
    margin: 10px;
  }
}
</style>
