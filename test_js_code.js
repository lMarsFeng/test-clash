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
var myArray = [3, 1, 4, 2];
bubbleSort(myArray);
console.log(myArray); // 输出 [1, 2, 3, 4]
