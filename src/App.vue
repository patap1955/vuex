<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {site} from '@/_configs';

export default {
  components: {Footer, Header},
  data() {
    return {
      site: site
    }
  }
}
</script>

<style lang="scss">

</style>
