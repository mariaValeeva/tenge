//Открытие блока с картой
let address = document.querySelector('.hero__address-link');
let mapBlock = document.querySelector('.map');

address.addEventListener('mouseover', ()=> {
    mapBlock.classList.remove('display-none');
    address.style.opacity = '0';
});

address.addEventListener('mousemove', ()=> {
    mapBlock.classList.remove('display-none');
});

address.addEventListener('mouseout', ()=> {
    mapBlock.classList.add('display-none');
    address.style.opacity = '1';
});


// Письмо по Email ссылке
let mail = document.querySelector('.hero__email');
let letterPic = document.querySelector('.hero__letter-pic');

mail.addEventListener('mouseover', () => {
  letterPic.style.opacity = '1';
    letterPic.style.transform = "translateY(0px)";
});

mail.addEventListener('mouseout', () => {
    letterPic.style.transform = "translateY(3000px)";
    letterPic.style.opacity = '0';
});


//Форма-кнопка
let forma = document.querySelector('.footer__forma');
let formaBtn = document.querySelector('.footer__btn');

forma.addEventListener('submit', function(event) {
    event.preventDefault();
    console.dir(event);
    formaBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M416 128L192 384l-96-96"/></svg>';
});


//Всплывающий блок 'Больше информации'
let btnMoreInfo = document.querySelector('.about-us__link-two');
let moreInfo = document.querySelector('.more-info');

btnMoreInfo.addEventListener('mouseover', ()=> {
  moreInfo.style.transform = 'translateY(-50px)';
});

btnMoreInfo.addEventListener('mouseout', ()=> {
  moreInfo.style.transform = 'translateY(-5000px)';
});


//Секция активы - слайдер - подключение через swiper js
const swiper = new Swiper('.actives__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 5.5, 
    spaceBetween: 30,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1440: {
        slidesPerView: 5.5, 
        spaceBetween: 30,
      }
    }
  });


  //Всплывающее окно - информация про пиццу
  let pizzaPic = document.getElementById('pizza-open');
  let pizzaBlog = document.querySelector('.pizza__info');
    let pizzaCloseBtn = document.querySelector('.pizza__info__btn');

  pizzaPic.addEventListener('click', ()=> {
    pizzaBlog.classList.remove('display-none');
  });

  pizzaCloseBtn.addEventListener('click', ()=>{
    pizzaBlog.classList.add('display-none');
  })







