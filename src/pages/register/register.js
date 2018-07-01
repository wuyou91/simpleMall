import '../../common/base.css';
import '../../common/layout.css';
import './register.css';
import jquery from 'jQuery'
import util from '../../tools/utils.js'

const $ = jquery;

let register = {
  init: function () {
    this.bindEvent()
  },
  bindEvent: function () {
    let regInfo = {
      name: '',
      password: '',
      dbpassword: ''
    };
    let username = false;
    let password = false;
    let dbpassword = false;
    // 用户名验证
    $('.name').blur(function () {
      regInfo.name = $(this).val();
      if (util.validate(regInfo.name, 'require')) {
        $('.username span').text('')
        $('.username i').removeClass('fa-exclamation-circle').addClass(' fa-check-circle')
        username = true
      } else {
        $('.username i').removeClass(' fa-check-circle').addClass('fa-exclamation-circle')
        $('.username span').text('用户名不能为空')
        username = false
      }
    });
    // 密码验证
    $('.pass').blur(function () {
      regInfo.password = $(this).val();
      if (!util.validate(regInfo.password, 'require')) {
        $('.password i').removeClass(' fa-check-circle').addClass('fa-exclamation-circle')
        $('.password span').text('请输入密码')
        password = false
      } else if (regInfo.password.length < 6) {
        $('.password i').removeClass(' fa-check-circle').addClass('fa-exclamation-circle')
        $('.password span').text('密码必须是6位以上')
        password = false
      } else {
        $('.password span').text('')
        $('.password i').removeClass('fa-exclamation-circle').addClass(' fa-check-circle')
        password = true
      }
    });
    // 验证在此输入密码
    $('.dbpass').blur(function () {
      regInfo.dbpassword = $(this).val();
      if (!util.validate(regInfo.dbpassword, 'require')) {
        $('.dbpassword i').removeClass(' fa-check-circle').addClass('fa-exclamation-circle')
        $('.dbpassword span').text('请确认密码')
        dbpassword = false
      } else if (regInfo.dbpassword !== regInfo.password) {
        $('.dbpassword i').removeClass(' fa-check-circle').addClass('fa-exclamation-circle')
        $('.dbpassword span').text('两次输入的密码不一致')
        dbpassword = false
      } else if (regInfo.dbpassword === regInfo.password) {
        $('.dbpassword span').text('')
        $('.dbpassword i').removeClass('fa-exclamation-circle').addClass(' fa-check-circle')
        dbpassword = true
      }
    });
    // 提交注册
    $('#register-btn').click(function () {
      if (username && password && dbpassword) {
        window.location.href = './prompt.html'
      }
    })
  }
};

$(function () {
  register.init()
})
