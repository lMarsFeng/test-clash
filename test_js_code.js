//冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        // 执行 n-1 轮比较
        for (var j = 0; j < len - i - 1; j++) {
            // 如果前面的数比后面的数大，交换两个数的位置
            if (arr[j] > arr[j + 1]) {
                // 进行交换
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 示例用法
var myArray = [3, 5, 4, 1 ,2 ,6 ,8, 9];
bubbleSort(myArray);
console.log(myArray); // 输出 [1, 2, 3, 4]

<<<<<<< Updated upstream
//选择排序
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // 找到最小元素的索引
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
=======
//插入排序
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // 将当前元素插入到已排序部分的正确位置
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
>>>>>>> Stashed changes
    }
    return arr;
}

// 示例使用
let array = [64, 25, 12, 22, 11];
<<<<<<< Updated upstream
console.log("选择排序结果:", selectionSort(array));
=======
console.log("插入排序结果:", insertionSort(array));
>>>>>>> Stashed changes
