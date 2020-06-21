<template>
  <mavon-editor v-model="mdValue"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dashboard'
})
export default class extends Vue {
  get name () {
    return 'all-notes'
  }

  private mdValue = '#### header'
}
</script>

<style scoped>

</style>
