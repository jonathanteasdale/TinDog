const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }

    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }



/*

window.addEventListener('scroll', function() {
  var content = document.querySelector('.slide-in');
  var contentPosition = content.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (contentPosition < screenHeight) {
    content.classList.add('slide-in-active');
  }
});







const slideIn = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  slideIn.forEach(slide => {
    const slideInAt = (window.scrollY + window.innerHeight) - slide.height / 2;
    const imageBottom = slide.offsetTop + slide.height;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
*/
