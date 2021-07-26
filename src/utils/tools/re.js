//正则参考
const ocRegExp = {
  //手机号码验证
  Phone: /^0?(13|14|15|16|17|18|19)[0-9]{9}$/,

  //身份证号码验证
  IdCard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,

  //只允许字母和数字还有下划线
  letterNumber: [
    { pattern: /^[a-zA-Z0-9_]*$/, message: '编号格式错误' }
  ],

  // 车牌号码
  carNumber: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1,2}$/,

  //派车单编号（必须包含大写字母+数字,14位）
  money: /^[0-9]+(\.[0-9]{1,2})?$/,
}

export default ocRegExp