// 交换
function exchange(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// 冒泡排序
function bullysort(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j+1]<arr[j]){
                exchange(arr,j,j+1)
            }
        }
    }
    return arr
}


function insertSort(arr) {
    var len=arr.length
    var temp
    for(var i=1;i<len;i++){
        for(var j=i;j>0&&arr[j]<arr[j-1];j--)
            exchange(arr,j-1,j)
    }
}
// // 快速排序
// function quickSort(arr){
//     if (arr.length<=1) {
//         return arr
//     }
//     var pivotIndex=Math.floor(arr.length/2)
//     var pivot=arr.splice(pivotIndex,1)[0]
//     var left=[]
//     var right=[]
//     for(var i=0;i<arr.length;i++){
//         if (arr[i]<pivot) {
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([pivot],quickSort(right))
// }

// 选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

function brinary_search(arr,low,high,key) {
    if (low>high) {
        return -1;
    }
    var mid=parseInt((low+high)/2)
    if (arr[mid]==key) {
        return mid
    }
    else if (arr[mid]>key) {
        high=mid-1
        return brinary_search(arr,low,high,key)
    }
    else if(arr[mid]<key)
        low=mid+1
        return brinary_search(arr,low,high,key)
}

var arry=[1,5,3,786,23,556,7,4,6,-1]
var temp=selectionSort(arry)

var result=brinary_search(temp,0,10,1)
console.log(result);



