<template>
  <nav class="vue-nav">
    <h2>I'm a navbar in Vue</h2>
    <ul class="nav-menu">
      <li><a href="/">One</a></li>
      <li><a href="/">Two</a></li>
      <li><a href="/">Three</a></li>
    </ul>
  </nav>
</template>

<style>
.vue-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: mistyrose;
  padding: 0.25rem;
}

.nav-menu {
  list-style-type: none;
}

.nav-menu li {
  display: inline;
  margin: 0 0.2rem;
}
</style>
