$(document).ready(function() {
  $(window).on('load', function() {
    $('.form-challenge').show();
    $('.display').hide();
    $('.sub-section')
      .children()
      .children()
      .hide();
  });

  $(window).resize(function() {
    $('.grid').isotope('layout');
    console.log($(window).width());
    $(window).width() < 600
      ? $('.form-check-inline')
          .addClass('form-check')
          .removeClass('form-check-inline')
      : $('.form-check')
          .addClass('form-check-inline')
          .removeClass('form-check');
  });

  $('#columns').on('click', function() {
    $('.display').show();
    $('.form-challenge').hide();
    $('.grid-sizer').remove();
    $('.display')
      .removeClass()
      .addClass('display columns');
  });

  $('#isotope').on('click', function() {
    $('.display').show();
    $('.form-challenge').hide();
    $('.display')
      .prepend('<div class="grid-sizer"></div>')
      .removeClass()
      .addClass('display grid');
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: 0
      }
    });
  });

  $('#challenge-2').on('click', function() {
    $('.display').hide();
    $('.form-challenge').show();
  });

  $('#term-box').on('click', function() {
    this.checked
      ? $('.not-terms').removeClass('disabled')
      : $('.not-terms').addClass('disabled');
  });

  $('.head-symptoms input[type=checkbox]').on('change', function() {
    var checked = $('.head-symptoms input[type=checkbox]:checked').length;
    checked === 0 ? $('.sub-section>h3').hide() : $('.sub-section>h3').show();
  });

  $('#frequent-headaches').on('click', function() {
    this.checked ? $('.headaches').show() : $('.headaches').hide();
  });

  $('#hearing-loss').on('click', function() {
    this.checked ? $('.hearing').show() : $('.hearing').hide();
  });

  $('#medical-form').submit(function(event) {
    event.preventDefault();
    console.log($('#medical-form').serializeArray());
  });
});
