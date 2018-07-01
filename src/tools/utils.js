import jquery from 'jQuery';
const $ = jquery;

var util = {
  // 获取可视区的大小
  getClientSize: function (ty) {
    if (ty === 'width') {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    } else if (ty === 'height') {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  // 比较函数-根据对象中的某一项的值，排序数组，key为依据排序的项，ascend为布尔值，true表示升序，false表示降序
  compare: function (key, ascend) {
    return function (a, b) {
      var value1 = a[key];
      var value2 = b[key];
      if (ascend) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    }
  },
  // 字段的验证
  validate: function (value, type) {
    value = $.trim(value);
    // 非空验证
    if (type === 'require') {
      return !!value;
    }
    // 手机号验证
    if (type === 'phone') {
      return /^1\d{10}$/.test(value);
    }
    // 邮箱格式验证
    if (type === 'email') {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }
  },
  // 跳转到登陆页面
  doLogin: function () {
    window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
  },
  // 回到首页
  goHome: function () {
    window.location.href = './index.html';
  }
};

export default util;
