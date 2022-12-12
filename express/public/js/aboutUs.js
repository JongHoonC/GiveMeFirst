$(".popupVideo a").click(function () {
    $(".video-popup").addClass("reveal"),
      $(".video-popup .video-wrapper").remove(),
      $(".video-popup").append(
        "<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this)
        .data("video") +
        "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  }),
  $(".video-popup-closer").click(function () {
    $(".video-popup .video-wrapper").remove(),
      $(".video-popup").removeClass("reveal")
  });





// let sec2 = document.querySelector('#aboutUs-intro');
// console.log(sec2);

// let sec2off = sec2.offsetTop;
// // console.log(sec2off);
// const fNav = document.querySelector('.subnav');
// const navHeight = fNav.getBoundingClientRect().height; //태그 안에 값을 찾을 때 get~~ 
// //nav의 height 값을 찾아 주는고 
// console.log(navHeight);


let scrollLink = document.querySelectorAll('.subNav');

scrollLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href')

    const sec = document.querySelector(id);

    const secTop = sec.offsetTop;

    window.scrollTo({

      left: 0,
      top: secTop
    })
  })
});