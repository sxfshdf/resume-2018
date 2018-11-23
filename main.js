ScrollReveal().reveal('.pictureWrapper',{
  delay: 0,
  useDelay: 'onload',
  reset: true,
  distance: '50px',
  duration: 500 ,
  easing: 'ease'
})
ScrollReveal().reveal('.selfIntroduction', { 
  delay: 300,
  useDelay: 'onload',
  reset: true,
  distance: '50px',
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
})


