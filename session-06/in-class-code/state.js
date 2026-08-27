let stateObject = [];
let state = "";

stateObject.push(state);

let setState = (newState) => {
  return (state = newState);
};

let [formState, setFormState] = stateObject;

stateObject.push(setState);
console.log(state.object);
console.log(stateObject[0]);
console.log(stateObject[1]);
