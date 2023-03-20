// Import stylesheets
import './style.css';
import { enableMapSet } from 'immer';
import produce from 'immer';
import ObjectMutationsRun from './objectMutations.js';
import ArrayMutationsRun from './arrayMutations.js';
import NestedDataStructuresRun from './nestedDataStructures.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Immer Js</h1>`;

//-------------------BASICS--------------------------
enableMapSet();
const obj1 = new Map([['key1', { name: 'jack', country: 'usa' }]]);
console.log(obj1.get('key1'));

const newObj1 = produce(obj1, (draft) => {
  draft.get('key1').country = 'india';
});

console.log(newObj1.get('key1'));

//-----------PRODUCE-----------------
const baseState = [
  {
    title: 'Learn TypeScript',
    done: true,
  },
  {
    title: 'Try Immer',
    done: false,
  },
];

const newState = produce(baseState, (draftState) => {
  draftState.push({ title: 'Tweet about it' });
  draftState[1].done = true;
});
console.log(newState);

//----------CURRIED PRODUCER----------------------
const baseState1 = [
  {
    id: 1,
    title: 'Learn TypeScript',
    done: true,
  },
  {
    id: 2,
    title: 'Try Immer',
    done: false,
  },
];

function toggleTodo(state, id) {
  return produce(state, (draft) => {
    const todo = draft.find((todo) => todo.id === id);
    todo.done = !todo.done;
  });
}

const nextState1 = toggleTodo(baseState1, 2);
console.log(nextState1);
// ------------Object Mutations----------------------
ObjectMutationsRun();
//------------Array Mutations----------------------
ArrayMutationsRun();
//------------Nested Data Structures----------------------
NestedDataStructuresRun();
