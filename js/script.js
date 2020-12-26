// $(".button").click(function(){
//   $("#header").animate({top: "-50"}, "slow", function() {
//       $("#something").animate({height: "hide"}, "slow", function() {
//           $("ul#menu").animate({top: "20", left: "0"}, "slow", function() {
//               $(".trigger").animate({height: "show", top: "110", left: "0"}, "slow");        
//           });
//       });
//   });
// });

  $(document).ready(function (e) {
    $('#activate').on('click', function () {
      if($(".asideNavIsActivated").width() == 300) {
        $('.asideNavIsActivated').animate({ width: "0px" })
        $('.asideNav').hide();
        // $("section").click(function() {
        //   console.log("clicked");
        // });
      }
      else {
        $('.asideNavIsActivated').animate({ width: "300px" })
        $('.asideNav').show();
      }
    });
  });

  $(function () { 
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(); 
        if(scroll < 65) {
          $('.Navbar').css({'position': 'sticky'});
          $('.Navbar .navbar').css({'padding': '2%', 'transition': 'all .3s ease-in'});
          $('#logo').css({'width': '225px', 'transition': 'all .3s ease-in'});
        }     
        else {
          $('.Navbar').css({'position': 'fixed'});
          $('.Navbar .navbar').css({'padding': '0%', 'transition': 'all .3s ease-in'});
          $('#logo').css({'width': '100px', 'transition': 'all .3s ease-in'});
        }
    });
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 30
      }
  },
  });
