import '../../common/base.css';
import '../../common/layout.css';
import './list.css';
import util from '../../tools/utils.js'
import jquery from 'jQuery'

const $ = jquery;

let list = {
  defaultData: [],
  init: function () {
    this.loadData()
    this.bindEvent()
  },
  loadData: function () {
    let _this = this;
    // 获取搜索关键字并回填
    let result = decodeURIComponent(window.location.search).split('=') // 解码并分割成数组
    let keyword = result[1]
    $('.search-main input').val(keyword)
    $('.content .prompt span').text(keyword)
    console.log(keyword)
    // 获取远程数据
    $.get('https://www.easy-mock.com/mock/5b2f4b320e946a3379e72c6e/app/list', function (data, status) {
      _this.defaultData = data.data;
      _this.insertProd(_this.defaultData);
    })
  },
  insertProd: function (data) {
    let prodList = $('<section class="prod-list wrap clearf"></section>')
    for (let item of data) {
      let prodBox = `<div class="prod-box">
          <img src="${item.imgURL}">
          <div class="price"><span>￥</span>${item.price}</div>
          <div class="prod-title">${item.title}</div>
      </div>`
      $(prodList).append(prodBox)
    }
    $('.prod-list').replaceWith(prodList)
  },
  bindEvent: function () {
    let _this = this;
    let count = 0; // 计数器用来保存鼠标的点击次数
    $('#sort-default').click(function () {
      $(this).attr('class', 'sort-active');
      $('#sort-price').removeClass('sort-active');
      _this.insertProd(_this.defaultData);
    });
    $('#sort-price').click(function () {
      $(this).attr('class', 'sort-active');
      $('#sort-default').removeClass('sort-active');
      if (count++ % 2 === 0) {
        // 偶数点击
        $('.fa-sort-down').css('font-size', '12px')
        $('.fa-sort-up').css('font-size', '14px')
        // 使用数组的slice()方法来复制一份数组，以sort()排序影响原数组
        let data = _this.defaultData.slice(0).sort(util.compare('price', true))
        _this.insertProd(data)
      } else {
        // 奇数点击
        $('.fa-sort-up').css('font-size', '12px')
        $('.fa-sort-down').css('font-size', '14px')
        let data = _this.defaultData.slice(0).sort(util.compare('price', false))
        _this.insertProd(data)
      }
    });
    // 搜索点击事件
    $('.search-btn').click(function () {
      _this.search($(this));
    });
    // 输入回车也提交
    $('.search-val').keyup(function (e) {
      if (e.keyCode === 13) {
        _this.search($(this).siblings('button'));
      }
    });
  },
  // search提交功能
  search: function (btn) {
    let keyword = btn.siblings('input').val()
    if (keyword) {
      window.location.href = `./list.html?keyword=${keyword}`
    } else {
      window.location.href = './index.html'
    }
  }
};

$(function () {
  list.init()
})
