<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <router-link class="navbar-logo" to="/">{{ title }}</router-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links">
              <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {app, links} from '@/_configs'

export default {
  name: "Header",
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