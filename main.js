!function(){
  ScrollReveal().reveal('.picture',{
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
    delay: 300,
    useDelay: 'always',
    reset: true,
    distance: '0',
    duration: 500 ,
    easing: 'ease'
  })
  // 点击菜单
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    e.preventDefault()
    $hamburger.toggleClass("is-active")
    $('.aside').toggleClass('active')
    if($('.mask').hasClass('active')){
      $('.mask').removeClass('active')
      $('.nav').removeClass('active')
      $('.footerContainer').removeClass('active')
    }else{
      $('.mask').addClass('active')
      $('.nav').addClass('active')
      $('.footerContainer').addClass('active')
    }
  });
  
  // 点击 mask
  $('.mask').on('click',(e)=>{
    if($('.mask').hasClass('active')){
      $('.mask').removeClass('active')
      $('.aside').removeClass('active')
      $hamburger.removeClass('is-active')
      $('.nav').removeClass('active')
      $('.footerContainer').removeClass('active')
    }
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
    ScrollReveal().reveal('.picture', { afterReset: myCallback })
    setTimeout(()=>{removeClass()},300)
  })
  
  function myCallback (el) {
    el.classList.remove('is-animating')
  }
  
  function removeClass(){
    if(!$('.aside').hasClass('ative')){
      $('.aside').removeClass('active')
      $('.nav').removeClass('active')
      $('.footerContainer').removeClass('active')
      $('.mask').removeClass('active')
      $hamburger.removeClass('is-active')
    }
  }
}.call()





