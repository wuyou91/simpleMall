import '../../common/base.css';
import '../../common/layout.css';
import './index.css';
import jquery from 'jquery'

const $ = jquery;
$(function () {
  new Swiper('.swiper-container', {
    autoplay: {
    	disableOnInteraction: false
    },
    effect : 'fade',
    loop: true,
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
