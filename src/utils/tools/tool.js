import moment from 'moment'

//常用工具
export default{
  //返回当天的0点到12点
  getCurrentDay(){
    let ndate = new Date();
    let n_year = ndate.getFullYear();
    let n_month = ndate.getMonth();
    let n_day = ndate.getDate();
    return [new Date(n_year,n_month,n_day,'00','00','00'),new Date(n_year,n_month,n_day,'23','59','59')];
  },
  //算多少分钟前的时间
  getPreTime(preMinute){
    //查询时间段
    let currentData = new Date();
    //转为毫秒
    let lastTime = Number(preMinute)*60*1000;
    let result = new Date(currentData.getTime() - lastTime);

    //当前时间的年月日时分秒
    let n_year = currentData.getFullYear();
    let n_month = currentData.getMonth();
    let n_day = currentData.getDate();
    let n_hour = currentData.getHours();
    let n_minute = currentData.getMinutes();
    let n_second = currentData.getSeconds();

    //x分钟前的年月日时分秒
    let p_year = result.getFullYear();
    let p_month = result.getMonth();
    let p_day = result.getDate();
    let p_hour = result.getHours();
    let p_minute = result.getMinutes();
    let p_second = result.getSeconds();

    return [new Date(p_year,p_month,p_day,p_hour,p_minute,p_second),new Date(n_year,n_month,n_day,n_hour,n_minute,n_second)];
  },
  //计算两个时间算分钟差
  getSubMinute(timeArr){
    let preTime = timeArr[0].getTime();
    let backTime = timeArr[1].getTime();
    let resTime = backTime - preTime;

    let reMinute = parseInt(resTime/60/1000,10);
    return reMinute;
  },
  //将起始时间都加上时间范围(2个范围的值)并返回
  getAddTime(m_startTime,m_minute,query){
    //时间类型  2-小时 1-分钟
    let timeType = 0

    if(Number(query.timeScope)>120){
      timeType = 2;
    }else{
      timeType = 1;
    }
    //开始时间和结束时间转为毫秒
    let startTime = new Date(m_startTime).getTime();

    //分钟转毫秒
    let minuteStartTime=0;
    let minuteEndTime=0;

    if(timeType==2){
      //小时
      minuteStartTime = Number(m_minute[0])*60*60*1000;
      minuteEndTime = Number(m_minute[1])*60*60*1000;
    }else if(timeType==1){
      //分钟
      minuteStartTime = Number(m_minute[0])*60*1000;
      minuteEndTime = Number(m_minute[1])*60*1000;
    }


    let nStartTime = startTime + minuteStartTime;
    let nendTime = startTime + minuteEndTime;


    let re_StartTime = new Date(nStartTime);
    let re_nendTime = new Date(nendTime);


    //开始时间的年月日时分秒
    let n_year = re_StartTime.getFullYear();
    let n_month = re_StartTime.getMonth();
    let n_day = re_StartTime.getDate();
    let n_hour = re_StartTime.getHours();
    let n_minute = re_StartTime.getMinutes();
    let n_second = re_StartTime.getSeconds();

    //结束时间的年月日时分秒
    let p_year = re_nendTime.getFullYear();
    let p_month = re_nendTime.getMonth();
    let p_day = re_nendTime.getDate();
    let p_hour = re_nendTime.getHours();
    let p_minute = re_nendTime.getMinutes();
    let p_second = re_nendTime.getSeconds();

    return [new Date(n_year,n_month,n_day,n_hour,n_minute,n_second),new Date(p_year,p_month,p_day,p_hour,p_minute,p_second)];
  },
  //导出excle
  exportExcelDtl(param,url,fileName) {
    let that = this;
    return request({
      url: url,
      method: 'post',
      data: param,
      responseType: 'blob' // 必须注明返回二进制流
    }).then(res => {
      that.downFile(res, fileName) // 下载文件
    })
  },
  downFile (data, name) {
    if (!data) {
      alert('数据错误！')
      return
    }
    const BLOB = new Blob([data])
    const url = window.URL.createObjectURL(BLOB)
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
  },
  //正则拿到[]里面的时间范围值
  getDateRange(str){
    let newStr = str.slice(11,-1);
    let newStrArr = newStr.split('-');

    return newStrArr;
  },
  //数字转中文
  toChinesNum(num){
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let unit = ["", "十", "百", "千", "万"];
    num = parseInt(num);
    let getWan = (temp) => {
    　　let strArr = temp.toString().split("").reverse();
    　　let newNum = "";
    　　for (var i = 0; i < strArr.length; i++) {
      　　newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
    　　}
     　 return newNum;
   }
   let overWan = Math.floor(num / 10000);
   let noWan = num % 10000;
   if (noWan.toString().length < 4) {　　　　　　noWan = "0" + noWan;　　　 }
   return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
  },
  //深拷贝
  //自定义深拷贝
  deepClone(target){
    let targetType = this.checkType(target)
    let result = null;

    if(targetType==='Object'){
        result = {}
    }else if(targetType==='Array'){
        result = []
    }else{
        return target;
    }
    for(let i in target){
        let value = target[i];
        let valueType = this.checkType(value);
        if(valueType==='Object'||valueType==='Array'){
              result[i] = deepClone(value)
        }else{
              result[i] = value;
        }
    }
    return result;
  },
  //使用toString.call来检测类型
  checkType(data){
    //slice(8,-1) 去掉前面8位字符和最后一个字符
    let type = Object.prototype.toString.call(data).slice(8,-1)
    return type;
  },
  ///计算两个时间差返回小时和分钟
  calcuateTwoTimes(m_startTime,m_endTime,span){
    let startTime = moment.duration(m_startTime).as('seconds')
    let endTime=moment.duration(m_endTime).as('seconds');
    //时间范围
    let range = (endTime - startTime)+(span*3600*24);
    let min = Math.floor(range%3600);//分钟

    let re = {
      time:(Math.floor(range/3600) + ":" + Math.floor(min/60) + ":"+ range%60),
      timeStr:Math.floor(range/3600) + "时" + Math.floor(min/60) + "分"+ range%60 + "秒"
    }

    if(range<0){
      re.time = '00:00:00';
      re.timeStr = '00时00分00秒'
    }

    return re;
  },
  ///计算多时间差返回小时和分钟
  calcuateMutliTimes(...m_allTime){
    let totalTime = 0;
    let allTime = m_allTime[0]
    allTime.forEach((item)=>{
      if(item){
        let mtime = moment.duration(item).as('seconds');
        totalTime += mtime;
      }
    })

    //时间范围
    let min = Math.floor(totalTime%3600);//分钟

    let re = {
      time:(Math.floor(totalTime/3600) + ":" + Math.floor(min/60) + ":"+ totalTime%60),
      timeStr:Math.floor(totalTime/3600) + "时" + Math.floor(min/60) + "分"+ totalTime%60 + "秒"
    }

    if(totalTime<0){
      re.time = '00:00:00';
      re.timeStr = '00时00分00秒'
    }

    return re;
  },
  //传入时分秒，返回完整日期
  hmsToDate(str){
    if(!str){
      return
    }
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let hms = str.split(":")

    return new Date(year,month,day,hms[0],hms[1],hms[2])
  },
  // 周期模式（按周）转换
  transformWeek(list) {
    let arr = [];
    if(list && list.length > 0) {
      // 处理导入数据为半角逗号的问题
      let curList = list.toString().replace('，',',').split(',');
      for (let i = 0; i < curList.length; i++) {
        const element = Number(curList[i]) - 1;
        if(element == 0) {
          arr.push('周日')
        } else {
          arr.push('周' + this.toChinesNum(element))
        }
      }
    }
    return arr
  },
  addNodes(list) {
    if(list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        element.curNode = `节点${this.toChinesNum(i+1)}`;
        if(i == list.length - 1) {
          element.sendTime = ''
          element.loadEndTime = ''
        }
      }
    }
    return list
  },
  // 输入开始时间、结束时间，返回时分秒
  formatSeconds(start, end) {
    const date1 = moment(start);
    const date2 = moment(end);
    const date3 = date2.diff(date1, "seconds");
    let result = parseInt(date3)
    let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
    return `${h}:${m}:${s}`;
  },
  // 时间大小比较
  compareTime(start, end) {
    const date1 = moment(start);
    const date2 = moment(end);
    const date3 = date2.diff(date1, "seconds");
    return date3
  },
  // 判断该数据是否有值
  isExist(str) {
    if(str !== ''  && str !== null && str !== undefined){
      return true
    }
    return false
  },
  filterParams(paramsData){
    let params = {}
    for(let item in paramsData){
      if(paramsData[item]!=null && typeof paramsData[item] != 'undefined'){
        params[item] = paramsData[item];
      }
    }
    return params;
  },
  // 获取字典字段
  fieldName(type, arr) {
    let name = null
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if(el.fieldNo == type) {
        name = el.fieldName
      }
    }
    return name
  },
  //tree相关的方法
  //获取树点击的当前节点和所有的父节点
  getAllNodeParent(dataId,treeNode){
    let nodeArr = []
    let node = treeNode;
    let thisNode = node.getNode(dataId); // 获取当前节点
    //加入当前节点
    nodeArr.push(dataId)

    while(thisNode.parent){
      //加入父节点
      nodeArr.push(thisNode.parent.data.id);
      thisNode = thisNode.parent;
    }

    return nodeArr
  },
  //树过滤方法
  filterNode(value,data,node) {
    if (!value) return true;
    // return data.name.indexOf(value) !== -1 || data.id.indexOf(value) !== -1;

    //先自定义10层
    let node1 = data.name.indexOf(value) !== -1;

    let node2 =
      node.parent &&
      node.parent.data &&
      node.parent.data.name &&
      (node.parent.data.name.indexOf(value) !== -1)

    let node3 =
      node.parent &&
      node.parent.parent &&
      node.parent.parent.data &&
      node.parent.parent.data.name &&
      (node.parent.parent.data.name.indexOf(value) !== -1)

    let node4=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.data &&
      node.parent.parent.parent.data.name &&
      (node.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node5=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node6=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node7=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node8=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node9=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1)

    let node10=
      node.parent &&
      node.parent.parent &&
      node.parent.parent.parent &&
      node.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.parent.parent &&
      node.parent.parent.parent.parent.parent.parent.parent.parent.parent.data &&
      node.parent.parent.parent.parent.parent.parent.parent.parent.parent.data.name &&
      (node.parent.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1)


    let result1 = false
    let result2 = false
    let result3 = false
    let result4 = false
    let result5 = false
    let result6 = false
    let result7 = false
    let result8 = false
    let result9 = false
    let result10 = false

    if(node.level === 1) {
      result1 = node1
    }else if(node.level === 2) {
      result2 = node1 || node2
    }
    else if(node.level === 3) {
      result3 = node1 || node2 || node3
    }else if(node.level === 4) {
      result4 = node1 || node2 || node3 || node4
    }else if(node.level === 5) {
      result5 = node1 || node2 || node3 || node4 || node5
    }else if(node.level === 6) {
      result6 = node1 || node2 || node3 || node4 || node5 || node6
    }else if(node.level === 7) {
      result7 = node1 || node2 || node3 || node4 || node5 || node6 || node7
    }else if(node.level === 8) {
      result8 = node1 || node2 || node3 || node4 || node5 || node6 || node7 || node8
    }else if(node.level === 9) {
      result9 = node1 || node2 || node3 || node4 || node5 || node6 || node7 || node8 || node9
    }else if(node.level === 10) {
      result10 = node1 || node2 || node3 || node4 || node5 || node6 || node7 || node8 || node9 || node10
    }
    return result1 || result2 || result3 || result4 || result5 || result6 || result7 || result8 || result9 || result10
  },
  // 图标
  icons(name) {
    const icons = {
      detail: "iconyanjing2",//查看
      modif: "iconpencil",//修改
      delete: "iconshanchu4",//删除
      power: "iconleixing5",//授权
      reset: "iconjianpan",// 重置
      unlock: "iconleixing5",// 解除锁定
    }
    return icons[name]
  },
  // 拼接数组内某个属性，返回字符串，默认逗号
  commaStr(arr, name, comma) {
    let list = []
    let com = this.isExist(comma) ? comma : ","
    if (arr && arr.length) {
      arr.map(item => {
        if (this.isExist(item[name])) {
          list.push(`${item[name]}`)
        }
      });
    }
    return list.join(com);
  }
}
