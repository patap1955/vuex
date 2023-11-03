<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links">
            <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {app, links} from "@/_configs";

export default {
  name: "Footer",
  data() {
    return {
      title: app.title,
      links: links
    }
  }
}
</script>

<style>

</style>