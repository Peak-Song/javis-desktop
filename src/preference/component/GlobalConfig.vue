<template>
  <div class="configBoard">
    <div >
      Git Path: <el-input placeholder="git路径" v-model="gitPath" @change="gitPathChanged"></el-input>
    </div>
    <div >
      Repo Dir: <el-input placeholder="本地仓库目录" v-model="gitRepo" @change="gitRepoChanged"></el-input>
    </div>
  </div>
</template>

<script>
import { GLOBAL_CONFIG_REQ_MSG, GLOBAL_CONFIG_SAVE_REPO_DIR, GLOBAL_CONFIG_SAVE_GIT_PATH } from '@@/../constants'

export default {
  name: 'GlobalConfig',
  data () {
    return {
      gitPath: '',
      gitRepo: '',
      repoExists: false
    }
  },
  created () {
    const configJson = this.$ipcRenderer.sendSync(GLOBAL_CONFIG_REQ_MSG, {})

    if (configJson) {
      this.gitPath = configJson.gitPath
      this.gitRepo = configJson.localGitDir
    }
  },
  methods: {
    gitPathChanged (gitPath) {
      this.$ipcRenderer.send(GLOBAL_CONFIG_SAVE_GIT_PATH, gitPath)
    },

    gitRepoChanged (gitRepo) {
      this.$ipcRenderer.send(GLOBAL_CONFIG_SAVE_REPO_DIR, gitRepo)
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
