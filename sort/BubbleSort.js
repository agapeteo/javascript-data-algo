function bubbleSort(arr) {
    let sorted = false;
    let lastUnsorted = arr.length - 1;
    while(!sorted) {
        sorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i + 1] < arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                sorted = false
            }
        }
        lastUnsorted--
    }
}