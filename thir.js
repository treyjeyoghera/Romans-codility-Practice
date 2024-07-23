function solution(A, N, B, M) {
    let setA = new Set(A);

    let minVal = Infinity;

    let found = false;

    for (let i = 0; i < M; i++) {
        if (setA.has(B[i])) {
            minVal = Math.min(minVal, B[i]);
            found = true;
        }
    }

    return found ? minVal : -1;
}

