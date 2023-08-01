const data = [
  {
    id: 1,
    src: 'colleague.jpg',
    alt: '동료',
  },
  {
    id: 2,
    src: 'growth.jpg',
    alt: '운영진과 함께 성장',
  },
  {
    id: 3,
    src: 'retrospect.jpg',
    alt: '완주',
  },
];

const btns = document.querySelectorAll('button');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');

window.onload = function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
    parrallex: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      bulletClass: 'bullet',
      bulletActiveClass: 'is-active',
      renderBullet: function (index, className) {
        return /* html */ `
        <span class="${className}">
          <img src="./assets/images/${data[index].src}" alt="" />
        </span>
      `;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      if (event.target.classList.contains('stop')) {
        stopBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
        swiper.autoplay.stop();
      } else if (event.target.classList.contains('play')) {
        playBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');
        swiper.autoplay.start();
      }
    });
  });

  nextBtn.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      swiper.slideNext();
    }
  });

  prevBtn.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      swiper.slidePrev();
    }
  });
};
