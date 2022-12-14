//비디오팝업


$('.popupVideo a').click(function () {
    $('.video-popup').addClass('reveal'),
      $('.video-popup .video-wrapper').remove(),
      $('.video-popup').append(
        "<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data('video') + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>",
      );
  }),
  $('.video-popup-closer').click(function () {
    $('.video-popup .video-wrapper').remove(), $('.video-popup').removeClass('reveal');
  });






//스크롤이벤트

let scrollLink = document.querySelectorAll('.subNav');

scrollLink.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href');

    const sec = document.querySelectorAll('.aboutUs-event')
    for (let j = 0; j < sec.length; j++) {
      sec[j].addEventListener('click', () => {

      })
    }
  });

  const secTop = sec.offsetTop;

  window.scrollTo({
    left: 0,
    top: secTop + 100,
  });
});





//마우스이벤트



let factory = document.querySelectorAll('.factory-title');
let adress = document.querySelectorAll('.factory-adress');

factory.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('active');
  });
});

factory.forEach(item => {
  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
  });
});