// JQUERY

$(".tekst-fb").hide();
$(".tekst-email").hide();
$(".tekst-call").hide();

$(".facebook-logo").on("mouseover",function(){
  $(".tekst-fb").fadeIn(1000);
});

$(".email-logo").on("mouseover",function(){
  $(".tekst-email").slideDown(800);
});

$(".call-logo").on("mouseover",function(){
  $(".tekst-call").fadeIn(1000);
});

// JS
window.addEventListener("resize",function(){
  var sirina = document.getElementById("windowSirina");
  var visina = document.getElementById("windowVisina");
  var x = window.innerWidth;
  var y = window.innerHeight;
  sirina.innerHTML = "Širina prozora: " + x;
  visina.innerHTML = "Visina prozora: " + y;
});
