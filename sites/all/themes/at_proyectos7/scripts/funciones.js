function scroll_(){
   jQuery(".site-name-hernan-diaz .view-inicio .views-field-body .inicio-wrapper, .site-name-victor-grippo .view-inicio .views-field-body .inicio-wrapper").mCustomScrollbar();


}
function move_left(){
  
  jQuery('.link').click(function(i){                                                                                                                                                                                                        
            if(jQuery('.menuFooter').hasClass('paz')){
                  jQuery('.menuFooter').removeClass('paz');
            }
            else{
                  jQuery('.menuFooter').addClass('paz');
            }
            i.stopPropagation();
  });
   jQuery('.link').click(function(i){                                                                                                                                                                                                        
            if(jQuery('.link').hasClass('eco')){
                  jQuery('.link').removeClass('eco');
            }
            else{
                  jQuery('.link').addClass('eco');
            }
            i.stopPropagation();
  });
  
 

  jQuery('.page').click(function(){
            if(jQuery(this).hasClass('move-left')){
                  jQuery('.page').removeClass('move-left');
            }
  });   

}




jQuery(document).ready(function(){
      scroll_();
	   move_left();
}); 

