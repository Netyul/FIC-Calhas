/* ----------
Autor: 	Jefte Amorim da Costa
----------- */
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