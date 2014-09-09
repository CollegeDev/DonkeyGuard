$(function(){
  $.when($("#header").load("header.html")).then(function(){
      $("#main_content").removeClass('invisible');
      $("#footer").load("footer.html");
   }); 
});