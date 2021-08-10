<template>
  <div class="tabsPage" style="height:100%">
    <el-tabs class="tabBox" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="带分页" name="带分页">
        <tabTable1 style="height:calc(100% - 40px);"></tabTable1>
      </el-tab-pane>
      <el-tab-pane label="无分页" name="无分页">
        <tabTable2 style="height:calc(100% - 40px);"></tabTable2>
      </el-tab-pane>
      <el-tab-pane label="无form" name="无form">
        <tabTable3 style="height:calc(100% - 40px);"></tabTable3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabTable1 from './components/tabTable1'
import tabTable2 from './components/tabTable2'
import tabTable3 from './components/tabTable3'

export default {
  name: 'defaultPage',
  data () {
    return {
      activeName:'带分页'
    }
  },
  components:{
    tabTable1,
    tabTable2,
    tabTable3
  },
  created() {
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
  },
}
</script>

<style lang="scss">
.tabsPage{
  .el-tabs__header{
    padding: 0 20px!important;
  }
  .el-tabs__header{
    margin:0!important;
  }
}
</style>
