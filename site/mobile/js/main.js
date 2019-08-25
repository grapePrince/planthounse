$(function() {

  var home_url = location.href.indexOf('local') !== -1 ? location.origin + '/mobile' : location.origin + '/planthouse/mobile';

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

  $('.layer_search .layer_search__result__view--list').on('click', function() {
    $('.layer_search').removeClass('js-search--result--2column');
    $('.layer_search').addClass('js-search--result--1line');
  });

  $('.layer_search .layer_search__result__view--thumb').on('click', function() {
    $('.layer_search').removeClass('js-search--result--1line');
    $('.layer_search').addClass('js-search--result--2column');
  });

  $('.listpage__container .layer_search__result__view--list').on('click', function() {
    $('.listpage__container').removeClass('js-search--result--2column');
    $('.listpage__container').addClass('js-search--result--1line');
  });

  $('.listpage__container .layer_search__result__view--thumb').on('click', function() {
    $('.listpage__container').removeClass('js-search--result--1line');
    $('.listpage__container').addClass('js-search--result--2column');
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


  $('.layer_join__header__item').on('click', function() {
    $('.layer_join').removeClass('js-basic js-additional')
    $('.layer_join').addClass($(this).attr('data-tabs'));
  });

  $('.layer_join__before').on('click', function() {
    $('body').removeClass('js-join-opened');
  });

  $('.js-layer_left__menu__item--cart').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('js-cart-opened');
  });

  $('.layer_cart .layer_upper__before').on('click', function() {
    $('body').removeClass('js-cart-opened');
  });

  $('.layer_left__menu__item__icon--likelist').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('js-like-opened');
  });

  $('.layer_like .layer_upper__before').on('click', function() {
    $('body').removeClass('js-like-opened');
  });

  
  $('.list__item__image, .list__item__title').on('click', function() {
    location.href = home_url + '/detail.html';
  });


  $('.header__upper__logo, .js-layer_left__menu__item--mypage, .js-button--home, .js-button--mypage').on('click', function(e) {
    e.preventDefault();
    location.href = home_url + $(this).attr('href');
  });

  $('.main_category__item').on('click', function(e) {
    e.preventDefault();
    location.href = home_url + '/list.html';
  });

  if($('.layer_search select').length) {
    $('.layer_search select').selectmenu();
  }

  if($( "#layer_search__result__sort" ).length) {
    $( "#layer_search__result__sort" ).selectmenu();
  }
  if($('#layer_option__select').length) {
    $('#layer_option__select').selectmenu();
  }

  if(location.href.indexOf('mypage') !== -1) {
    $('.js-nav--mypage').addClass('js-active');
  } else {
    $('.js-nav--home').addClass('js-active');
  }

  $('.layer_join__button').on('click', function(e) {
    e.preventDefault();


    if($('.layer_join__button').text() === "가입하기") {
      location.href = home_url + '/index.html';
    }


    var noError = true;

    if($('.layer_join__input--email').val().length < 1) {
      noError = false;
      $('.layer_join__error--email').text('이메일을 입력해주세요');
    } else {
      $('.layer_join__error--email').text('');
    }

    if($('.layer_join__input--password').val().length < 1) {
      noError = false;
      $('.layer_join__error--password').text('비밀번호를 입력해주세요');
    } else {
      $('.layer_join__error--password').text('');
    }

    if($('.layer_join__input--nickname').val().length < 1) {
      noError = false;
      $('.layer_join__error--nickname').text('닉네임을 입력해주세요');
    } else {
      $('.layer_join__error--nickname').text('');
    }

    if(!$('#layer_join_agreement').prop("checked")) {
      noError = false;
      $('.layer_join__error--terms').text('약관에 동의해주세요');
    } else {
      $('.layer_join__error--terms').text('');
    }

    if(noError) {     
      $('.layer_join')
      .removeClass('js-basic-error')
      .removeClass('js-basic')
      .addClass('js-additional');

      $('.layer_join__button').text('가입하기');
    } else {
      $('.layer_join').addClass('js-basic-error');
    }

  });

  $('.layer_join__input--email').on('keyup', function() {
    $('.layer_join__error--email').text('');
  });
  $('.layer_join__input--password').on('keyup', function() {
    $('.layer_join__error--password').text('');
  });
  $('.layer_join__input--nickname').on('keyup', function() {
    $('.layer_join__error--nickname').text('');
    $('.layer_join_textlength').text(  $('.layer_join__input--nickname').val().length + ' / 12');
  });
  $('#layer_join_agreement').on('change', function() {
    $('.layer_join__error--terms').text('');
  });


  if(typeof moment !== "undefined") {
    calculateDDay();
    setInterval(calculateDDay, 1000);
  }


  function calculateDDay() {
    var time = moment('2019-09-30 24:00:00', 'YYYY-MM-DD HH:mm:ss');
    var now = moment();
    var diff = time.diff(now);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = addZero(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = addZero(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = addZero(Math.floor((diff % (1000 * 60)) / 1000));
  
    $('.product_detail__item__saletime__time').text(days + '일 ' + hours + ':' + minutes + ':' + seconds);
  }
  
  function addZero(num) {
    if(num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }


  function isMobileDevice() {
    if (
      /Mobi/i.test(navigator.userAgent) ||
      /Android/i.test(navigator.userAgent)
    ) {
      return true;
    } else {
      return false;
    }
  }
});
