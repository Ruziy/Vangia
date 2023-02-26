$(function(){
    var mixer = mixitup('.recipes__inner',{
        load:{
            filter:'.body-care'
        }
    });  
    $('.testimonials__slider').slick({
        slidesToShow:2,
        slidesToScroll:1,
        dots:true,
        arrows:true,
        prevArrow: '<img class="testimonials__sliderprev-img" src="images/icons/left__arrow.svg">',
        nextArrow: '<img class="testimonials__slidernext-img" src="images/icons/right__arrow.svg">',
    });
})