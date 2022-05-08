$(function () {

  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("active");
  });

  $(".header__slider").slick({
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".clients__slider").slick({
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow:
      "<button  type='button' class='slick-prev'><svg class='prev' width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'><rect class='rect-prev' x='0.921875' y='0.941406' width='36' height='36' rx='6' fill='white'/><path class='path-prev' d='M20.9219 24.9414L14.9219 18.9414L20.9219 12.9414' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
    nextArrow:
      "<button  type='button' class='slick-next'><svg  class='next' width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'><rect class='rect-next'width='36' height='36' rx='6' transform='matrix(-1 0 0 1 36.25 0.566406)' fill='white'/><path class='path-next' d='M16.25 24.5664L22.25 18.5664L16.25 12.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
  });

  $(".popular__slider-list").slick({
    dots: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><svg  class='prev' width='53' height='53' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_376_1053)'><rect class='rect-prev' x='8.5' y='8.56641' width='36' height='36' rx='6' fill='white'/></g><path class='path-prev' d='M28.5 32.5664L22.5 26.5664L28.5 20.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><defs><filter id='filter0_d_376_1053' x='0.5' y='0.566406' width='52' height='52' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset/><feGaussianBlur stdDeviation='4'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 0.137255 0 0 0 0 0.164706 0 0 0 0 0.203922 0 0 0 0.2 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_376_1053'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_376_1053' result='shape'/></filter></defs></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next'> <svg class='next' width='53' height='53' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_469_10924)'><rect class='rect-next' width='36' height='36' rx='6' transform='matrix(-1 0 0 1 44.4688 8.56641)' fill='white'/></g><path class='path-next' d='M24.4688 32.5664L30.4688 26.5664L24.4688 20.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><defs><filter id='filter0_d_469_10924' x='0.46875' y='0.566406' width='52' height='52' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset/><feGaussianBlur stdDeviation='4'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 0.137255 0 0 0 0 0.164706 0 0 0 0 0.203922 0 0 0 0.2 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_469_10924'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_469_10924' result='shape'/></filter></defs></svg></button> ",
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow:
    "<button type='button' class='slick-prev'><svg  class='prev' width='32' height='32' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_376_1053)'><rect class='rect-prev' x='8.5' y='8.56641' width='36' height='36' rx='6' fill='white'/></g><path class='path-prev' d='M28.5 32.5664L22.5 26.5664L28.5 20.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><defs><filter id='filter0_d_376_1053' x='0.5' y='0.566406' width='52' height='52' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset/><feGaussianBlur stdDeviation='4'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 0.137255 0 0 0 0 0.164706 0 0 0 0 0.203922 0 0 0 0.2 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_376_1053'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_376_1053' result='shape'/></filter></defs></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next'> <svg class='next' width='32' height='32' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_469_10924)'><rect class='rect-next' width='36' height='36' rx='6' transform='matrix(-1 0 0 1 44.4688 8.56641)' fill='white'/></g><path class='path-next' d='M24.4688 32.5664L30.4688 26.5664L24.4688 20.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><defs><filter id='filter0_d_469_10924' x='0.46875' y='0.566406' width='52' height='52' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset/><feGaussianBlur stdDeviation='4'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 0.137255 0 0 0 0 0.164706 0 0 0 0 0.203922 0 0 0 0.2 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_469_10924'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_469_10924' result='shape'/></filter></defs></svg></button> ",
  });


  $(".slick-prev").hover(function () {
    $(".rect-prev").toggleClass("actived");
  });
  $(".slick-prev").hover(function () {
    $(".path-prev").toggleClass("actived");
  });

  $(".slick-next").hover(function () {
    $(".rect-next").toggleClass("actived");
  });
  $(".slick-next").hover(function () {
    $(".path-next").toggleClass("actived");
  });

  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 1000);
  });

  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay, #mobile-menu-wrap").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });


});

const button = document.querySelector(".notime__btn");
const form = document.querySelector(".notime__form");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
  form.classList.add("open");
  popup.classList.add("popup__open");
});

close.addEventListener("click", () => {
  form.classList.remove("open");
  popup.classList.remove("popup__open");
});
