function doMergeSort(low, high){
    mergeSort(low, high);
    
    //changes the colors of the bars into sortedColor to show that they are sorted
    setTimeout(()=>{
        colorBarsInRange(low, high, sortedColor);
    }, (animation_speed*timepoint++));
}

//recursive mergesort algorithm
function mergeSort(low, high){
    if(low>=high){return;}

    var mid=Math.floor((low+high)/2);

    mergeSort(low, mid);
    mergeSort(mid+1, high);
    merge(low, mid, high);
}

//merging process and sorting animations
function merge(low, mid, high){
    var left=[];
    var right=[];

    //set up auxiliary space to use in the merging process
    setTimeout(()=>{
        for(var i=low;i<=mid;i++){
            left[i-low]=array[i];
        }
    
        for(var j=mid+1;j<=high;j++){
            right[j-mid-1]=array[j];
        }
    }, (animation_speed*timepoint++));
    
    //select the bars to be merged by changing their background color to selectColor
    setTimeout(()=>{
        colorBarsInRange(low, high, selectColor);
    }, (animation_speed*timepoint++));

    //merging logic
    setTimeout(()=>{
        var i=0, j=0, k=low;

        while(i<left.length && j<right.length){
            if(left[i]<right[j]){
                array[k++]=left[i++];
            }
    
            else{
                array[k++]=right[j++];
            }
        }
    
        while(i<left.length){array[k++]=left[i++];}
        while(j<right.length){array[k++]=right[j++];}
    }, (animation_speed*timepoint++));

 
    //merge the selected bars and display them on the screen
    setTimeout(()=>{
        for(var idx=low;idx<=high;idx++){
            var bar=$("#"+ idx)
            $("#"+ idx).text(array[idx]);
            $("#" + idx).css("height", Math.floor(bar.text()/scaleFactor)+"px");
        }
    }, (animation_speed*timepoint++));

    //change the background color of the selected bars to unselectColor after sorting them
    setTimeout(()=>{
        colorBarsInRange(low, high, unselectColor);
    }, (animation_speed*timepoint++));

    //change the background color of the bars back to their initial color
    setTimeout(()=>{
        colorBarsInRange(low, high, initialColor);
    }, (animation_speed*timepoint++));
}

