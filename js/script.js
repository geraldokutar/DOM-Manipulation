$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>")
  });
  $("button#goodbye").click(function(){
    $("ul").prepend("<li>Goodbye!</li>")
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>")
  });
  $("button#stop").click(function(){
    $("ul").prepend("<li>Stop copying me!</li>")
  })
})
