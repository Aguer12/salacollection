const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener ('click', () => {
    document.body.classList.toggle('nav-open');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase.indexOf('firefox') > -1;

//Cal the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if ( docHeight != 'undefined' ){
    offset = docHeight / 4;
}

//Add scroll event listener
window.addEventListener('scroll', function( event ){
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = ( scrollPos > offset ) ? "visible" : "";
});
//Add scroll event listener
btt.addEventListener('click', function( event ){
    event.preventDefault();

    if(isFirefox){
        docElem.scrollTop = 0;
    }else{
        body.scrollTop = 0;
    }
})
