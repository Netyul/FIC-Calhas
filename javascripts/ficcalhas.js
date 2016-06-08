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
//$.support.transition = false;
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
//scroll suave
jQuery(document).ready(function($) {
$("#scroll").click(function(event){
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
});
});
//fim scroll suave
/*
     * Plugin Name: Resize Image to Parent Container
     *
     * Author: Christian Varga
     * Author URI: http://christianvarga.com
     * Plugin Source: https://github.com/levymetal/jquery-resize-image-to-parent/
     *
     */
    (function($) {
      $.fn.resizeToParent = function(opts) {
        var defaults = {
         parent: 'div',
         delay: 100
        }
        var opts = $.extend(defaults, opts);
        function positionImage(obj) {
          // reset image (in case we're calling this a second time, for example on resize)
          obj.css({'width': '', 'height': '', 'margin-left': '', 'margin-top': ''});
          // dimensions of the parent
          var parentWidth = obj.parents(opts.parent).width();
          var parentHeight = obj.parents(opts.parent).height();
          // dimensions of the image
          var imageWidth = obj.width();
          var imageHeight = obj.height();
          // step 1 - calculate the percentage difference between image width and container width
          var diff = imageWidth / parentWidth;
          // step 2 - if height divided by difference is smaller than container height, resize by height. otherwise resize by width
          if ((imageHeight / diff) < parentHeight) {
           obj.css({'width': 'auto', 'height': parentHeight});
           // set image variables to new dimensions
           imageWidth = imageWidth / (imageHeight / parentHeight);
           imageHeight = parentHeight;
          }
          else {
           obj.css({'height': 'auto', 'width': parentWidth});
           // set image variables to new dimensions
           imageWidth = parentWidth;
           imageHeight = imageHeight / diff;
          }
          // step 3 - center image in container
          var leftOffset = (imageWidth - parentWidth) / -2;
          var topOffset = (imageHeight - parentHeight) / -2;
          obj.css({'margin-left': leftOffset, 'margin-top': topOffset});
        }
        // run the position function on window resize (to make it responsive)
        var tid;
        var elems = this;
        $(window).on('resize', function() {
          clearTimeout(tid);
          tid = setTimeout(function() {
            elems.each(function() {
              positionImage($(this));
            });
          }, opts.delay);
        });
        return this.each(function() {
          var obj = $(this);
          // hack to force ie to run the load function... ridiculous bug 
          // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
          obj.attr("src", obj.attr("src"));
          // bind to load of image
          obj.load(function() {
            positionImage(obj);
          });
          // run the position function if the image is cached
          if (this.complete) {
            positionImage(obj);
          }
        });
      }
    })( jQuery );
    
    $(function() {
      $('.image').resizeToParent();
      
      $('a', '#buttons').on('click', function(e) {
        e.preventDefault();
        
        $('.imageContainer').toggleClass('overflow');
      });
    });

function labelthumbs(json){
      document.write('<div class="row">');
      for(var i=0; i<numposts; i++){
        var entry=json.feed.entry[i];
        var posttitle=entry.title.$t;
        var posturl;
        
        if(i==json.feed.entry.length)break;
        
        for(var k=0;k<entry.link.length;k++){
          if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){
            var commenttext=entry.link[k].title;
            var commenturl=entry.link[k].href;
          }

          if(entry.link[k].rel=='alternate'){
            posturl=entry.link[k].href;break;
          }
        }

        var thumburl;
        try{thumburl=entry.media$thumbnail.url;}
        catch(error){
          s=entry.content.$t;
          a=s.indexOf("<img");
          b=s.indexOf("src=\"",a);
          c=s.indexOf("\"",b+5);
          d=s.substr(b+5,c-b-5);

          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
            thumburl=d;
          }else thumburl='http://2.bp.blogspot.com/_IKigl6y9hFA/TMdcT1jzo5I/AAAAAAAAAHA/hAKuT9rJpFU/noimage.jpg';
        }
        var postdate=entry.published.$t;
        var cdyear=postdate.substring(0,4);
        var cdmonth=postdate.substring(5,7);
        var cdday=postdate.substring(8,10);
        var monthnames=new Array();
        monthnames[1]="Jan";
        monthnames[2]="Fev";
        monthnames[3]="Mar";
        monthnames[4]="Abr";
        monthnames[5]="Mai";
        monthnames[6]="Jun";
        monthnames[7]="Jul";
        monthnames[8]="Ago";
        monthnames[9]="Set";
        monthnames[10]="Out";
        monthnames[11]="Nov";
        monthnames[12]="Des";
        document.write('<div class="col-md-3">');

        if(showpostthumbnails==true)
          document.write('<a href="'+posturl+'" target ="_top"><img class="img-thumbnail" src="'+thumburl+'"/></a>');
        document.write('<strong><a href="'+posturl+'" target ="_top">'+posttitle+'</a></strong><br>');
        if("content"in entry){
          var postcontent=entry.content.$t;
        }else
        if("summary"in entry){
          var postcontent=entry.summary.$t;
        }else var postcontent="";
        var re=/<\S[^>]*>/g;
        postcontent=postcontent.replace(re,"");
        if(showpostsummary==true){
          if(postcontent.length<numchars){
            document.write('');
            document.write(postcontent);
            document.write('');
          }else{
            document.write('');
            postcontent=postcontent.substring(0,numchars);
            var quoteEnd=postcontent.lastIndexOf(" ");
            postcontent=postcontent.substring(0,quoteEnd);
            document.write(postcontent+'...');
            document.write('');
          }
        }
        var towrite='';
        var flag=0;
        document.write('<br>');
        if(showpostdate==true){
          towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;
          flag=1;
        }
        if(showcommentnum==true){
          if(flag==1){
            towrite=towrite+' | ';
          }
          if(commenttext=='1 Comments')commenttext='1 Comment';
          if(commenttext=='0 Comments')commenttext='No Comments';
          commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';
          towrite=towrite+commenttext;flag=1;
          ;
        }
        if(displaymore==true){
          if(flag==1)towrite=towrite+' | ';
          towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">More ?</a>';
          flag=1;;
        }
        document.write(towrite);document.write('</div>');if(displayseparator==true)
        if(i!=(numposts-1))
        document.write('');
        document.write('</div>');
  
      }
}
$(document).ready(function() {$('#related-posts img, .popular-posts .item-thumbnail img, .post-home img,#postfeature img, .imageContainer img').attr('src', function(i, src) {
    return src.replace( 's72-c', 's400-c' );
  });
});
$(document).ready(function() {
  $('#related-posts img, .popular-posts .item-thumbnail img, .post-home img, .imageContainer img').attr('src', function(i, src) {
    return 
    src.replace( 'default.jpg', 'mqdefault.jpg' );
  });
});