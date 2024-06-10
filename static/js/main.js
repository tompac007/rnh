!function(s){"use strict";var e,i;s(window).on("load",(function(){s("#preloader").delay(0).fadeOut(),function(){var e=s(".slider-active");function i(e){var i="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";e.each((function(){var e=s(this),o=e.data("delay"),t="animated "+e.data("animation");e.css({"animation-delay":o,"-webkit-animation-delay":o}),e.addClass(t).one(i,(function(){e.removeClass(t)}))}))}e.on("init",(function(e,o){i(s(".single-slider:first-child").find("[data-animation]"))})),e.on("beforeChange",(function(e,o,t,l){i(s('.single-slider[data-slick-index="'+l+'"]').find("[data-animation]"))})),e.slick({autoplay:!1,autoplaySpeed:1e4,dots:!1,fade:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><img src="img/icon/arrow_left.png" alt=""></button>',nextArrow:'<button type="button" class="slick-next"><img src="img/icon/arrow_right.png" alt=""></button>',responsive:[{breakpoint:1200,settings:{dots:!1,arrows:!1}}]})}(),s(".tlt").textillate({in:{delayScale:4,delay:40,callback:function(){}}}),s(".h-seven-slider-active").slick({dots:!0,infinite:!0,speed:50,autoplay:!1,arrows:!1,fade:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}).slickAnimation(),AOS.init({duration:1e3,mirror:!0}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init()})),e=s("#mobile-menu > ul > li.show").offset().left,i=s(window).width()-e-s("#mobile-menu > ul > li.show").width()+s("#mobile-menu > ul > li.show").width(),s("<style>.navbar-wrap > ul > li.show > a::after{width:"+i+"px;}</style>").appendTo("head"),s("#mobile-menu > ul > li").mouseover((function(){s("#mobile-menu > ul > li").hasClass("active")&&s(this).removeClass("active"),s(this).addClass("active");var e=s("#mobile-menu > ul > li.active").offset().left,i=s(window).width()-e-s("#mobile-menu > ul > li.active").width()+s("#mobile-menu > ul > li.active").width();s("<style>.navbar-wrap > ul > li.active > a::after,.navbar-wrap > ul > li:hover > a::after{width:"+i+"px;}</style>").appendTo("head")})),s("#mobile-menu > ul > li").mouseleave((function(){s(this).removeClass("active")})),s("#mobile-menu").meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"992"}),s(window).on("scroll",(function(){s(window).scrollTop()<245?s("#sticky-header").removeClass("sticky-menu"):s("#sticky-header").addClass("sticky-menu")})),s(".brand-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,arrows:!1,slidesToShow:6,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}}]}),s(".s-brand-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,arrows:!1,slidesToShow:5,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}}]}),s(".new-released-game-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,arrows:!1,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),s(".game-gallery-active").slick({centerMode:!0,centerPadding:"350px",slidesToShow:1,prevArrow:'<span class="slick-prev"><i class="fas fa-caret-left"></i> previous</span>',nextArrow:'<span class="slick-next">Next <i class="fas fa-caret-right"></i></span>',appendArrows:".slider-nav",responsive:[{breakpoint:1800,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"220px",infinite:!0}},{breakpoint:1500,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"180px",infinite:!0}},{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"160px",arrows:!1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:1,centerPadding:"60px",arrows:!1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"0px",arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"0px",arrows:!1}}]}),s(".product-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!1,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),s(".game-episodes-active").slick({dots:!0,infinite:!0,speed:1e3,autoplay:!1,arrows:!1,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".testimonial-active").owlCarousel({loop:!0,margin:0,items:1,autoplay:!1,autoplayTimeout:5e3,autoplaySpeed:1e3,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],nav:!0,dots:!1,responsive:{0:{items:1,center:!1},575:{items:1,center:!1},768:{items:1,center:!1},992:{items:1,center:!1},1200:{items:1}}}),s(".latest-games-active").owlCarousel({loop:!0,margin:30,items:3,autoplay:!1,autoplayTimeout:5e3,autoplaySpeed:1e3,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],nav:!0,dots:!1,responsive:{0:{items:1,center:!1,nav:!1},575:{items:1,center:!1},768:{items:2,center:!1},992:{items:3,center:!1},1200:{items:3}}}),s(".released-game-active").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,dots:!0,asNavFor:".released-game-nav",responsive:[{breakpoint:767,settings:{arrows:!1,dots:!1}}]}),s(".released-game-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".released-game-active",dots:!1,arrows:!1,centerMode:!1,centerPadding:"0px",vertical:!0,focusOnSelect:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,vertical:!1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,vertical:!1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1,vertical:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,vertical:!1}}]}),s(".banner-magazine-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,arrows:!1,centerMode:!0,centerPadding:"0",slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:2,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".trending-news-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,vertical:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',appendArrows:".trending-news-nav",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".business-news-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!1,arrows:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',appendArrows:".business-news-nav",responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".community-news-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!1,arrows:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',appendArrows:".community-news-nav",responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".gaming-chair-active").slick({dots:!1,infinite:!0,speed:0,autoplay:!0,autoplaySpeed:1e3,arrows:!1,fade:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1}}]}),s(".pz-brand-active").slick({dots:!1,infinite:!0,speed:1e3,arrows:!1,slidesToShow:6,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),s(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),s(".popup-video").magnificPopup({type:"iframe"}),s(".tournament-active,.featured-active, .gs-category-active").imagesLoaded((function(){var e=s(".tournament-active,.featured-active, .gs-category-active").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:1}});s(".tournament-menu").on("click","button",(function(){var i=s(this).attr("data-filter");e.isotope({filter:i})}))})),s(".tournament-menu button").on("click",(function(e){s(this).siblings(".active").removeClass("active"),s(this).addClass("active"),e.preventDefault()})),s(".odometer").appear((function(e){s(".odometer").each((function(){var e=s(this).attr("data-count");s(this).html(e)}))})),s("[data-countdown]").each((function(){var e=s(this),i=s(this).data("countdown");e.countdown(i,(function(s){e.html(s.strftime('<div class="time-count"><span>%D</span>Days</div><div class="time-count"><span>%H</span>Hrs</div><div class="time-count"><span>%M</span>Mins</div><div class="time-count"><span>%S</span>Secs</div>'))}))})),s.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fas fa-caret-up"></i>',activeOverlay:!1})}(jQuery);