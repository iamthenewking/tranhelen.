      $(function() {
        $('.load').animate({opacity: "1"},1500);
        $('.load-right').each(function(i) {
          $(this).delay((i++) * 500).animate({left:0, opacity:"1"});
        });
      });