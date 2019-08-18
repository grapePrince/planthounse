$(function() {

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true
  });


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

  $( "#layer_search__result__sort" ).selectmenu();
  
  $('.list__item__image, .list__item__title').on('click', function() {
    location.href = '/detail.html';
  });

});