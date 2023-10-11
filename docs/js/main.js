
(function() {

  // Бургер
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body__opened-menu')) {
      document.body.classList.add('body__opened-menu')
    } else {
      document.body.classList.remove('body__opened-menu')
    }

  }


  // Модалка
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".about__img-button");

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e){
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e){
    e.preventDefault()

    const target = e.target

    if(target.closest('.modal__cancel') || target.classList.contains('modal')){
      document.body.classList.remove('body--opened-modal')
    }
  }

  // Табы
    const tabControl = document.querySelector('.tab-control')
    tabControl.addEventListener('click', toggleTab)

    function toggleTab(e){
      const tabControl = e.target.closest('.tab-control__link')
      
      if(!tabControl) return

      e.preventDefault()

      if(tabControl.classList.contains('tab-control__link--active')) return


      const tabContentID = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentID)
      const activControl = document.querySelector('.tab-control__link--active')
      const activContent = document.querySelector('.tab-content--show')

      if (activControl){
        activControl.classList.remove('tab-control__link--active')
      }
      if (activContent){
        activContent.classList.remove('tab-content--show')
      }
      
      tabControl.classList.add('tab-control__link--active')
      tabContent.classList.add('tab-content--show')

    }

    // Аккордион
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

      // Слайдер
      const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,
      
        pagination: {
          el: '.gallery__pagination',
          type: 'fraction'
        },
      
    
        navigation: {
          nextEl: '.gallery__next',
          prevEl: '.gallery__prev',
        },
    
    
        breakpoints: {
          451: {
            slidesPerView: 2,
          },

          601: {
            slidesPerView: 3,
          },

          801: {
            spaceBetween: 32,
          },

          1101: {
            slidesPerView: 4,
          }
        }
      });


      // Слайдер-отзывы
        new Swiper('.testimonials__slider', {
        spaceBetween:0,
        slidesPerView: 1,
        centeredSlides: true,
      
        navigation: {
          nextEl: '.testimonials__next',
          prevEl: '.testimonials__prev',
        },

        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },

        breakpoints: {
          901: {
            slidesPerView: 1.5,
          },

          1201: {
            slidesPerView: 2.1,
          },

        }
      });

      // Маска для телефона

    const telInputs = document.querySelector('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()



