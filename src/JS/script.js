$(document).ready(function() {

  //navigation bar
  $(window).scroll(function() {
    var y = $(this).scrollTop();
    var $portfolioOffset = $("#projects").offset().top;
    var $skillsOffset = $("#skills").offset().top;
    var $contactOffset = $("#contact").offset().top;
    if(y > 100) {
      $(".nav-bg").addClass("nav-show");
    } else {
        $('.nav-bg').removeClass('nav-show');
     	}
  
    if (y > $skillsOffset -200) {
        $(".skill").addClass("turn-right");
        showSkill();
        showPercent();
      } else {
        $(".skill").removeClass("turn-right");
      }

    if (y > $contactOffset - 300) {
      $("#contact ul a").addClass("come-in");
    } else {
      $("#contact ul a").removeClass("come-in");
    }
  });

  //burger navigation
  // $("#burger-nav").click(function() {
  //   $(this).toggleClass("open");
  //   $(".overlay").toggleClass("drop");
  //   $("body").toggleClass("locked");
  // });
  // $(" .overlayMenu ul li").click(function() {
  //   $("#burger-nav").toggleClass("open");
  //   $(".overlay").toggleClass("drop");
  //   $("body").toggleClass("locked");
  // });

  //Skill set

  var animate = true;

  function showSkill() { //fired just once
    if(animate) {
      $('.skill').each(function(){
        $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
        },2500); 
        animate = false;
      })     
  }
}

  function showPercent() {
    $('.skill-percentage').each(function() {
      $(this).html(Math.round(($(this).prev().width() / $('.skill').width())*100) + '%');
    })
  }

  setInterval(showPercent,10);


  //footer
  var date = new Date();
  var year = date.getFullYear();
  $("#year").html(year);
});
