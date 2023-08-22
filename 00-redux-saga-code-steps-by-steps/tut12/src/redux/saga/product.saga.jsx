import { put, takeEvery } from "redux-saga/effects";
import * as action from "../action.constants";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  console.warn("Data", data);

  yield put({
    type: action.SET_PRODUCT_LIST,
    data: data?.products,
  });
}

function* productSaga() {
  yield takeEvery(action.PRODUCT_LIST, getProducts);
}

export default productSaga;
