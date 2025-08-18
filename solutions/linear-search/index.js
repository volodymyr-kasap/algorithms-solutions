function search(arr, x) {
    const n = arr.length;
    
    // Iterate over the array in order to
    // find the key x
    for (let i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}