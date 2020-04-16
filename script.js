//globals representing animation speed and time
var animation_speed=110;
var timepoint=0;

//data representation of array and its size
var array=[];
var size=52;

//the array is initially unsorted
var sorted=false;

/*
    Main function that includes event listeners
*/
$(document).ready(function(){
    //generate array and load it on the screen as DOM elements
    makeArray();
    loadArray();

    //Reload the page when the reset button is clicked
    $("#reset").click(function(){
        window.location.reload();
    });

    //Changing the animation speed slider changes the animation speed
    $(document).on("input", "#changeSpeed", function(){
        animation_speed=220-$(this).val();  
    });

    //Changing the input size slider changes the array size
    $(document).on("input", "#changeSize", function(){
        var animations=window.setTimeout(function() {}, 0);

        //cancel all animations 
        while (animations--) {
            window.clearTimeout(animations); 
        }

        sorted=false;
        timepoint=0;

        /*change the size of the array to the slider's value
          clear the array and create and load a new array
         change the widths of the bars based on input size*/
        size=$(this).val();
        
        array=[];
        clearArray();
        makeArray();
        loadArray();
        
        changeWidth();

        //different ways to center the array based on input size
        if($("#array").css("top")!="-20px"){

            if(size<15){
                changeFontSize();
                $("#array").css("top", "78px");
                $("#array").css("margin-left", "-225px");
            }

            else if(size>70){
                $("#array").css("top", "65px");
                $("#array").css("margin-left", "-270px");
            }
        
            else{
                $("#array").css("top", "65px");
                $("#array").css("margin-left", "-250px");
            }
        }
    });

    //bubble sort the array when the bubble sort buttion is clicked
    $("#bubbleSort").click(function(){
        if(!sorted){
            doBubbleSort();
        }

        sorted=true;
    });

    // merge sort the array when the merge sort button is clicked
    $("#mergeSort").click(function(){
        if(!sorted){
            doMergeSort(0, array.length-1);
        }

        sorted=true;
    });

    //quick sort the array when the quick sort button is clicked
    $("#quickSort").click(function(){
        if(!sorted){
            doQuickSort(0, array.length-1);
        }

        sorted=true;
    });

    //If the window size is less than 710, alert the user to resize the window
    $(document).on("mouseover", function(){
        if(window.innerWidth<=710){
            alert("Resize window and press OK to see the array!");
        }
    });
});

/*
    generate a random integer between a lower bound and upper bound (inclusive)
*/
function generateRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

/*
    Generate an array of a given size with values from 30 to 1000
    This range of values chosen for visibility purposes
*/
function makeArray(){
    for(var i=0;i<size;i++){
        array[i]=generateRandomInt(30, 1000);
    }
}

/*
    Classic function that swaps two elements in an array
*/
function swap(i, j){
    var temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}
