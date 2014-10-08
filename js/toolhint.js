// Debasis Panda : debasis-panda@live.com
jQuery.fn.extend({
tooltip: function() {
    //titleText = $(this).attr('title'); 
    $(this).hover(
  function(e1) {      
        tipText = $(this).attr('title'); 
	    $(this).attr('title',''); 
        var container = $('<div></div>');
        container.addClass('tool-tip').html('<p>'+ tipText +'</p>');      
        $('body').append(container); 
        container.fadeIn('slow');
        //e1.stopPropagation();
      
        $(this).on('mousemove',function(e2){           
            pos_x= e2.clientX -60 + 'px'
            pos_y = e2.clientY -35 + 'px'; 
            if(e2.clientX <= 60){
                pos_x= 0+'px' ;
            }
            if(e2.clientY <= 35){
                pos_y= 0+'px' ;
            }
            container.css({left:pos_x,top:pos_y});
            e2.stopPropagation();
        });        
  
  }, function(e3) {
        $(this).attr('title',tipText);
          tipText= ' ';
      $('body').find('.tool-tip').remove();
        //e3.stopPropagation();
  }
);   
    }
});

$('.mytooltip').tooltip();
