$(function(){    
    $("#header")
        .load("header.html", function(){
            if($('#showmedia').length){
                $('#media_area')
                    .load("media_area.html", function(){
                        $("#main_content")
                            .removeClass('invisible');
                        $("#footer")
                            .load("footer.html");                        
                    });
            }
            else{
                $("#main_content")
                    .removeClass('invisible');
                $("#footer")
                    .load("footer.html");
            }
    });
});