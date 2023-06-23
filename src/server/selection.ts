
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
        for (let j = i; j < arr.length; j++){
            if (min === undefined){
            }
            else if (arr[j] < min){
                swap(arr, i, j);
                min = arr[j];
            }
        }
    }
}

export default function SelectionSort(arr: number[]){
    sort(arr);
    console.log(arr);
}