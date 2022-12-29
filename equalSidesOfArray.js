// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


const findEvenIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        for (let j = i-1; j >= 0; j--) {
            leftSum += arr[j]
        }
        let rightSum = 0
        for (let k = i+1; k < arr.length; k++) {
            rightSum += arr[k]
        }
        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
}


console.log(findEvenIndex([1,2,3,4,3,2,1])) //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //-1