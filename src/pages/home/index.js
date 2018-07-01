import '../../common/base.css';
import '../../common/layout.css';
import './index.css';
import jquery from 'jQuery'
import util from '../../tools/utils.js'

const $ = jquery;

let home = {
  data: null,
  lock: [true, true, true, true, true],
  init: function () {
    this.onLoad();
    this.showNav();
    this.bindEvent();
  },
  onLoad: function () {
    let _this = this;
    $.ajax({
      url: 'https://www.easy-mock.com/mock/5b2f4b320e946a3379e72c6e/app/',
      success: function (res) {
        if (res.res && res.res === 'suc') {
          _this.data = res.data;
          _this.loadProd();
          _this.onScroll();
        }
      }
    })
  },
  bindEvent: function () {
    let _this = this;
    $('.search-btn').click(function () {
      _this.search($(this));
    });
    $('.search-btn-top').click(function () {
      _this.search($(this));
    });
    $('.search-val').keyup(function (e) {
      if (e.keyCode === 13) {
        _this.search($(this).siblings('button'));
      }
    });
    $('.search-val-top').keyup(function (e) {
      if (e.keyCode === 13) {
        _this.search($(this).siblings('button'));
      }
    })
  },
  // search功能
  search: function (btn) {
    let keyword = btn.siblings('input').val()
    if (keyword) {
      window.location.href = `./list.html?keyword=${keyword}`
    } else {
      window.location.href = './index.html'
    }
  },
  // 滚动延时加载
  onScroll: function () {
    let _this = this;
    $(window).scroll(function () {
      _this.loadProd();
      _this.showNav()
    })
  },
  loadProd: function () {
    this.loadBeauty();
    this.loadGrocery();
    this.loadOutdoors();
    this.loadElectronics();
    this.loadMayLike();
  },
  // 加载美丽人生部分
  loadBeauty: function () {
    let cHeight = util.getClientSize('height')
    let distance = $('#beauty').offset().top - ($(window).scrollTop() + cHeight)
    if (distance <= 0 && this.lock[0]) {
      let beauty = this.data.bea;
      $('#beauty .content-header .chinese').html(beauty.title);
      $('#beauty .content-header .en').html(beauty.desc);
      let $list = $('#beauty .content-header .list');
      for (let item of beauty.nav) {
        $list.append('<li>' + item + '</li>')
      };
      $('#beauty .brand .l').html(beauty.brand.title);
      $('#beauty .brand .r').html(beauty.brand.desc);
      $('#beauty .brand').css({
        'background': 'url(' + beauty.brand.imgUrl + ') no-repeat',
        'background-size': 'cover'
      });
      let $prodList = $('#beauty .prod .prod-list');
      for (let item of beauty.prod) {
        $prodList.append('<div class="prod-list-item prod-item"><img src="' + item.imgURL + '"><div class="prod-title">' + item.title + '</div><div class="prod-price">￥' + item.price + '</div></div>')
      };
      this.lock[0] = false;
    }
  },
  // 加载家居生活部分
  loadGrocery: function () {
    let cHeight = util.getClientSize('height')
    let distance = $('#grocery').offset().top - ($(window).scrollTop() + cHeight)
    if (distance <= 0 && this.lock[1]) {
      let grocery = this.data.gro;
      $('#grocery .content-header .chinese').html(grocery.title);
      $('#grocery .content-header .en').html(grocery.desc);
      let $list = $('#grocery .content-header .list');
      for (let item of grocery.nav) {
        $list.append('<li>' + item + '</li>')
      };
      $('#grocery .brand .l').html(grocery.brand.title);
      $('#grocery .brand .r').html(grocery.brand.desc);
      $('#grocery .brand').css({
        'background': 'url(' + grocery.brand.imgUrl + ') no-repeat',
        'background-size': 'cover'
      });
      let $prodList = $('#grocery .prod .prod-list');
      for (let item of grocery.prod) {
        $prodList.append('<div class="prod-list-item prod-item"><img src="' + item.imgURL + '"><div class="prod-title">' + item.title + '</div><div class="prod-price">￥' + item.price + '</div></div>')
      };
      this.lock[1] = false;
    }
  },
  // 加载户外出行部分
  loadOutdoors: function () {
    let cHeight = util.getClientSize('height')
    let distance = $('#outdoor').offset().top - ($(window).scrollTop() + cHeight)
    if (distance <= 0 && this.lock[2]) {
      let outdoor = this.data.out;
      $('#outdoor .content-header .chinese').html(outdoor.title);
      $('#outdoor .content-header .en').html(outdoor.desc);
      let $list = $('#outdoor .content-header .list');
      for (let item of outdoor.nav) {
        $list.append('<li>' + item + '</li>')
      };
      $('#outdoor .brand .l').html(outdoor.brand.title);
      $('#outdoor .brand .r').html(outdoor.brand.desc);
      $('#outdoor .brand').css({
        'background': 'url(' + outdoor.brand.imgUrl + ') no-repeat',
        'background-size': 'cover'
      });
      let $prodList = $('#outdoor .prod .prod-list');
      for (let item of outdoor.prod) {
        $prodList.append('<div class="prod-list-item prod-item"><img src="' + item.imgURL + '"><div class="prod-title">' + item.title + '</div><div class="prod-price">￥' + item.price + '</div></div>')
      };
      this.lock[2] = false;
    }
  },
  // 加载潮电酷玩部分
  loadElectronics: function () {
    let cHeight = util.getClientSize('height')
    let distance = $('#electronic').offset().top - ($(window).scrollTop() + cHeight)
    if (distance <= 0 && this.lock[3]) {
      let electronic = this.data.elec;
      $('#electronic .content-header .chinese').html(electronic.title);
      $('#electronic .content-header .en').html(electronic.desc);
      let $list = $('#electronic .content-header .list');
      for (let item of electronic.nav) {
        $list.append('<li>' + item + '</li>')
      };
      $('#electronic .brand .l').html(electronic.brand.title);
      $('#electronic .brand .r').html(electronic.brand.desc);
      $('#electronic .brand').css({
        'background': 'url(' + electronic.brand.imgUrl + ') no-repeat',
        'background-size': 'cover'
      });
      let $prodList = $('#electronic .prod .prod-list');
      for (let item of electronic.prod) {
        $prodList.append('<div class="prod-list-item prod-item"><img src="' + item.imgURL + '"><div class="prod-title">' + item.title + '</div><div class="prod-price">￥' + item.price + '</div></div>')
      };
      this.lock[3] = false;
    }
  },
  // 加载猜你喜欢玩部分
  loadMayLike: function () {
    let cHeight = util.getClientSize('height')
    let distance = $('#maylike').offset().top - ($(window).scrollTop() + cHeight)
    if (distance <= 0 && this.lock[4]) {
      let mayLike = this.data.maylike;
      let $prodList = $('#maylike .maylike-prod')
      for (let item of mayLike) {
        $prodList.append('<div class="maylike-prod-box"><div class="maylike-prod-item prod-item"><img src="' + item.imgURL + '"><div class="prod-title">' + item.title + '</div><div class="prod-price">￥' + item.price + '</div></div></div>')
      };
      this.lock[4] = false;
    }
  },
  // 显示与隐藏侧边导航和顶部导航
  showNav: function () {
    let sTop = $(window).scrollTop();
    if (sTop > 600) {
      $('#side-nav,#top-nav').show()
    } else {
      $('#side-nav,#top-nav').hide()
    }
  }
}

$(function () {
  // 页面初始化
  home.init();

  // Swiper
  new Swiper('.swiper-container', {
    autoplay: {
      disableOnInteraction: false
    },
    effect: 'fade',
    loop: true,
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
