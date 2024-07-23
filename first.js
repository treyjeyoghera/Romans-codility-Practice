for (let i = 0; i < N; i++) {
    if (R[i] === 'A') {
        balanceA += V[i];
        balanceB -= V[i];
        if (balanceB < minBalanceB) {
            minBalanceB = balanceB;
        }
    } else if (R[i] === 'B') {
        balanceB += V[i];
        balanceA -= V[i];
        if (balanceA < minBalanceA) {
            minBalanceA = balanceA;
        }
    }
}

const initialBalanceA = -minBalanceA;
const initialBalanceB = -minBalanceB;

return [initialBalanceA, initialBalanceB];