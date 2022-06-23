import IDay from '../types/IDay';

export default function addTransactionReducer(state, newTransaction): Array<IDay> {
  const newState: Array<IDay> = [...state];
  let isSameDate = false;
  let sameDateIndex = 0;

  for (let i = 0; i < state.length; i += 1) {
    if (newTransaction.date === state[i].date) {
      isSameDate = true;
      sameDateIndex = i;
    }
  }

  if (isSameDate) {
    newState[sameDateIndex].transactions.push({
      name: newTransaction.name,
      value: newTransaction.value,
    });
  } else {
    newState.push({
      date: newTransaction.date,
      transactions: [
        {
          name: newTransaction.name,
          value: newTransaction.value,
        },
      ],
    });
  }
  return newState;
}

export function loadTransactions(state, transactions): Array<IDay> {
  const newState: Array<IDay> = [];
  newState.push({
    date: transactions[0].date,
    transactions: [],
  });
  for (let i = 0; i < transactions.length; i += 1) {
    newState[0].transactions.push({
      name: transactions[i].name,
      value: transactions[i].value,
    });
  }
  return newState;
}