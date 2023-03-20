import produce from 'immer';

// example complex data structure
const store = {
  users: new Map([
    [
      '17',
      {
        name: 'Michel',
        todos: [
          {
            title: 'Get coffee',
            done: false,
          },
          {
            title: 'Get bike',
            done: true,
          },
        ],
      },
    ],
  ]),
};

// updating something deeply in-an-object-in-an-array-in-a-map-in-an-object:
const nextStore1 = produce(store, (draft) => {
  draft.users.get('17').todos[0].done = true;
});

// filtering out all unfinished todo's
const nextStore2 = produce(store, (draft) => {
  const user = draft.users.get('17');
  // when filtering, creating a fresh collection is simpler than
  // removing irrelevant items
  user.todos = user.todos.filter((todo) => todo.done);
});

export default function NestedDataStructuresRun() {
  console.log('------------Nested Data Structures Run-----------');
  console.log(nextStore1.users.get('17'));
  console.log(nextStore2.users.get('17'));
}
