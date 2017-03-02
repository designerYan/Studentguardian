(function($) {    
    
    $.fn.hamburgerMenu = (function(options){
        
        //custome setting & default setting
        var settings = $.extend({
            position: 'left',
            msg:'Menu'
        }, options);
        
        //Icon, links positioning
        jQuery('#hamburgerMenuIcon').css('float', settings.position);
        jQuery('.tooltip').css(settings.position, 0);
        jQuery('.listContainer').css({
            float: settings.position,
            clear: settings.position
        });
        jQuery('.links').css({
            float: settings.position,
            textAlign: settings.position
        });
        
        
        //menuListAnimation
        jQuery(this).click(function(){
        jQuery('.listContainer').animate({
            width: 'toggle'
        });
        
        //textShadowing   
        jQuery('.links').mouseover(function(){
        jQuery(this).css('text-shadow', '2px 2px 6px lightyellow');
        jQuery(this).css('color', 'purple');
        })
        jQuery('.links').mouseout(function(){
        jQuery(this).css('text-shadow', 'none');
        jQuery(this).css('color', 'grey');
        })     
        });
        
        //hoverMenuIcon_To_Display_ToolTip
        jQuery('#hamburgerMenuIcon').mouseenter(function(e){        
        document.getElementById('tooltip').innerHTML = settings.msg;
        jQuery('#tooltip').fadeIn();
        })
        
        jQuery('#hamburgerMenuIcon').mouseleave(function(e){        
        jQuery('#tooltip').fadeOut();
        })
    });    
}(jQuery));