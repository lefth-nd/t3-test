
// take an array and find the min val
// swap the values at index j and increment j 
// repeat until array is sorted

function swap(arr: (number|undefined)[], a: number, b:number){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr: number[]){
    for (let i = 0; i < arr.length-1; i++){
        let minidx = i;
        for (let j = i+1; j < arr.length; j++){
            const a = arr[j];
            const b = arr[minidx];
            if (a !== undefined && b !== undefined){
                if (a < b){
                    minidx = j;
                }
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