/* eslint-disable no-console */
// Mock localStorage when it is not allowed
import {CrossStorageHub} from 'cross-storage';
let localStorage;

const originPublic = new RegExp(`${process.env.REACT_APP_PUBLIC}$`,'')
const originPrivate = new RegExp(`${process.env.REACT_APP_PRIVATE}$`,'')


CrossStorageHub.init([
  {origin: originPublic, allow: ['get', 'set', 'del', 'getKeys', 'clear']},
  {origin: originPrivate, allow: ['get', 'set', 'del', 'getKeys', 'clear']}
]);

try {
  localStorage = window.localStorage;
} catch (error) {
  localStorage = {
    getItem: () => undefined,
    setItem: () => {}
  };
}

export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state, key) => {
  try {
    const serializedState = state ? JSON.stringify(state) : '';
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.warn(`Error saving Redux state: ${error}`);
  }
};

export const getToken = () => loadState('accessToken');