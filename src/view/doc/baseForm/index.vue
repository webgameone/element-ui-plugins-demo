<template>
  <div class="mavonEditor">
    <h2 style="text-align:center;">element-ui-plugin</h2>
    <h1 class="pageTitle">Form组件基础配置文档</h1>
    <mavon-editor class="md" v-html="handbook" :subfield="false" :toolbarsFlag="false" :boxShadow="false" :ishljs="true" />
  </div>
</template>

<script>
import GUID from '@/assets/doc/formDoc.md';

export default {
  data() {
    return {
      // markdownOption: {
      //   bold: true, // 粗体
      // },
      handbook: GUID
    };
  }
};
</script>

<style lang="scss" scoped>
  .pageTitle{
    text-align: center;
  }
  .md{
    padding: 20px;
  }
</style>
