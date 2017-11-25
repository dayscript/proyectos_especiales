// JavaScript Document

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
      move_left();
}); 

/*function mover(){
jQuery('.link_tres:before').cycle({ 
    fx:    'zoom', 
    sync:  false, 
    delay: -20 
});
  
}
*/
