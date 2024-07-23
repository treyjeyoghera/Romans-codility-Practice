

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permute(digits, start, end, validTimes) {
    if (start === end) {
        let hour = digits[0] * 10 + digits[1];
        let minute = digits[2] * 10 + digits[3];
        if (hour < 24 && minute < 60) {
            let timeCode = hour * 60 + minute;
            validTimes.add(timeCode);
        }
    } else {
        for (let i = start; i <= end; i++) {
            swap(digits, start, i);
            permute(digits, start + 1, end, validTimes);
            swap(digits, start, i); // backtrack
        }
    }
}

function solution(A, B, C, D) {
    let digits = [A, B, C, D];
    let validTimes = new Set();

permute(digits, 0, 3, validTimes);

return validTimes.size;
}