/**
 * Created by hp on 2017/6/9.
 */
    $(function(){
        var i=0;
        var pageCount=$(".page").length-1;
        $("body").swipeUp(

            function(){

                if(i<pageCount){

                    $(".page").eq(i).addClass("pageUp");
                    $(".page").eq(i).children().addClass("hide");
                    i++;
                    $(".page").eq(i).removeClass("pageDown");
                    $(".page").eq(i).children().removeClass("hide");

                }
            }

        );
        $("body").swipeDown(

            function(){

                if(i>0){

                    $(".page").eq(i).addClass("pageDown");
                    $(".page").eq(i).children().addClass("hide");
                    i--;
                    $(".page").eq(i).removeClass("pageUp");
                    $(".page").eq(i).children().removeClass("hide");



                }
            }
        );
        $(".musicimg").tap(
            function(){
                $(this).toggleClass("music")
                if($("audio").get(0).paused){
                    $("audio").get(0).play()
                }
                else{
                    $("audio").get(0).pause()
                }
            }
        )

    });
