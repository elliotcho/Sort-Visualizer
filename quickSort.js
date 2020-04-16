//recursive quicksort algorithm
function doQuickSort(low, high){
    if(low>high){return;}

    const pIndex=partition(low, high);

    //set the color of the bar at the partition index to sortedColor to show that it's sorted
    setTimeout(()=>{
        $("#" + pIndex).css("background", sortedColor);
    }, (animation_speed*timepoint++));

    doQuickSort(low, pIndex-1);
    doQuickSort(pIndex+1, high);
}

//partition logic and animations
function partition(low, high){
    var pIndex=low;
    var pivot=array[high];

    const pIndexBar=$("#" + pIndex);
    const pivotBar=$("#" + high);

    /*set the color of bar at the pivot's index to pivotColor
    if the partition index isn't equal to pivot, then set its color to pIndexColor*/
    setTimeout(()=>{
        if(pIndex!=pivot){
            colorTwoBars(pIndexBar, pivotBar, pIndexColor ,pivotColor);
        }

        else{
            pivotBar.css("background", pivotColor);
        }
    }, (animation_speed*timepoint++));

    for(var i=low;i<high;i++){
        const bar1=$("#" + i);
        const bar2=$("#" + pIndex);

        /*set the color of the bar at index i (currently being processed) to selectColor
        otherwise if the bar at the current index is the partition index, its color is set to pIndexColor*/
        setTimeout(()=>{
            colorTwoBars(bar1, bar2, selectColor, pIndexColor);
        }, (animation_speed*timepoint++));

        if(array[i]<pivot){
            swap(i, pIndex++);

            const newPIndexBar=$("#" + pIndex);   //jQuery object that refers to the bar at the new partition index

            /*check if the previous partition index is not equal to index i
                select the bars at the previous partition index and  index i by setting their color to selectColor
                if our condition is not satisfied skip this step
                
                then swap the bars at the previous partition index and index i

                check if the previous partition index is not equal to index i
                then show that the bar at the previous partition index and index i have been swapped
                we do this by setting their color to unselectColor
                if our condition is not satisfied skip this step

                set the color of the bars at the previous partition index and index i to their initial color

                mark the new partition index in pIndexColor if the new partition index is not equal to the pivot's index
            */
            if(i!=pIndex-1){
                setTimeout(()=>{
                    colorTwoBars(bar1, bar2, selectColor, selectColor);
                }, (animation_speed*timepoint++));
            }

            setTimeout(()=>{
                swapBars(bar1, bar2);
            }, (animation_speed*timepoint++));

            if(i!=pIndex-1){
                setTimeout(()=>{
                    colorTwoBars(bar1, bar2, unselectColor, unselectColor);
                }, (animation_speed*timepoint++));
            }

            setTimeout(()=>{
                colorTwoBars(bar1, bar2, initialColor, initialColor);
            }, (animation_speed*timepoint++));

            if(pIndex!=high){
                setTimeout(()=>{
                    newPIndexBar.css("background", pIndexColor);
                }, (animation_speed*timepoint++));
            }
        }

        //if the partition index is not equal to index i, change the bar at index i back to its initial color
        if(pIndex!=i){
            setTimeout(()=>{
                bar1.css("background", initialColor);
            }, (animation_speed*timepoint++));
        }
    }

    //swap the partition index with the pivot
    swap(pIndex, high);

    const bar1=$("#" + pIndex);
    const bar2=$("#" + high);

    /*set the colors of the pivot bar and the partition index to selectColor
        this shows they are being processed
        then swap the bars, and set their colors to unselectColor show that they have been swapped
    */
    setTimeout(()=>{
        colorTwoBars(bar1, bar2, selectColor, selectColor);
    }, (animation_speed*timepoint++));

    setTimeout(()=>{
        swapBars(bar1, bar2);
    }, (animation_speed*timepoint++));

    setTimeout(()=>{
        colorTwoBars(bar1, bar2, unselectColor, unselectColor);
    }, (animation_speed*timepoint++));


    /*
        if the pivot is equal to the partition index just change the bar's color to sortedColor
        this shows that the bar is sorted
        otherwise, change the color at the partition index to sortedColor to show that it's sorted
        and change the color of the other bar to initialColor
    */
    if(pIndex!=high){
        setTimeout(()=>{
            colorTwoBars(bar1, bar2, sortedColor, initialColor);
        }, (animation_speed*timepoint++));
    }

    else{
        setTimeout(()=>{
            bar1.css("background", sortedColor);
        }, (animation_speed*timepoint++));
    }
    
    return pIndex;
}

