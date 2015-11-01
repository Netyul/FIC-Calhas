/* ----------
Autor: 	Jefte Amorim da Costa
----------- */
$(document).on('click','#header-busca button',function(){
  $( "#shide" ).animate({top:'0px'},"slow");
      });
$(document).on('click','button.remove',function(){
  $( "#shide" ).animate({top:'-80px'},"slow");
      });
