<template>
  <el-container id="note_container">
    <el-main id="note_main">
      <el-container id="note_page">
        <el-aside id="note_aside">
          <el-container id="note_aside_container">
            <el-header id="note_aside_header">
              <el-input
                id="note_search"
                placeholder="查找笔记"
                prefix-icon="el-icon-search"
                v-model="searchKeyword">
              </el-input>
            </el-header>
            <el-main id="note_aside_main">
              <el-table
                :data="tableData"
                :show-header="false"
                id="note_aside_main_table">
                <el-table-column
                  prop="date"
                  label=""
                  id="note_aside_main_column">
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>
        </el-aside>
        <el-main id="note_content" >
            <mavon-editor v-model="mdValue" id="note_editor" />
        </el-main>
      </el-container>
    </el-main>
    <el-footer id="note_footer"></el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
export default class NotePage extends Vue {
    @Prop({ default: false }) private isActive!: boolean

    private searchKeyword = ''

    private mdValue = '#### h3'

    private tableData = [
      {
        date: '2016-05-02'
      }, {
        date: '2016-05-04'
      }, {
        date: '2016-05-01'
      }, {
        date: '2016-05-03'
      }, {
        date: '2016-05-02'
      }, {
        date: '2016-05-04'
      }, {
        date: '2016-05-01'
      }, {
        date: '2016-05-03'
      }, {
        date: '2016-05-02'
      }, {
        date: '2016-05-04'
      }, {
        date: '2016-05-01'
      }, {
        date: '2016-05-03'
      }]

    private toggleClick () {
      this.$emit('toggleClick')
    }
}
</script>

<style lang="scss" scoped>
  .svg-icon {
    vertical-align: middle;
  }

  .is-active {
    transform: rotate(180deg);
  }

  #note_container {
    height: 100%;
    width: 100%;
  }

  #note_main {
    width: 100%;
    height: 98%;
    padding: 5px;
  }

  #note_footer {
    width: 100%;
    height: 2%;
  }

  #note_page {
    display: flex;
    min-height: 100%;
    height: 100%;
  }

  #note_aside {
    height: 100%;
    min-height: 100%;
    width: 20%;
  }

  #note_aside_container {
    height: 100%;
  }

  #note_aside_header {
    padding: 5px 5px 0;
  }

  #note_aside_main {
    padding: 5px;
    width: 100%;
  }

  #note_aside_main_table {
    width: 100%;
  }

  #note_aside_main_column {
    width: 100%;
  }

  #note_content {
    height: 100%;
    min-height: 100%;
    width: 80%;
    overflow: hidden;
    padding: 5px;
  }

  #note_editor {
    height: 100%;
    overflow: hidden;
  }

</style>
