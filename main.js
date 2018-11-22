$('.nav').on('click','li',(e)=>{
  $(e.currentTarget).find('.nav-item').addClass('active').parent().siblings().find('.nav-item.active').removeClass('active')
})