<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
  .app-main {
    overflow: hidden;
    max-height: 100%;
    width: 100%;
  }

  .app-main > div {
    height: 100%;
  }
</style>
