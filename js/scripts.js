$(function() {
  $("img#cat").click(function(){
    $("ul#cat").prepend("<li>MEOW</li>");
    $("img#dog").after("#cat2");
    $("img#dog").after('<img id="dog2" src="img/dog2.jpg" />');
  });
  $("img#dog").click(function(){
    $("ul#dog").prepend("<li>BARK</li>");
    $("img#dog").after('<img id="cat2" src="img/cat2.jpg" />');
    //$("img#cat2").addClass("appear");
  });
});
