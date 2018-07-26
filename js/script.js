$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>Hello!</li>");
  })
})
