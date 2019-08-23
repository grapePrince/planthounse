$(function() {

  var home_url = location.href.indexOf('local') !== -1 ? location.origin : location.origin + '/planthouse';

  if($('.swiper-container').length) {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true
    });
  }

  $('.header__upper__search_btn').on('click', function() {
    $('body').addClass('js-search-opened');
    $('.layer_search').addClass('js-search--search');
  })

  $('.layer_search__back').on('click', function() {
    $('body').removeClass('js-search-opened');
    $('.layer_search').removeClass('js-search--search js-search--result--1line js-search--result--2column');
  });

  $('.layer_search__input__search, .layer_search__beforelist__item').on('click', function(e) {
    e.preventDefault();
    $('.layer_search').removeClass('js-search--search');
    $('.layer_search').addClass('js-search--result--1line');
  });

  $('.layer_search__result__view--list').on('click', function() {
    $('.layer_search').removeClass('js-search--result--2column');
    $('.layer_search').addClass('js-search--result--1line');
  });

  $('.layer_search__result__view--thumb').on('click', function() {
    $('.layer_search').removeClass('js-search--result--1line');
    $('.layer_search').addClass('js-search--result--2column');
  });

  $('.header__nav li').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('js-active');
    $(this).siblings().removeClass('js-active');
  });

  $('.product_detail__menu__item').on('click', function() {
    $(this).addClass('js-active');
    $(this).siblings().removeClass('js-active');

    $('.content').removeClass('js-content--summary js-content--detail js-content--review js-content--qa');
    $('.content').addClass($(this).attr('data-class'));
  });

  $('.product_detail__buttons__order').on('click', function() {
    $('body').addClass('js-option-opened');
  });

  $('.layer_option .dimmed_layer').on('click', function() {
    $('body').removeClass('js-option-opened');
  });

  $('.header__upper__menu_btn').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('js-left-opened');
  });
  
  $('.layer_left .dimmed_layer, .layer_left__close').on('click', function() {
    $('body').removeClass('js-left-opened');
  });

  $('.layer_left__button--login').on('click', function() {
    $('body').addClass('js-login-opened');
  });

  $('.layer_login .before_arrow').on('click', function() {
    $('body').removeClass('js-login-opened');
  });

  $('.layer_left__button--join').on('click', function() {
    $('body').addClass('js-join-opened');
  });


  $('.list__item__image, .list__item__title').on('click', function() {
    location.href = home_url + '/detail.html';
  });


  $('.header__upper__logo, .layer_left__menu__item').on('click', function(e) {
    e.preventDefault();
    location.href = home_url + $(this).attr('href');
  });


  $( "#layer_search__result__sort" ).selectmenu();
  $('#layer_option__select').selectmenu();

});
