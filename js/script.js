var numberOfUsers = 0;
var counter02 = 0;
var counter34 = 0;
var counter56 = 0;
var counter7 = 0;

var perc02 = 0;
var perc34 = 0;
var perc56 = 0;
var perc7 = 0;



var delay;
var delay1;
function delay() {
  delay = window.setTimeout(start, 500);
	console.log("1")
	delay1 = window.setTimeout(Animation, 600);
	console.log("2")
}


function start(){
fetch('test.php')
    .then(function(initialResponse){
        //could also be .text();
        return initialResponse.json();
    })
    .then(function(data){
        buildIt(data);
    });
function buildIt(data){
    //Ready to go
    //clone the template add data from JSON
		console.log("koga?")
    showStuff(data);
}
 function showStuff(data){
            console.log(data)
            data.forEach(showData)
            
            perc02 = counter02/numberOfUsers*100;
            perc34 = counter34/numberOfUsers*100;
            perc56 = counter56/numberOfUsers*100;
            perc7 = counter7/numberOfUsers*100;

            
            var template = document.querySelector("#element").content;
            
            document.querySelectorAll('.element').forEach(function (element) {
             
            switch(true) {
            case element.classList.contains("first"):
                var zindex = 50;
                for (var i = 1; i <= parseInt(counter02); i++) {
                zindex --;
                var clone = template.cloneNode(true);
                    
                element.appendChild(clone);
                }
                console.log("1");
                break;
            case element.classList.contains("second"):
                for (var i = 1; i <= parseInt(counter34); i++) {   
                var clone = template.cloneNode(true);
                element.appendChild(clone);
                }
                console.log("2");
                break;
             case element.classList.contains("third"):
                for (var i = 1; i <= parseInt(counter56); i++) {   
                var clone = template.cloneNode(true);
                element.appendChild(clone);
                }
               console.log("3");
                break;
            case element.classList.contains("fourth"):
                for (var i = 1; i <= parseInt(counter7); i++) {   
                var clone = template.cloneNode(true);
                element.appendChild(clone);
                }
                console.log("4");
                break;
            default:
                console.log("default from switch");
            }
            });
              var current = 100;
            document.querySelectorAll('.stack').forEach(function (coin) {
             coin.style.zIndex = current;
            current--;
           console.log("shte moji da");
            
            });
            
		  			document.querySelector(".coins-wrapper .perc02").innerHTML = perc02.toFixed(1) +"%";
            document.querySelector(".coins-wrapper .perc34").innerHTML = perc34.toFixed(1) +"%";
            document.querySelector(".coins-wrapper .perc56").innerHTML = perc56.toFixed(1) +"%";
            document.querySelector(".coins-wrapper .perc7").innerHTML = perc7.toFixed(1) +"%";
        }
   
function showData(user){
    console.log(user.user_id, user.guess)
    numberOfUsers ++;
    console.log(numberOfUsers);
    var input  = Number(user.guess);
    
    
    switch(true) {
    case input<=2:
        counter02 ++;
        console.log("hop hop");
        break;
    case input<=4 && input>=3:
        counter34 ++;
        break;
     case input<=6 && input>=5:
        counter56 ++;
        break;
    case input>=7:
        counter7 ++;
        break;
    default:
        console.log("less than 0");
    }
   
}
}
function Animation(){
    var logo = document.querySelectorAll(".first .stack");
		var all = document.querySelectorAll(".stack");
	
    TweenMax.staggerFrom(logo, 1, {y:"-600px", ease:Expo.easeOut},-.1);
	
     var logo1 = document.querySelectorAll(".second .stack");
    TweenMax.staggerFrom(logo1, 1, {y:"-600px", ease:Expo.easeOut},-.1);
    
     var logo2 = document.querySelectorAll(".third .stack");
    TweenMax.staggerFrom(logo2, 1, {y:"-600px", ease:Expo.easeOut},-.1);
    
     var logo3 = document.querySelectorAll(".fourth .stack");
    TweenMax.staggerFrom(logo3, 1, {y:"-600px", ease:Expo.easeOut},-.1);
	
		TweenMax.staggerTo(all, 2, {opacity:1},);
	
	console.log("tweenmax works")
}