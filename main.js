
ScrollReveal().reveal('.pictureWrapper',{
  delay: 0,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.selfIntroduction', { 
  delay: 300,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('h1', { 
  delay: 0,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.canvas', { 
  delay: 200,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.fm', { 
  delay: 300,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.skillsWrapper', { 
  delay: 200,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.contentWrapper', { 
  delay: 200,
  useDelay: 'always',
  reset: true,
  distance: '20px',
  duration: 500 ,
  easing: 'ease'
})
$('.nav').on('click','li',(e)=>{
  e.preventDefault()
  $(e.currentTarget).find('.nav-item').addClass('active').parent().siblings().find('.nav-item.active').removeClass('active')
  let id = $(e.currentTarget).find('span').attr('id')
  let index = $(e.currentTarget).index()
  let element = $('main')[`${index}`]
  if(!$(element).hasClass('visible')){
    $(element).addClass('visible')
      .siblings('.visible').removeClass('visible')
  }
  ScrollReveal().reveal('.pictureWrapper', { afterReset: myCallback });
})

function myCallback (el) {
  el.classList.remove('is-animating');
}





