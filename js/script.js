$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>")
    $("li").click(function(){
      alert("h1");
    })
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>")
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>")
    $("li").click(function(){
      alert("h1");
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>")
    $("ul#webpage").prepend("<li>Padon me. I meant no offence</li>")
    $("li").click(function(){
      alert("h1");
  })
})
