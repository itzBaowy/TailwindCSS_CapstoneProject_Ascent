//--------- start according
const accordingItem = document.querySelectorAll ('.according-item');
const accordingBtn = document.querySelectorAll ('.according-btn');
accordingBtn.forEach ((item, index) => {
  item.addEventListener ('click', event => {
    accordingItem.forEach (item => {
      item.setAttribute ('data-open', 'false');
      item.classList.remove ('active-accor');
    });
    event.currentTarget.parentNode.setAttribute ('data-open', 'true');
    item.classList.add ('active-accor');
  });
});
//--------- according end

// scroll top top on button click start
const scroll_up = document.getElementById ('scroll-up');
scroll_up.addEventListener ('click', () => {
  window.scrollTo ({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
// scroll top top on button click end

const testimonial = new Swiper ('.testimonial-swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1280: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  },
  // pagination: {
  //     el: ".testimonial-pagination",
  //     clickable: true
  // },
});

new WOW ().init ();
