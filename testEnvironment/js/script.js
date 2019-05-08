 var previous = null;
    var current = null;
// SLIDER

    
  // JSON DATA UITLEZEN
  $.getJSON("../antwoorden.json", function(json) {
       // this will show the info it in firebug console
    for (var i = 0; i < json.chat.length; i++) {
      var counter = json.chat[i];
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.innerHTML = '<p>' + counter.user + '</p>';
      document.getElementById("plaatsen").appendChild(slide);
       
    }
      
  // Slider code
      console.log("hekkie");
                $('.berichten-inner').slick({
                  slidesToShow: 2,
                      autoplay: true,
                      autoplaySpeed: 0,
                      variableWidth: true,
                      speed: 4000,
                      cssEase:'linear',
                      infinite: true,
                      arrows: false,
                      dots: false,
                });
        
              
                console.log("hoevaak");
});
  
                
window.setInterval(function(){        
  $.getJSON("../antwoorden.json", function(json) {
        current = JSON.stringify(json);            
            if (previous && current && previous !== current) {
                $('.berichten-inner').slick("unslick");
                console.log('refresh');
                console.log(previous);
                console.log("dit is current");
                console.log(current);
                document.getElementById('plaatsen').innerHTML = '';
                console.log(json.chat.length)
                for (var b = 0; b < json.chat.length; b++) {
                    var counter = json.chat[b];
                    const slide = document.createElement('div');
                    slide.className = 'slide';
                    slide.innerHTML = '<p>' + counter.user + '</p>';
              document.getElementById("plaatsen").appendChild(slide);
                }
                  
                
                $('.berichten-inner').slick({
                  slidesToShow: 2,
                      autoplay: true,
                      autoplaySpeed: 0,
                      variableWidth: true,
                      speed: 4000,
                      cssEase:'linear',
                      infinite: true,
                      arrows: false,
                      dots: false,
                });
            }
            previous = current;
       // this will show the info it in firebug console
  });
    console.log("5seconden")
}, 1000);




if (pagina == 'countdown') {
  // Set the date we're counting down to
  var countDownDate = new Date("May 8, 2019 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var dagen = Math.floor(distance / (1000 * 60 * 60 * 24));
    var uren = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuten = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Output the result in an element with id="demo"
    document.getElementById("dag").innerHTML = dagen;
    document.getElementById("uren").innerHTML = uren;
    document.getElementById("minuten").innerHTML = minuten;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
