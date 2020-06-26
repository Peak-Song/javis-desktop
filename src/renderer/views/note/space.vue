<template>
  <div>
    <NotePage></NotePage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NotePage from '@/components/Note/index.vue'

@Component({
  name: 'NoteSpace',
  components: {
    NotePage
  }
})
export default class extends Vue {
  private mdValue = '#### header'
}
</script>

<style scoped>

</style>
