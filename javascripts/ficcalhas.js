/* ----------
Autor: 	Jefte Amorim da Costa
----------- */
//buscar topo
$(document).on('click','#header-busca button',function(){
  $( "#shide" ).animate({top:'0px'},"slow");
      });
$(document).on('click','button.remove',function(){
  $( "#shide" ).animate({top:'-80px'},"slow");

      });
$(document).ready(function(){
    $("#flip").click(function(){
    	$(".pull-left").slideUp("slow");
        $(".pull-right").slideUp("slow");
        $("#panel").slideDown("slow");
        
    });
   
});
$(document).ready(function(){
    $("#flip2").click(function(){
    	$(".pull-left").slideDown("slow");
        $(".pull-right").slideDown("slow");
        $("#panel").slideUp("slow");
        
    });
   
});
//fim busca top
//paralax
$.support.transition = false;
$(document).ready(function(){
 
   $('div.bgParallax').each(function(){
    	var $obj = $(this);
   });	
});
var yPos = -($(window).scrollTop() / $obj.data('speed'));

var bgpos = '50% '+ yPos + 'px';

$obj.css('background-position', bgpos );

$('div.bgParallax').each(function(){
	var $obj = $(this);
 
	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
 
		var bgpos = '50% '+ yPos + 'px';
 
		$obj.css('background-position', bgpos );
 
	}); 
});
//fim paralax