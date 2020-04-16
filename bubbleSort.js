//bubble sort algorithm and animations 
function doBubbleSort(){
    var lastBar=array.length-1;

    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length-i-1;j++){
            
            const bar1=$("#"+j);
            const bar2=$("#"+(j+1));
  
            if(array[j]>array[j+1]){
                //modify the array
                swap(j, j+1);

                //select the bars to be sorted by changing their background color to selectColor
                setTimeout(()=>{ 
                    colorTwoBars(bar1, bar2, selectColor, selectColor);
                }, (animation_speed*timepoint++));

                 //sort the selected bars and display them on the screen
                setTimeout(()=>{
                    swapBars(bar1, bar2);
                }, (animation_speed*timepoint++));
            }

            //change the background color of the selected bars to unselectColor after sorting them
            setTimeout(()=>{
                colorTwoBars(bar1, bar2, unselectColor,unselectColor);
            },(animation_speed*timepoint++));

            //change the color of the bars to their initial color
            setTimeout(()=>{
                colorTwoBars(bar1, bar2, initialColor, initialColor);
            },(animation_speed*timepoint++));
        }

        //changes the color of the last bar into sortedColor to show that it is sorted
        setTimeout(()=>{
            $("#"+(lastBar--)).css("background", sortedColor);
        }, (animation_speed*timepoint++));;
    }
}
