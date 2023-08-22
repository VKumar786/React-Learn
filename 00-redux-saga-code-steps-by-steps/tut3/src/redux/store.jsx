import { createStore } from "redux";

const dummyReducer = () => {
  return 100;
};

const store = createStore(dummyReducer);

// const store = createStore(() => {
//   return 100;
// });

export default store;
