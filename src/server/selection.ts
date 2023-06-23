
// take an array and find the min val
// swap the values at index j and increment j 
// repeat until array is sorted

function swap(arr: (number|undefined)[], a: number, b:number){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr: number[]){
    let min = arr[0];
    for (let i = 0; i < arr.length-1; i++){
        let minidx = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minidx]){
                minidx = j;
            } 
        }
        if (minidx !== i){
            swap(arr, i, minidx);
        }
    }
}

export default function SelectionSort(arr: number[]){
    sort(arr);
    console.log(arr);
}