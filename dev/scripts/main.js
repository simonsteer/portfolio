const portfolio = {}

portfolio.page = 'home';

portfolio.replaceContent = () => {
  $('header a').on('click', function() {
    portfolio.page = $(this).text()
    console.log(portfolio.page)
    if (portfolio.page !== 'home') {
      $('header').addClass('header__alt');
    }
  })
}

portfolio.scrollAnimations = () => {
  $('.projects figure').each(function() {
      let el = $(this)
      $(window).scroll(() => {
        let topOffset = el.offset().top
        let trigger = topOffset;
        let position = $(window).scrollTop() + ($(window).height()/1.3);
        if (position >= trigger) {
          $(this).addClass('fade-in')
        }
        if (position < trigger) {
          $(this).removeClass('fade-in')
        }
    })
  });
}

portfolio.floatLogo = () => {
  $(window).on('mousemove', function (e) {
    let x = (e.clientX / $(window).width());
    let y = (e.clientY / $(window).height());
    $('.header__logo')
      .css('transform', `translate(${x}rem, ${y}rem)`)
  })
}

portfolio.init = () => {
  portfolio.replaceContent();
  portfolio.floatLogo();
  portfolio.scrollAnimations();
}

$(function () {
  portfolio.init()
});