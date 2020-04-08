function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            let tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j--
        }
    }
}