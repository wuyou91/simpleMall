import '../../common/base.css';
import '../../common/layout.css';
import './login.css';
import jquery from 'jQuery'
import util from '../../tools/utils.js'

const $ = jquery;

let login = {
  init: function () {
    this.bindEvent()
  },
  bindEvent: function () {
    let _this = this;
    // 输入框获取焦点添加高亮边框
    $('.login-field').focus(function () {
      $(this).parent().css('outline', '1px solid #8080ff')
    });
    // 输入框失去焦点移除高亮边框
    $('.login-field').blur(function () {
      $(this).parent().css('outline', 'none')
    });
    // 点击按钮提交表单
    $('.login-btn').click(function () {
      _this.submit()
    });
    // 在输入矿按下回车也提交表单
    $('.login-field').keyup(function (e) {
      if (e.keyCode === 13) {
        _this.submit()
      }
    });
  },
  // 提交表单
  submit: function () {
    // 获取用户输入的用户名和密码
    let formData = {
      username: $.trim($('#name').val()),
      password: $.trim($('#pass').val())
    };
    // 将获取的数据进行验证，并把返回的验证结果赋给变量
    let validateResult = this.validate(formData);
    // 如果验证成功
    if (validateResult.status) {
      util.setCookie('user', formData);
      window.location.href = './index.html';
    } else {
      // 验证失败
      $('.warning').show().find('span').text(validateResult.msg)
    }
  },
  // 验证表单数据
  validate: function (formData) {
    let userInfo = localStorage.getItem('userInfo');
    console.log(userInfo.name);
    // 校验完，返回的数据
    let result = {
      status: false,
      msg: ''
    };
    if (!util.validate(formData.username, 'require')) {
      result.msg = '用户名不能为空';
      return result;
    } else if (!util.validate(formData.password, 'require')) {
      result.msg = '密码不能为空';
      return result;
    } else if (formData.username !== userInfo.name || formData.password !== userInfo.password) {
      result.msg = '你输入的密码和账户名不匹配，请重新输入';
      return result;
    } else {
      // 验证通过
      result.status = true;
      result.msg = '验证通过';
      return result;
    }
  }
};

$(function () {
  login.init()
})
