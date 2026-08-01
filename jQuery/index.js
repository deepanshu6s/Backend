$("h1").addClass("abc");

// // $("h1").click(function(){
    
// // });

// $("button").mouseover(function(){
//    $("h1").css("color","violet");
// });

// $("input").mouseover(function(event){
//     $("h1").text(event.key);
// });
// 

$("button").on("mouseover", function(){
    $("h1").animate({margin: "20%"});
});