$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>Hello!</li>");
  });
  $("button#goodbye").click(function(){
    $("ul").prepend("<li>Goodbye!</li>")
  });

})
