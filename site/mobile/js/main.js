$(function() {

  if(location.href.indexOf('rahata.dothome.co.kr') !== -1) {
    var home_url = location.origin + '/planthouse/mobile';
  } else if (location.href.indexOf('file') !== -1) {
    var home_urls = location.href.split('/');
    home_urls = home_urls.splice(0, home_urls.length - 1);
    var home_url = home_urls.join('/');
  } else {
    var home_url = location.origin + '/mobile';
  }
  console.log(home_url);

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
    $('.layer_left').addClass('js-active');
  });
  
  $('.layer_left .dimmed_layer, .layer_left__close').on('click', function() {
    $('body').removeClass('js-left-opened');
    $('.layer_left').removeClass('js-active');
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

  $('.list__item__button--like').on('click', function() {
    $(this).toggleClass('js-active');
  });

  $('.js-cart-plus-button').on('click', function(e) {
    var $parent = $(this).parent();
    var $input = $parent.find('.number_updown__input');
    var $text = $parent.parent().find('.number_updown__text');

    var number = Number($input.val());
    number += 1;
    $input.val(number);
    $text.text(number + '개');
  });

  $('.js-cart-minus-button').on('click', function() {
    var $parent = $(this).parent();
    var $input = $parent.find('.number_updown__input');
    var $text = $parent.parent().find('.number_updown__text');
    var number = Number($input.val());
    number -= 1;
    number = Math.max(1, number);
    $input.val(number);
    $text.text(number + '개');
  });
 
  $('.layer_like .layer_list__item__checkbox input').on('change', function() {
    setTimeout(function() {
      var all_checked = true;
      if(!$('#layer_list__item__checkbox--like_1').prop('checked')) {
        all_checked = false;
      }
      if(!$('#layer_list__item__checkbox--like_2').prop('checked')) {
        all_checked = false;
      }
      if(!$('#layer_list__item__checkbox--like_3').prop('checked')) {
        all_checked = false;
      }
      if(all_checked) {
        $('#layer_like__select_all').prop('checked', true);
      }

    }, 100);
    
  });

  $('#layer_like__select_all').on('change', function() {
    if($('#layer_like__select_all').prop('checked')) {
      $('#layer_list__item__checkbox--like_1').prop('checked', true);
      $('#layer_list__item__checkbox--like_2').prop('checked', true);
      $('#layer_list__item__checkbox--like_3').prop('checked', true);
    } else {
      $('#layer_list__item__checkbox--like_1').prop('checked', false);
      $('#layer_list__item__checkbox--like_2').prop('checked', false);
      $('#layer_list__item__checkbox--like_3').prop('checked', false);
    };
  });

  $('.layer_cart .layer_list__item__checkbox input').on('change', function() {
    setTimeout(function() {
      var all_checked = true;
      if(!$('#layer_list__item__checkbox--cart_1').prop('checked')) {
        all_checked = false;
      }
      if(!$('#layer_list__item__checkbox--cart_2').prop('checked')) {
        all_checked = false;
      }
      if(!$('#layer_list__item__checkbox--cart_3').prop('checked')) {
        all_checked = false;
      }
      if(all_checked) {
        $('#layer_cart__select_all').prop('checked', true);
      }

    }, 100);
    
  });

  $('#layer_cart__select_all').on('change', function() {
    if($('#layer_cart__select_all').prop('checked')) {
      $('#layer_list__item__checkbox--cart_1').prop('checked', true);
      $('#layer_list__item__checkbox--cart_2').prop('checked', true);
      $('#layer_list__item__checkbox--cart_3').prop('checked', true);
    } else {
      $('#layer_list__item__checkbox--cart_1').prop('checked', false);
      $('#layer_list__item__checkbox--cart_2').prop('checked', false);
      $('#layer_list__item__checkbox--cart_3').prop('checked', false);
    };
  });

  $('.layer_login__button').on('click', function(e) {
    e.preventDefault();
    var noerror = true;
    if($('.layer_login__password').val().length < 1) {
      $('.layer_login__error').text('패스워드를 확인해주세요');
      noerror = false;
    }
    if($('.layer_login__email').val().length < 1) {
      $('.layer_login__error').text('이메일을 확인해주세요');
      noerror = false;
    }
    if(noerror) {
      $('.layer_login__error').text();  
      location.href = home_url + '/index.html';

    }
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

  $('.layer_left__submenu__item, .layer_left__category').on('click', function(e) {
    e.preventDefault();
    location.href = home_url + '/list.html';
  });

  $('.mypage__mymenu__item--likelist').on('click', function(e) {
    $('body').addClass('js-like-opened');
  })

  if($('.layer_search select').length) {
    $('.layer_search select').selectmenu();
  }

  if($( "#layer_search__result__sort--page" ).length) {
    $( "#layer_search__result__sort--page" ).selectmenu();
  }
  if($('#layer_option__select').length) {
    $('#layer_option__select').selectmenu();
  }

  if(location.href.indexOf('mypage') !== -1) {
    $('.js-nav--mypage').addClass('js-active');
  } else {
    $('.js-nav--home').addClass('js-active');
  }


  function validateJoin() {
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

    return noError;
    
  }

  $('.layer_join__button').on('click', function(e) {
    e.preventDefault();
    if($('.layer_join__button').text() === "가입하기") {
      location.href = home_url + '/index.html';
    }
    var noError = validateJoin();
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
    noError = validateJoin();
    if(noError) {     
      $('.layer_join')
      .removeClass('js-basic-error');
    } 
  });
  $('.layer_join__input--password').on('keyup', function() {
    $('.layer_join__error--password').text('');
    noError = validateJoin();
    if(noError) {     
      $('.layer_join')
      .removeClass('js-basic-error');
    } 
  });
  $('.layer_join__input--nickname').on('keyup', function() {
    $('.layer_join__error--nickname').text('');
    $('.layer_join_textlength').text(  $('.layer_join__input--nickname').val().length + ' / 12');
    noError = validateJoin();
    if(noError) {     
      $('.layer_join')
      .removeClass('js-basic-error');
    } 
  });
  $('#layer_join_agreement').on('change', function() {
    $('.layer_join__error--terms').text('');
    noError = validateJoin();
    if(noError) {     
      $('.layer_join')
      .removeClass('js-basic-error');
    } 
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
