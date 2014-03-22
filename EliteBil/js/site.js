$(document).ready(function() {

	$('tr:nth-child(even)').addClass('even');
	
	$('.contact_inf_btn').click(function(){
			$('.contact_inf_wr .wr').animate({marginTop:0},500);
			return false;
		});
	$('.contact_inf_wr .close_btn').click(function(){
			$(this).closest('.contact_inf_wr .wr').animate({marginTop:'-400%'},500);
			return false;
		});
		
/*-----------scroll top btn---------*/
	$('.footer_up').click(function(){
	   $('html, body').animate({scrollTop:0},{duration:'2000',easing:'swing'});
	   return false;
	});
	
/*jquery-ui*/	
	$(".sliders").slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 1000, 5000 ],
			slide: function( event, ui ) {
				$( "#amount11" ).val( ui.values[ 0 ] );
				$( "#amount12" ).val( ui.values[ 1 ] );
			}
	});
	$( "#amount11" ).val( $( ".sliders" ).slider( "values", 0 ) );
	$( "#amount12" ).val($( ".sliders" ).slider( "values", 1 ) );	
/*end */

	$('.img_pad .img').click(function(){
			var img_src = $(this).attr('href');
			var gal_src = $(this).attr('rel');
			var img_title = $(this).attr('title');
			$(this).closest('.img_pad').find('.big_img img').attr('src',img_src);
			$(this).closest('.img_pad').find('.big_img').attr('href',gal_src);
			$(this).closest('.img_pad').find('.big_img').attr('title',img_title);
			return false;
		});	

/*----jcarousel----------*/
	$('.jcarousel').jcarousel({
		'wrap':'circular'
	}).jcarouselAutoscroll({
		'interval': 4000
	});
	
/*----colorbox----*/

	$('a.gallery').colorbox({
		opacity:0.75,
		fixed:true
		});
		
	$('a.video_item').colorbox({
		opacity:0.75,
		fixed:true,
		iframe:true
		});		
	
/*----custom select----*/


	$('select.small_select').selectBox({
		keepInViewport:false,
		autoWidth:false
		});	
		
	$('select').selectBox({
		keepInViewport:false,
		autoWidth:true
		});		
	
/*-------------footer at the bottom----------*/
	

	var change_css_flag = 0;
	
	function window_w () {
		if ($('.wrapper').width()<=738) { 
			$('.nav').addClass('mobile_menu').removeClass('wide_menu'); 
			if ( change_css_flag > 2 ) { change_css_flag = 1};
			
			$('.nav').attr('rel',change_css_flag);
		} else { 
			$('.nav').removeClass('mobile_menu').addClass('wide_menu');
			if ( change_css_flag < 3 ) { change_css_flag = 3};
			
			$('.nav').attr('rel',change_css_flag);
		}
		
		if ( change_css_flag == 1 ) {
				change_css_flag = 2;
				$('.nav > ul').hide(); 
				$('.filter_form').hide();			
				
				$('.nav').attr('rel',change_css_flag);	
			}
			
		if ( change_css_flag == 3 ) {
				change_css_flag = 4;
				$('.filter_form').show();
				$('.nav > ul').show();
				$('.nav li.active').removeClass('active');
				$('.nav > ul ul').css('display','none'); 
				
				$('.nav').attr('rel',change_css_flag);
			}			
		
	};
	
	window_w();

	$(window).resize(function() {
		window_w();
	});
	
	$('.nav_menu-btn a').click(function(){
			$('.nav > ul').slideToggle(300);
			return false;
		});
		
	$('.filter_pad h3').click(function(){
			if ($('.wrapper').width()<=738) { $('.filter_pad .filter_form').slideToggle(300); }
		});	
		
	var menu_variable = $('.nav');
		
	$('.nav li').hover(function(){
			if( $(menu_variable).hasClass('wide_menu') ) {
			$(this).children('ul').show(200);}
		},function(){
			if( $(menu_variable).hasClass('wide_menu') ) {
			$(this).children('ul').hide(200);
			}
		});

/*-------------accordion menu-----------*/
	$(".mobile_menu.nav li").children("ul").parent("li").addClass("nxt_lvl");
	$(".mobile_menu.nav li.active").children("ul").slideDown("fast");
	var currentListItem = $(".nav").find("li.active");
	$('.nav li > span.dropdown, .nav li > a ').click(function(){
		if( $(menu_variable).hasClass('mobile_menu') ) {
			var newCurrentListItem = $(this).parent();																		  
			var currentDropDown = newCurrentListItem.children("ul");
			if (newCurrentListItem.is(currentListItem)) {
				$(currentListItem).removeClass("active");
				$(currentDropDown).slideUp("fast");
				currentListItem = null;
			} else {
				if ($(newCurrentListItem).hasClass('active')) 
					{
						$(currentDropDown).slideUp("fast");
						$(newCurrentListItem).removeClass("active");
					} 
					else 
					{
						currentDropDown.slideDown("fast");
						$(newCurrentListItem).siblings('li').add($(newCurrentListItem).find('li')).removeClass("active");
						currentListItem = newCurrentListItem;
						currentListItem.closest('ul').find('ul').not(currentDropDown).slideUp("fast");
						currentListItem.addClass("active");					
					}
			}
			if ($(newCurrentListItem).is('.nxt_lvl')) {return false;}
		}
	});


	$('#scroll_btn').click(function(){
			var d_pos = 0;
			var w_pos = $(window).scrollTop() + 1;
			$('.scroll_to').each(function(){
					var el_pos = $(this).offset().top;
					if (el_pos > w_pos) {d_pos=el_pos;return false;} else {};
				});
			$('html, body').animate({scrollTop:d_pos},{duration:'2000',easing:'swing'});
			return false;
		});

});
