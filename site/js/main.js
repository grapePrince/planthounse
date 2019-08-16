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
  })

  $('.layer_search__back').on('click', function() {
    $('body').removeClass('js-search-opened');
    $('.layer_search').removeClass('js-search-result js-search-result--list');
  });

  $('.layer_search__input__search, .layer_search__beforelist__item').on('click', function(e) {
    e.preventDefault();
    $('.layer_search').addClass('js-search-result js-search-result--list');
  });

  $( "#layer_search__result__sort" ).selectmenu();

});