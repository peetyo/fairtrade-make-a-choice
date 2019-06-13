/**
*	jQuery Plugin for simple vertical scrolling - horizontal movement parallax effect
*	I wrote this plugin for a project we have done.
*
*	License:
*	The MIT License (MIT)
*
*	@version 0.8.3
*
*   Copyright (c) 2013 pixxelfactory
*   
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*   of this software and associated documentation files (the "Software"), to deal
*   in the Software without restriction, including without limitation the rights
*   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*   copies of the Software, and to permit persons to whom the Software is
*   furnished to do so, subject to the following conditions:
*   
*   The above copyright notice and this permission notice shall be included in
*   all copies or substantial portions of the Software.
*   
*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*   THE SOFTWARE.
**/

(function ($) {
    'use strict';

    $.jInvertScroll = function(sel, options) {
        var defaults = {
            width: 'auto',		    // The horizontal container width
            height: 'auto',		    // How far the user can scroll down (shorter distance = faster scrolling)
            onScroll: function(percent) {  // Callback fired when the user scrolls down, the percentage of how far the user has scrolled down gets passed as parameter (format: 0.xxxx - 1.0000)
                // do whatever you like
                
                    
                console.log("percent is: " + percent);
							//Peter percent update -> trigger and crateLocation you can try deducting half of the crate width;
							 	var trigger = percent  ;
								var crateLocation = bananaLocation;
								var crateLocation1 = crateLocation + "px";
								var shipLocation = bananaLocation - 10;
								 if(trigger > 0.1203){
										console.log("show bananas")
                    $(".banana").css('opacity','1');
										
                }else{
										console.log("hide bananas")
                    $(".banana").css('opacity','');
                }
								if(trigger > 0.2133){
										console.log("bananas in boxes");
										$(".bananaCrate").addClass("sticky");
										$(".supermarket .box.text").css('opacity','1')
								}else{
                    $(".bananaCrate").removeClass("sticky");
										$(".supermarket .box.text").css('opacity','0')
                 }
								if(trigger > 0.2580){
										$(".box.text").css('opacity','0')
								}
								if(trigger > 0.3666){
										console.log("boxes in boats");
										$(".boat").addClass("sticky");
										$(".bananaCrate.bottom").css("top","86%");
										$("#bananaBottom").css("top","83%");
								}else{
                    $(".boat").removeClass("sticky");
										$(".bananaCrate.bottom").css("top","");
										$("#bananaBottom").css("top","");
                 }
								if(trigger > 0.3767){
										console.log("submarine goes down");
										
										$("#submarine").css('top','67%')
								}else{
										$("#submarine").css('top','');
										
                 }
								if(trigger > 0.4620){
										console.log("boats stop. submarine goes up");
										//$(".boat").removeClass("sticky");
										$(".boat").css('left','242vw');
										$(".boat").css('position','absolute');
										$("#submarine").css('top','');
										$(".bananaCrate.bottom").css("top","");
										$("#bananaBottom").css("top","");
										$(".sea .box.text").css('opacity','1')
								}
								if(trigger > 0.5017){
										console.log("banana leaves box");
										$(".bananaCrate").removeClass("sticky");	$(".sea .box.text").css('opacity','0');
								}
								if(trigger < 0.4620 && trigger > 0.3666){
										$(".boat").css('left','');
										$(".boat").css('position','');
										
								}
								if(trigger > 0.6202){
										console.log("banana leaves box");
										$(".bananaCrate").removeClass("sticky");
										$(".farm .box.text").css('opacity','1')
								}
								if(trigger > 0.6595){
										console.log("banana leaves box");
										$(".farm .box.text").css('opacity','0');
								}
								if(trigger < 0.6202 && trigger > 0.2133){
										$(".bananaCrate").addClass("sticky");
										
								}
								if(trigger > 0.7463){
										$(".school .box.text").css('opacity','1');
								}
								if(trigger > 0.7578){
										console.log("hide bananas")
                    $(".banana").css('display','none');	
								}else{
										$(".banana").css('display','');
								}
								if(trigger > 0.8330){
										$(".school .box.text").css('opacity','0');
								}
 								
           }
        };
        
        var config = $.extend(defaults, options);
        
        if(typeof sel === 'Object' && sel.length > 0) {
            return;
        }
        
        var elements = [],
            longest = 0,
            totalHeight,
            winHeight,
            winWidth,
						bananaLocation,
						bananaPercent,
						winWidthPercent;
//peter updating array with banana location
        function init() {
            // Extract all selected elements from dom and save them into an array
            $.each(sel, function (i, val) {
              $(val).each(function (e) {
                elements.push($(this));

                var w = $(this).width();
                if (longest < w) {
                  longest = w;
                }
              });
            });

            // Use the longest elements width + height if set to auto
            if (config.width == 'auto') {
              config.width = longest;
            }

            if (config.height == 'auto') {
              config.height = longest;
            }

            // Set the body to the selected height
            $('body').css('height', config.height + 'px');
        }

        function calc() {
          totalHeight = $(document).height();
          winHeight = $(window).height();
          winWidth = $(window).width();
					bananaLocation = ($(window).width())/2 - 10;
					bananaPercent = bananaLocation/totalHeight;
					winWidthPercent = winWidth/totalHeight;
					//console.log("total height is " + totalHeight);
					//console.log("win height is " + winHeight);
					//console.log("win width is " + winWidth);
					//console.log("banana location is " + bananaLocation);
					//console.log("banana percent is " + bananaPercent);
        }
//Peter calculation banana location distance between the edge and the banana div
        function onscroll(e) {
            var currY = $(this).scrollTop();
						
						console.log("current scroll is" + currY)
            // Make calculations
            calc();
						var newScrollPercent  = currY/totalHeight;
						console.log("new scroll: " + newScrollPercent)
            var diff = totalHeight - winHeight; 
				//Peter weird change to fix overscrolling instead of - winHeigth -> + winHeight*2
            var scrollPercent = 0;

            if (diff != 0) {
              // Current percentual position
              scrollPercent = (currY / diff);
							console.log("scrollpercent is " + scrollPercent);
            }
//Peter here is the calculation for the percent parameter
            // Call the onScroll callback
            if(typeof config.onScroll === 'function') {
              config.onScroll.call(this, scrollPercent);
            }

            // do the position calculation for each element
            $.each(elements, function (i, el) {
              var deltaW = el.width()-winWidth; 
							//Peter check this out? el.width()-winWidth this is the original
              if (deltaW <= 0) {
                deltaW = el.width();
              }
              var pos = Math.floor(deltaW * scrollPercent) * -1;
              el.css('left', pos);
            });
        }

        function setlisteners() {
            // Listen for the actual scroll event
            $(window).on('scroll resize', onscroll);
            $([document, window]).on('ready resize', calc);
        }


        // Init actions
        init();
        setlisteners();


        return {
            reinitialize: function() {
                init();
                setlisteners();
            },
            destroy: function() {
                // Remove previously added inline styles
                $('body').attr('style', '');

                // Remove listeners
                $(window).off('scroll resize', onscroll);
                $([document, window]).off('ready resize', calc);
            }
        };
    };
}(jQuery));

/**
 * Detects if two elements are colliding
 *
 * Credit goes to BC on Stack Overflow, cleaned up a little bit
 *
 * @link http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery
 * @param $div1
 * @param $div2
 * @returns {boolean}
 */
var is_colliding = function( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};

var b = $("#bananaTop")
var c = $(".bananaCrate")
setInterval(function(){
	if(is_colliding(b,c)){
		//c.addClass("sticky")
	}
	
}, 100)
