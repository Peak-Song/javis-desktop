<template>
  <div class="configBoard">
    <div >
      Git Path:
      <el-input placeholder="git路径" v-model="gitPath"></el-input>
    </div>
    <div >
      Repo Dir:
      <el-input placeholder="本地仓库目录" v-model="gitRepo"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalConfig',
  data () {
    return {
      gitPath: '',
      gitRepo: '',
      repoExists: false
    }
  }
}
</script>

<style scoped>
  .configBoard {
    height: 100%;
    width: 100%;
  }
</style>
