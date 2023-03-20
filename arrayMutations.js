import produce from 'immer';

const todosArray = [
  { id: 'id1', done: false, body: 'Take out the trash' },
  { id: 'id2', done: false, body: 'Check Email' },
];

// add
const addedTodosArray1 = produce(todosArray, (draft) => {
  draft.push({ id: 'id3', done: false, body: 'Buy bananas' });
});

// remove last item
const updatedTodosArray1 = produce(todosArray, (draft) => {
  draft.pop();
});

// remove first item
const updatedTodosArray2 = produce(todosArray, (draft) => {
  draft.shift();
});

// add item at the beginning of the array
const addedTodosArray2 = produce(todosArray, (draft) => {
  draft.unshift({ id: 'id3', done: false, body: 'Buy bananas' });
});

// delete by index
const deletedTodosArray1 = produce(todosArray, (draft) => {
  draft.splice(1 /*the index */, 1);
});

// insert at index
const updatedTodosArray3 = produce(todosArray, (draft) => {
  draft.splice(3, 0, { id: 'id3', done: false, body: 'Buy bananas' });
});

// update by index
const updatedTodosArray4 = produce(todosArray, (draft) => {
  draft[1].done = true;
});

// update by id
const updatedTodosArray5 = produce(todosArray, (draft) => {
  const index = draft.findIndex((todo) => todo.id === 'id1');
  if (index !== -1) draft[index].done = true;
});

// delete by id
const deletedTodosArray2 = produce(todosArray, (draft) => {
  const index = draft.findIndex((todo) => todo.id === 'id1');
  if (index !== -1) draft.splice(index, 1);
});

// filtering items
const updatedTodosArray6 = produce(todosArray, (draft) => {
  // creating a new state is simpler in this example
  // (note that we don't need produce in this case,
  // but as shown below, if the filter is not on the top
  // level produce is still pretty useful)

  //get all todos with done false
  return draft.filter((todo) => !todo.done);
});

export default function ArrayMutationsRun() {
  console.log('------------ArrayMutationsRun Run-----------');
  console.log(addedTodosArray1);
  console.log(updatedTodosArray1);
  console.log(updatedTodosArray2);
  console.log(addedTodosArray2);
  console.log(deletedTodosArray1);
  console.log(updatedTodosArray3);
  console.log(updatedTodosArray4);
  console.log(updatedTodosArray5);
  console.log(deletedTodosArray2);
  console.log(updatedTodosArray6);
}
