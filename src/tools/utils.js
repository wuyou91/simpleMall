

'use strict';
var Hogan = require('hogan');
var conf = {
    serverHost : ''
};
var util = {
  //获取可视区的大小
  getClientSize : function(ty) {
    if(ty==="width"){
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }else if(ty==="height"){
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  },

  // 获取url参数
  getUrlParam : function(name){
      var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var result  = window.location.search.substr(1).match(reg);
      return result ? decodeURIComponent(result[2]) : null;
  },
  // 字段的验证
  validate : function(value, type){
      var value = $.trim(value);
      // 非空验证
      if('require' === type){
          return !!value;
      }
      // 手机号验证
      if('phone' === type){
          return /^1\d{10}$/.test(value);
      }
      // 邮箱格式验证
      if('email' === type){
          return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
      }
  },
  // 跳转到登陆页面
  doLogin : function(){
      window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
  },
  //回到首页
  goHome : function(){
      window.location.href = './index.html';
  }
};

module.exports = util;


