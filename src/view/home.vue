<template>
    <div class="homeBG">
      <h1 class="homeTitle">element-ui-plugin-demo</h1>
      <div class="textBox">
        <el-button type="warning" @click="$router.push('baseFormDoc')">form文档</el-button>
        <el-button type="warning" @click="$message.error('更新中.....')">form组件文档</el-button>
      </div>
      <div class="bottomBox">
        <div class="bottomBox_item leftBox">
          <ul class="routes">
              <li v-for="(item,index) in formPath" :key="item.name">
                <router-link :to="item.path">{{index+1}}.{{item.title }}</router-link>
              </li>
          </ul>
        </div>
        <div class="bottomBox_item rightBox">
          <ul class="routes">
              <li v-for="(item,index) in tablePath" :key="item.name">
                <router-link :to="item.path">{{index+1}}.{{item.title }}</router-link>
              </li>
          </ul>
          <p style="text-align:center;color:#ff0000;">待更新......</p>
        </div>
      </div>

      <!-- <div v-for="route in routes" :key="route.key">
          <ul class="routes">
              <li v-for="item in route" :key="item.name">
                  <router-link :to="item.path">{{ item.meta.title }}</router-link>
              </li>
          </ul>
      </div> -->
    </div>
</template>

<script>
import routerMain from '@/router/index.js';

export default {
    data() {
        return {
          routes: [],
          formPath:[
            {path: '/defaultPage',name: 'defaultPage',title: '页面预览'},
            {path: '/formPage',name: 'formPage',title: 'form组件预览'},
            {path: '/formNumerColumns',name: 'formNumerColumns',title: 'form组件自定义列数排列'},
            {path: '/formCustomColumns',name: 'formCustomColumns',title: 'form组件的列宽'},
            {path: '/formFixedWidth',name: 'formFixedWidth',title: 'form组件固定宽度'},
            {path: '/formDetailPage',name: 'formDetailPage',title: 'form详情类页面预览'},
            {path: '/formLabelTopPage',name: 'formLabelTopPage',title: 'form标题顶部显示'},
            {path: '/formCollapse',name: 'formCollapse',title: '单个form折叠展示'},
            {path: '/formLabelWidthPage',name: 'formLabelWidthPage',title: 'form Label宽度设置'},
            {path: '/formMutileCompPage',name: 'formMutileCompPage',title: 'form组合组件'},
            {path: '/formExpand',name: 'formExpand',title: 'form展开收起和自定义按钮组'},
            {path: '/formDefaultValue',name: 'formDefaultValue',title: 'form默认值'},
            {path: '/popup',name: 'popup',title: '弹窗组件form展示'},
          ],
          tablePath:[
            {path: '/tableFitHeight',name: 'tableFitHeight',title: 'table自适应高度'},
            {path: '/noPagerTable',name: 'noPagerTable',title: '无分页的table'},
            {path: '/tabsTable',name: 'tabsTable',title: '标签页下的table'},
          ]
        };
    },
    mounted() {
        let ths = this;
        let route = [];

        routerMain.options.routes.forEach((el, idx) => {
            if (el.name !== 'home') {
                if (el.meta.title.indexOf('(') === -1) {
                    el.meta.title = '(' + idx + ') ' + el.meta.title;
                }
                route.push(el);
                if ((idx / 15) % 1 === 0) {
                    ths.routes.push(route);
                    route = [];
                }
            }
        });

        ths.routes.push(route);
    }
};
</script>

<style lang="scss" scoped>
.homeBG{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  background: #86baea;
}
.homeTitle{
  text-align: center;
  font-size: 58px;
  color:#ffffff;
}
.textBox{
  width: 100%;
  height: 100px;
  text-align: center;
}
.bottomBox{
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .bottomBox_item{
    width: 40%;
    height: 95%;
    border-radius: 20px;
    background: rgba(255,255,255,0.5);
    ul{
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 18px;
      li{
        width: 50%;
        line-height: 50px;
        text-align: left;
      }
      // li:nth-of-type(2n){
      //   text-align: right;
      // }
    }
  }
  .leftBox{
    color:cadetblue;
  }
  .rightBox{
    color:#909399;
  }
}

// .routes {
//     margin-top: 10px;
//     width: 300px;
//     display: block;
//     float: left;
//     margin-left: 20px;
//     // text-align: left;
//     li {
//         width: 100%;
//         margin-top: 10px;
//         display: inline-block;
//         a {
//             display: block;
//             font-size: 16px;
//             margin-left: 20px;
//         }
//     }
// }
</style>
