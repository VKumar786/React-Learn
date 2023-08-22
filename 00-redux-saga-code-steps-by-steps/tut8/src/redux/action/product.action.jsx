import { PRODUCT_LIST } from "../action.constants";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
    data: [],
  };
};
