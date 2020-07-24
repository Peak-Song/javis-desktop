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
import { GLOBAL_CONFIG_REQ_MSG, GLOBAL_CONFIG_RES_MSG } from '@@/../constants'

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

    // this.$ipcRenderer.on(GLOBAL_CONFIG_RES_MSG, (event, arg) => {
    //   console.log(arg) // prints "ping"
    //   event.returnValue = 'pong'
    // })
  },
  methods: {
    gitPathChanged (value) {
      console.log(value)
      console.log(this.gitPath)
    },

    gitRepoChanged (value) {
      console.log(value)
      console.log(this.gitRepo)
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
