

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
  // ajax请求
  request : function(param){
      var _this = this;
      $.ajax({
          type        : param.method  || 'get',
          url         : param.url     || '',
          dataType    : param.type    || 'json',
          data        : param.data    || '',
          success     : function(res){
              // 请求成功
              if(0 === res.status){
                  typeof param.success === 'function' && param.success(res.data, res.msg);
              }
              // 没有登录状态，需要强制登录
              else if(10 === res.status){
                  _this.doLogin();
              }
              // 请求数据错误
              else if(1 === res.status){
                  typeof param.error === 'function' && param.error(res.msg);
              }
          },
          error       : function(err){
              typeof param.error === 'function' && param.error(err.statusText);
          }
      });
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


