<template>
  <div id="app">
    <el-tabs tab-position="left" style="height: 90%;">
      <el-tab-pane label="全局配置">
        <GlobalConfig/>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GlobalConfig from '@@/component/GlobalConfig'

export default {
  name: 'App',
  components: {
    GlobalConfig
  }
}
</script>

<style>
  body {
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }

  html {
    height: 100%;
  }

  #app {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:focus,
  a:hover {
    color: inherit;
    outline: none;
    text-decoration: none;
  }

  div:focus {
    outline: none;
  }
</style>
