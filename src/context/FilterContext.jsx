import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  sortingValue: "",
  filters: {
    text: "",
    brand: "all brand",
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //   GET_SHOTING_ITEMS
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SHOTING_ITEMS", payload: userValue });
  };

  // SARCH_FILTER_VALUE
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  //   GET_SHOTTING_ITEMS_PRODUCTS
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_ITEMS_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext };
