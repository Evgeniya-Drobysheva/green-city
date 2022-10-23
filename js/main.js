// Rotate text

const text = document.querySelector(".text p");
    text.innerHTML = text.innerText.split("").map((letter, i) =>
    `<span style="transform:rotate(${i * 12.2}deg")>${letter}</span>`
    )
    .join("");

// Sliders    

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
      
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },

    280: {
      slidesPerView: 1
    }
  }
}); 

const followSwiper = new Swiper('.follow-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
      
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next_follow',
    prevEl: '.swiper-button-prev_follow',
  },

  breakpoints: {
    920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    572: {
      slidesPerView: 2
    },

    320: {
      slidesPerView: 1
    },

    280: {
      slidesPerView: 1
    }
  }
}); 

// Marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }

// Animation
const wow = new WOW({
  boxClass: 'wow', 
  animateClass: 'animate__animated', 
  // offset: 30, 
  mobile: true, 
  live: true 
})
  wow.init(); 
  
// Mobile menu

$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}
