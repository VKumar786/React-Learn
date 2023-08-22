import { put, takeEvery } from "redux-saga/effects";
import * as action from "../action.constants";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();

  yield put({
    type: action.SET_PRODUCT_LIST,
    data: data?.products,
  });
}

function* searchProducts(data) {
  let result = yield fetch("https://dummyjson.com/products/search?q=phone");
  result = yield result.json();

  console.log('query',data)
  console.log("search products", result);

  yield put({ type: action.SET_PRODUCT_LIST, data: result?.products });
}

function* productSaga() {
  yield takeEvery(action.PRODUCT_LIST, getProducts);
  yield takeEvery(action.SEARCH_PRODUCT_LIST, searchProducts);
}

export default productSaga;
