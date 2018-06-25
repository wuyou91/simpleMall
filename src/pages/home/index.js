import '../../common/base.css';
import '../../common/layout.css';
import './index.css';
import jquery from 'jQuery'

const $ = jquery;

let home = {
  init: function () {
    this.onLoad();
  },
  onLoad: function () {
    let _this = this;
    $.ajax({
      url: 'https://www.easy-mock.com/mock/5b2f4b320e946a3379e72c6e/app/',
      success: function (res) {
        if (res.res && res.res === 'suc') {
          _this.loadProd(res.data);
        }
      }
    })
  },
  loadProd: function (data) {
    let beauty = data.bea;
    $('#beauty .content-header .chinese').html(beauty.title);
    $('#beauty .  content-header .en').html(beauty.desc);
    let $list = $('#beauty .content-header .list');
    for (let item of beauty.nav) {
      $list.append('<li>' + item + '</li>')
    };
    $('#beauty .brand .l').html(beauty.brand.title);
    $('#beauty .brand .r').html(beauty.brand.desc);
    $('#beauty .brand').css({
      'background': 'url(' + beauty.brand.imgUrl + ') no-repeat',
      'background-size': 'cover'
    })
  }
}

$(function () {
  home.init();
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
