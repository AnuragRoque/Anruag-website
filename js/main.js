function scroll_animations(){var o=1.2,e="fade_from_bottom",a=!1;gsap.utils.toArray(".scroll-animation").forEach((function(t){var n={},i={duration:t.dataset.animationDuration||o},l={scrollTrigger:{trigger:t,once:a,start:"top bottom+=20%",toggleActions:"play none none reverse",markers:!1}};jQuery.extend(n,i),jQuery.extend(n,{fade_from_bottom:{y:180,opacity:0},fade_from_top:{y:-180,opacity:0},fade_from_left:{x:-180,opacity:0},fade_from_right:{x:180,opacity:0},fade_in:{opacity:0},rotate_up:{y:180,rotation:10,opacity:0}}[t.dataset.animation||e]),jQuery.extend(n,l),gsap.from(t,n)}))}$((function(){if($(window).on("load",(function(){$(".page-loader").delay("500").fadeOut(1e3)})),$(document).ready((function(){$(document).on("click",".icon-menu",(function(){$(".responsive-sidebar-menu").addClass("active")})),$(document).on("click",".responsive-sidebar-menu .overlay",(function(){$(".responsive-sidebar-menu").removeClass("active")})),$(document).on("click",".menu li .scroll-to",(function(){$(".responsive-sidebar-menu").removeClass("active")})),$(document).on("click",".color-boxed a",(function(){$(".color-boxed a").removeClass("clr-active"),$(this).addClass("clr-active")})),$(document).on("click",".global-color .setting-toggle",(function(){$(".global-color").addClass("active")})),$(document).on("click",".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings",(function(){$(".global-color").removeClass("active")}))})),$(window).scroll((function(){var o=$(window).scrollTop();o>=0?$(".scroll-to-page").each((function(e){var a=o+1;$(this).position().top<=a-0&&($(".scroll-nav .scroll-to.active").removeClass("active"),$(".scroll-nav .scroll-to").eq(e).addClass("active"),$(".scroll-nav-responsive a.active").removeClass("active"),$(".scroll-nav-responsive a").eq(e).addClass("active"))})):($(".scroll-nav .scroll-to.active").removeClass("active"),$(".scroll-nav .scroll-to:first").addClass("active"),$(".scroll-nav-responsive a.active").removeClass("active"),$(".scroll-nav-responsive a:first").addClass("active"))})).scroll(),$(".testimonial-slider").length){var o=$(".testimonial-slider").owlCarousel({items:1,margin:30,stagePadding:0,smartSpeed:450,autoHeight:!0,loop:!1,nav:!1,dots:!1,onInitialized:e,onTranslated:e});function e(o){o.target;var e=o.item.count,a=o.item.index+1;a>e&&(a-=e),$("#testimonial-slide-count").html("<span class='left'>"+a+"</span> / "+e)}$(".testimonial-nav .next").on("click",(function(){o.trigger("next.owl.carousel")})),$(".testimonial-nav .prev").on("click",(function(){o.trigger("prev.owl.carousel",[300])}))}window.addEventListener("scroll",{scroll_animations:scroll_animations})})),scroll_animations();

//less animation 
//function scroll_animations() {
//     var o = 0.8; // Decreased animation duration to 0.8 seconds
//     var e = "fade_from_bottom";
//     var a = false;
    
//     gsap.utils.toArray(".scroll-animation").forEach(function(t) {
//       var n = {};
//       var i = { duration: t.dataset.animationDuration || o };
//       var l = {
//         scrollTrigger: {
//           trigger: t,
//           once: a,
//           start: "top bottom+=20%",
//           toggleActions: "play none none reverse",
//           markers: false
//         }
//       };
  
//       jQuery.extend(n, i);
//       jQuery.extend(n, {
//         fade_from_bottom: { y: 180, opacity: 0 },
//         fade_from_top: { y: -180, opacity: 0 },
//         fade_from_left: { x: -180, opacity: 0 },
//         fade_from_right: { x: 180, opacity: 0 },
//         fade_in: { opacity: 0 },
//         rotate_up: { y: 180, rotation: 10, opacity: 0 }
//       }[t.dataset.animation || e]);
  
//       jQuery.extend(n, l);
//       gsap.from(t, n);
//     });
//   }
  
//   $(function() {
//     $(window).on("load", function() {
//       $(".page-loader").delay(500).fadeOut(1000);
//     });
  
//     $(document).ready(function() {
//       // Rest of the document ready code here
//     });
  
//     $(window).scroll(function() {
//       // Rest of the scroll event code here
//     });
  
//     $(".testimonial-slider").length && $(".testimonial-slider").owlCarousel({
//       items: 1,
//       margin: 30,
//       stagePadding: 0,
//       smartSpeed: 450,
//       autoHeight: true,
//       loop: false,
//       nav: false,
//       dots: false,
//       onInitialized: e,
//       onTranslated: e
//     });
  
//     function e(o) {
//       o.target;
//       var e = o.item.count;
//       var a = o.item.index + 1;
//       a > e && (a -= e);
//       $("#testimonial-slide-count").html("<span class='left'>" + a + "</span> / " + e);
//     }
  
//     $(".testimonial-nav .next").on("click", function() {
//       $(".testimonial-slider").trigger("next.owl.carousel");
//     });
  
//     $(".testimonial-nav .prev").on("click", function() {
//       $(".testimonial-slider").trigger("prev.owl.carousel", [300]);
//     });
  
//     window.addEventListener("scroll", { scroll_animations: scroll_animations });
  
//     scroll_animations();
//   });
  