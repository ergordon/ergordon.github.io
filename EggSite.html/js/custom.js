$(document).ready(function (){
  
	"use strict";
	
	/* Setting Sizes 
	-----------------------------------------------------*/
	
	function setSizes() {
		
		/* General */
		$('.logo-content').css({'margin-top': '-'+($('.logo-content').height()/2)+'px'});
		
		/* Profile */
		$('#profile').css({'height': ($(window).height()) + 'px'});
		$('.profile-content').css({'margin-top': '-'+($('.profile-content').height()/2)+'px'});
		
		/* Portfolio */
		$('.project-info').css({'margin-top': '-'+($('.project-info').height()/2)+'px'});
		
		/* Contact */
		$('#contact, .contact-content').css({'min-height': ($(window).height()) + 'px'});
		
	}
	
	setSizes();
	$(window).resize(function() {
	  setSizes();
	  checkPhotos();
	});
	
	/* Navigation
	-----------------------------------------------------*/
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='down') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: 1 });
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='up') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: function() {
		  return -$(this).height()+1;
		}
	  });
	
	/* Resume
	-----------------------------------------------------*/
	
	$('.dimmed-effect .resume-box').mouseenter(function(){
		$('.dimmed-effect .resume-box').not(this).each(function() {
            $(this).addClass('disable');
        });
	});
	
	$('.dimmed-effect .resume-box').mouseleave(function(){
		$('.dimmed-effect .resume-box').each(function() {
            $(this).removeClass('disable');
        });
	});	
	/* Portfolio 
	-----------------------------------------------------*/
	
	// Ajax Project Details
	
	var toLoad;
	
	function showNewContent() {
	   $('.project-content').slideUp(700, function () { $('.project-content').slideDown(700, function () { $.waypoints('refresh') }); });
	}
	
    function loadContent() { $('.project-content').load(toLoad,showNewContent());}
	
	$('.ajax-portfolio-link').click(function() {
		toLoad = $(this).attr('href');　
		loadContent();
		$('html, body').animate({scrollTop:$('.project-content').position().top}, 700);
		return false;
	});
	
	
	/* Smooth Scrolling
	-----------------------------------------------------*/
	
	$.localScroll({
	});
		
	/* Animations
	-----------------------------------------------------*/
	
	jQuery('.animated').appear();

	$('.fade-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-animation') });
	});
	
	$('.fade-in-left').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-left-animation') });
	});
	
	$('.fade-in-right').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('fade-in-right-animation') });
	});
	
	$('.slide-in-left').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-left-animation') });
	});
	
	$('.slide-in-right').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-right-animation') });
	});
	
	$('.slide-in-top').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-top-animation') });
	});
	
	$('.slide-in-bottom').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('slide-in-bottom-animation') });
	});
	
	$('.zoom-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('zoom-in-animation') });
	});
	
	$('.zoom-out').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('zoom-out-animation') });
	});
	
	$('.bounce-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('bounce-in-animation') });
	});
	 
	$('.flip-in').appear(function() {
		jQuery(this).each(function(){ jQuery(this).addClass('flip-in-animation') });
	});
	
	/* Alpha Setting
	-----------------------------------------------------*/
	
	$('.editable-alpha').css({
		'opacity': ($('.editable-alpha').attr('data-alpha')/100)
	});

	/* Responsive Videos
	-----------------------------------------------------*/

	$(function(){
	  $('body').fitVids();
	});

// Tooltip Initialize 
function tooltipIni() {
	$("[rel='tooltip']").tooltip();
}

// Popover Initialize 
function popoverIni() {
	$("[rel='popover']").popover();
}

