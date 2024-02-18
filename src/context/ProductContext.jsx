import { createContext, useContext, useEffect, useReducer } from "react";
import ProductApi from "../product_api/ProductApi";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  productDetails: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = (api) => {
    dispatch({ type: "PRODUCT_LOAGING" });
    try {
      const product = api;
      dispatch({ type: "PRODUCTS", payload: product });
    } catch (error) {
      dispatch({ type: "PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(ProductApi);
  }, []);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductContext };
