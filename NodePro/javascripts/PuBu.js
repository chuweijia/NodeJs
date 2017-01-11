(function ($){
	      var wookmark = new Wookmark('#container', {
	          autoResize: true, 
	          container: $('#main'), 
	          offset: 5, 
	          outerOffset: 10, 
	          itemWidth: 210 
	      });
	    $("ul#container li a").each(function(i){
	    	$(this).on('click',function(){
				$("#popup1").css("display","block");
					var b = (i+1).toString();
					var a  = "<img src='images/image_"+b+".jpg'>";
					$(".content img").replaceWith(a);
	    	});	
	    });

	      $('#container').on('click', 'li', function () {
	        // Randomize the height of the clicked item.
	        var newHeight = $('img', this).height() + Math.round(Math.random() * 300 + 30);
	        $(this).css('height', newHeight+'px');
	        wookmark.layout(true);
	      });
	    })(jQuery);