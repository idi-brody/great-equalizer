import { Transaction } from './addTransaction';
import { window } from './globals/window';

export default function storeTransaction(transaction: Transaction) {
  const counterString: string = window.localStorage.getItem('counter');
  const counter: number = counterString ? parseInt(counterString, 10) + 1 : 0;
  window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
  window.localStorage.setItem('counter', `${counter}`);
}