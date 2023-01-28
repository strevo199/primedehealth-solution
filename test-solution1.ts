const rotateArray(array: number[], k: number): number[] => {
    for (let i = 0; i < k; i++) {
        array.unshift(array.pop());
    }
    return array;
}

console.log(rotateArray([1,2,3], 2))





