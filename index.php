<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fairtrade Website</title>
    <link rel="stylesheet" type="text/css" href="css/styleIslands.css">
    <link rel="stylesheet" type="text/css" href="css/jInvertScroll.css">
    <link rel="stylesheet" href="css/styleForms.css" type="text/css">
    <link rel="stylesheet" href="css/styleCoins.css" type="text/css">
    <link rel="stylesheet" href="css/cloud.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Patua+One" rel="stylesheet">
    <script src="https://use.fontawesome.com/fb4d15945f.js"></script>
</head>

<body>
   <div class="small-window"><p class="mobile">Please, view this website on Desktop.</p>
   <p class="desktop">Please, view this website in Fullscreen.</p>
<!--   <p class="desktop">Please, view this website on Desktop or in Fullscreen.</p>-->
   </div>
    <div class="container">
        
        <div class="all scroll">
            <div id="bananaTop" class="banana"></div>
        		<div id="bananaBottom" class="banana"></div>
           <div class="bananaCrate top">
           	<img src="png/crate.png" alt="crate">
           </div>
           <div class="bananaCrate bottom">
           	<img src="png/crate.png" alt="crate">
           </div>
           <div id="ship" class="boat"></div>
        	 <div id="submarine" class="boat"></div>
          <img id="testtt" src="png/coin-larger.png" alt="fairtrade logo" style="display:none;">
            <div class="section intro">
            	<img id="logo" src="png/fairtradeWhite.png" alt="fairtrade logo">
             	<h1>Make a Choice</h1>
             	
             	<h2><br>Scroll down to find out what big brands <br> won't tell you on the packaging</h2>
             	<h4 class="video hide">Watch our video</h4>
             	<iframe class="hide" width="350" height="200" src="https://www.youtube.com/embed/gkO5G-gHREI" frameborder="0" allowfullscreen></iframe>
             	<h4 class="documentation hide">Documentation</h4>
             	<ul class="hide">
             		<li><a href="http://5kreations.com/FairtradeWebsite/PDF/Problem-formulation-and-area.pdf" target="_blank">Problem Formulation.pdf</a></li>
             		<li><a href="http://5kreations.com/FairtradeWebsite/PDF/final-report.pdf" target="_blank">Report.pdf</a></li>
             		<li><a href="http://5kreations.com/FairtradeWebsite/PDF/experience-360-map.pdf" target="_blank">Experience 360 map.pdf</a></li>
             		<li><a href="http://5kreations.com/FairtradeWebsite/PDF/User-testing-and-mock-up-iteration.pdf" target="_blank">Testing & Iterations.pdf</a></li>
             		<li><a href="http://5kreations.com/FairtradeWebsite/PDF/ER-diagram.pdf" target="_blank">ER Diagram.pdf</a></li>
             	</ul>
             	<!-- change this  <div class="scroll-indicator fa fa-chevron-down"></div> -->
             	
            </div>
            <div class="islands">
            <div class="bigwrapper supermarket">
            <div class="wrapper one">
            	<div class="box image">
	           		<img src="png/supermarket_1.png" alt="supermarket" id="supermarket">
            	</div>
            	<div class="box image">
            		<img src="png/supermarket_1.png" alt="supermarket" id="supermarket">
            	</div>
            </div>
            <div class="wrapper two">
            	<div class="box text">
            		<p>Fairtrade has guidelines set in place to protect consumers and the environment, for instance; producers must not use genetically modified organisms, there is also a list of chemicals which they must not use on products.</p>
            	</div>
            	<div class="box text">
            		<p>Vast quantities of pesticides, herbicides and other chemicals are applied to banana crops, harming both consumers and farmers.</p>
            	</div>
            </div>
            </div>
            <div class="bigwrapper sea">
            <div class="wrapper one">
            	<div class="box image waves">
            		<img class="front" src="png/front%20wave%20.png" alt="waves">
            		<img class="back" src="png/waves.png" alt="waves">
            	</div>
            	<div class="box image waves">
            		<img class="front" src="png/front%20wave%20.png" alt="waves">
            		<img class="back" src="png/waves.png" alt="waves">
            		<div class="mask"></div>
            	</div>
            </div>
            <div class="wrapper two">
            	<div class="box text"><p>The Fairtrade system seeks to ensure full physical traceability of certified products.</p></div>
            	<div class="box text"><p>Commercial products go through various exchanges meaning that it is hard to trace their origin.</p></div>
            </div>
            </div>
            <div class="bigwrapper farm">
             <div class="wrapper one">
            	<div class="box image">
            		<img src="png/farm%202.png" alt="farm">
            	</div>
            	<div class="box image">
            		<img src="png/factory.png" alt="">
            	</div>
            </div>
            <div class="wrapper two">
            	<div class="box text"><p> Fairtrade consults with farmers and traders to guarantee a fair minimum price which covers the cost of growing crops, protecting them from price fluctuation.</p></div>
            	<div class="box text"><p> 3/4 of workers in developing countries live on less than 6DKK a day with most depending on mass producing plantations.</p></div>
            </div>
						</div>
            <div class="bigwrapper school">
            <div class="wrapper one">
            	<div class="box image">
            		<img src="png/school.png" alt="school" style="height: 105%;">
            	</div>
            	<div class="box image">
            	<img src="png/working%20farm%20.png" style="transform: scaleX(-1)" alt="">
            	</div>
            </div>
            <div class="wrapper two">
            	<div class="box text"><p>Fairtrade's premium ensures that farmers can develop their business and communities healthcare and education.</p></div>
            	<div class="box text"><p>Low income means that children are likely to be exposed to child labour, human trafficking and gang related activities.</p></div>
            </div>
        		</div>
        		
        
         </div>
         <div class="last">
        			 <div class="forms">
									<h2>How much do you think a Fairtrade banana costs?</h2>
									<div id="guess">
									<div class="banana-wrapper">
										<img src="png/fair%20trade%20banana.png" alt="fairtrade banana">
										<img src="png/commercial%20banana%20.png" alt="commercial banana">
									</div>
									
										<form id="submitGuess" action="inc/submit.php" method="post" enctype="multipart/form-data"> 

										<input id="priceguess" type="text" name="priceguess" required>
										<label for="priceguess"></label>						<input type="submit" value="Submit your guess">
										</form>
										
										<p>DKK</p>
										<p>2 DKK</p>
								
									</div>
									</div>
									<div id="data" >
										<h2>You guessed <span></span>.</h2>
										<div class="data-text">
											<p id="changeP" class="datap">You and <span>1,354</span> people think that Fairtrade bananas are more expensive than commercial bananas.<br>They are actually the same price.
											</p>
											<p class="datap">For <span>2 DKK</span> farmers get fair living conditions and a stable income.</p>
											<p class="datap">Make the right choice.</p>
											<img id="logolast" src="png/fairtradelogotransparent.png" alt="fairtrade logo">
										</div>
							<section id="coins">
									<div class="coins-wrapper">
									<p class="perc02"></p>
									 <article class="element first">

									 </article>
									 <h3>Guessed 0-2</h3>
									</div> 
									<div class="coins-wrapper">
									<p class="perc34"></p>
									 <article class="element second">

									 </article>
									 <h3>Guessed 3-4</h3>
									</div>
									<div class="coins-wrapper">
									<p class="perc56"></p>
									 <article class="element third">

									 </article>
									 <h3>Guessed 5-6</h3>
									</div> 
									<div class="coins-wrapper">
									<p class="perc7"></p>
									 <article class="element fourth">

									 </article>
									 <h3>Guessed 7+</h3>
									</div>        
							</section>
							<p class="social-media">Surprising? Share:</p>
							<img class="social-media" src="png/socialMedia.png" alt="social media icons">
							<template id="element">
											<div class="stack">
												<img src="png/coin.png" alt="coin image">
											</div>
							</template>
									</div>
								</div>
								</div>
        		</div>
    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
    <script src="js/jquery.jInvertScrollIslands.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript">
	(function($) {
		$.jInvertScroll(['.scroll']);
	}(jQuery));
	
	$(document).ready(function(){
		$('html, body').animate({scrollTop: 0}, 20);
	});
	</script>
    <script type="text/javascript">
	(function($) {
		$.jInvertScroll(['.scroll']);
	}(jQuery));
	
	$(document).ready(function(){
		$('html, body').animate({scrollTop: 0}, 20);
	});
	</script>
	<script type="text/javascript">
		$( "#logo" ).click(function() {
  		$(".hide").fadeToggle();
		});
	$(function () {
    $("#submitGuess").submit(function (e) {
				var value =  $('#priceguess').val();
				console.log("guess is: " + value );
				$('#data h2 span').append(value + " DKK")
				if(value == 2){
					$('#changeP').html("Good guess! However, <span>1,354</span> people think that Fairtrade bananas are more expensive than commercial bananas when in fact they are the same price.")
				}
        e.preventDefault(); //STOP default action
        $.ajax({
            url: $(this).attr("action"),
            type: "POST",
            data: $(this).serializeArray(),
            success: function (data, textStatus, jqXHR) {
                
//								$(.data h2 span).append(data.guess);
								$('.forms').fadeOut("300", function () {
    							$('#data').fadeIn('500');
									delay();
								});
								
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Doing things here too
                alert('error');
            }
        });
        return false;
    });
});
	</script>
	<script>
		
  		if (document.querySelector("#data").style.display == 'block') { 
				console.log('data is block'); 
			}else{
				console.log('data is none');
			}
		
		
	</script>
</body>
</html>
