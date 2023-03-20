import produce from 'immer';

const todosObj = {
  id1: { done: false, body: 'Take out the trash' },
  id2: { done: false, body: 'Check Email' },
};

// add
const addedTodosObj = produce(todosObj, (draft) => {
  draft['id3'] = { done: false, body: 'Buy bananas' };
});

// delete
const deletedTodosObj = produce(todosObj, (draft) => {
  delete draft['id1'];
});

// update
const updatedTodosObj = produce(todosObj, (draft) => {
  draft['id1'].done = true;
});

export default function ObjectMutationsRun() {
  console.log('------------ObjectMutations Run-----------');
  console.log(addedTodosObj);
  console.log(deletedTodosObj);
  console.log(updatedTodosObj);
}
