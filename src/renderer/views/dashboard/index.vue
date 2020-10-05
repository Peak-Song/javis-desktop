<template>
  <div class="dashboard-container">
<!--    <div class="dashboard-text">-->
<!--      name:{{ name }}-->
<!--    </div>-->
<!--    <div class="dashboard-text">-->
<!--      roles:<span-->
<!--        v-for="role in roles"-->
<!--        :key="role"-->
<!--      >{{ role }}</span>-->
<!--    </div>-->
    <p>
      吾诗已成。无论大神的震怒，还是山崩地裂，都不能把它化为无形！
      —— 奥维德《变形记》
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Dashboard'
})
export default class extends Vue {
  get name (): string {
    return UserModule.name
  }

  get roles (): string[] {
    return UserModule.roles
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
