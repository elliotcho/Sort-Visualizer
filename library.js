/*
    Personalized library of methods and globals to manipulate DOM elements 
*/

//variable that scales the height of the bars
 var scaleFactor=1.6;

//animation colors
 var initialColor="#FF00FF";
 var selectColor="red";
 var unselectColor="#00FF00";
 var pivotColor="#999900";
 var pIndexColor="turquoise";
 var sortedColor="darkviolet";

/*
    load the array as DOM elements
*/
function loadArray(){
    array.forEach(function(e){
        $("#array").append("<div>"+e+"</div>");
    });

    var id=0;

    //set the height, class and id of the bars 
    $("#array").children("*").each(function(){
        $(this).css("height", Math.floor($(this).text()/scaleFactor) +"px");
        $(this).attr("id", id++);
        $(this).addClass("bars");
    });
}


/*
    clear the array from the screen
*/
function clearArray(){
    $("#array").children("*").each(function(){
        $(this).remove();
    });
}

/*
    swap two bars on the screen
*/
function swapBars(bar1, bar2){
    var temp=bar1.text();
    bar1.text(bar2.text());
    bar2.text(temp);

    bar1.css("height", Math.floor(bar1.text()/scaleFactor)+"px");
    bar2.css("height", Math.floor(bar2.text()/scaleFactor)+"px");
}

/*
    color two bars on the screen with specified colors
*/
function colorTwoBars(bar1, bar2, color1, color2){
    bar1.css("background", color1);
    bar2.css("background", color2);
}

/*
    color bars within a certain range with specified color
*/
function colorBarsInRange(low, high, color){
    for(let idx=low;idx<=high;idx++){
        $("#" + idx).css("background", color);
    }
}

/*
    change the width of the bars (as their input size changes)
*/
function changeWidth(){
    $("#array").children("*").each(function(){
        $(this).css("width", (40/size)*(10) + "px");
    });
}

/*
    chnage the font size of the bars so that it's visible
*/
function changeFontSize(){
    $("#array").children("*").each(function(){
        $(this).css("font-size", "0.9em");
    });
}