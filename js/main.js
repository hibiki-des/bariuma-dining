// JavaScript Document

//swiper部分
let swiper = new Swiper('.swiper-container', {//swiper-containerに他のクラス名を加えることで同じように使える
      // 以下にオプションを設定
      loop: true,
      loopedSlides: 2,
      centeredSlides : true,
      slidesPerView: "auto",
      centeredSlides : true,
      centeredSlidesBounds : true,
      updateOnWindowResize : true,
      imagesLoaded : true,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});

//header部分
window.addEventListener("scroll", function () {
  const elm = document.querySelector(".header_container02");
  const scroll = window.pageYOffset;
  // 画面幅によってスクロール値を変更
  let scrollThreshold;
  if (window.innerWidth > 900) {
    scrollThreshold = 600;
  } 
	else if (window.innerWidth > 750) {
    scrollThreshold = 550;
  } 
	else if (window.innerWidth > 440) {
    scrollThreshold = 200;
  } 
	else {
    scrollThreshold = 350;
  }


  if (scroll > scrollThreshold) {
    elm.style.transform = "translateY(0)"; // 元の位置に戻す
    elm.style.zIndex = "5";
  } else {
    elm.style.transform = "translateY(-100px)"; // 上にずらした状態に戻す
    elm.style.zIndex = "-1";
  }
});