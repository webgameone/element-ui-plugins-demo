//请求接口
import request from '@/utils/request'

//查询所有选项表明细
export function getAllDetailList(params) {
  return request({
    url: '/ums/tableSimpleDetail/queryTableSimpleDetailAll',
    method: 'get',
    params
  })
}

//查询所有网点数据,根据type去获取
// 示例：{type:T_STAT}
// 所有网点：T_STAT
// 当前网点下属所有：T_STAT_UNDER

export function getQueryStatAll(params) {
  return request({
    url: '/ums/stat/queryStatTable',
    method: 'get',
    params
  })
}

//所属公司和部门
export function requestGetOrgListByLoginId(params) {
  return request({
    url: '/ums/org/getOrgListByLoginId',
    method: 'get',
    params
  })
}

//账户编码
// 所有账户：'T_ACCOUNT'
// 预付款帐户：'T_STAT_PAY'
export function requestPayAccount(params) {
  return request({
    url: '/bms/account/queryAccountTable',
    method: 'get',
    params
  })
}

//根据账户类型解析账户名
export function requestPayAccountAll(params) {
  return new Promise(resolve => {
    requestPayAccount(params).then(res => {
      if (res && res.length) {
        let baseData = localStorage.getItem("baseData");
        if (baseData) {
          baseData = JSON.parse(baseData);
          res.map(item => {
            item.accoutTypeName = baseData.B_ACCOUNT_TYPE.filter(it => {
              return it.fieldNo == item.accoutType
            })[0].fieldName
          })
        }
        resolve(res);
      } else {
        resolve([]);
      }
    });
  });
}

// 省市区
export function requestDestStrAll(params) {
  return request({
    url: '/ums/dest/queryDestStrAll',
    method: 'get',
    params
  })
}

//角色树授权
export function requestAllRole(params) {
  return request({
    url: '/ums/role/all',
    method: 'get',
    params
  })
}


//全部职位-下拉列表
export function requestAllJob(params) {
  return request({
    url: '/ums/job/getJobListByCompanyId',
    method: 'get',
    params
  })
}


//全部 岗位-下拉列表
export function requestAllPostList(params) {
  return request({
    url: '/ums/post/getPostListByCompanyIdAndDeptId',
    method: 'get',
    params
  })
}

//归属组织
export function requestOrgAll(params) {
  return request({
    url: '/ums/org/queryOrgAll',
    method: 'get',
    params
  })
}
