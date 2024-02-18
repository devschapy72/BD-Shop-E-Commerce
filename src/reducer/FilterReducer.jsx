const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    // GET_SHOTING_ITEMS
    case "GET_SHOTING_ITEMS":
      return {
        ...state,
        sortingValue: action.payload,
      };

    //   GET_SHOTTING_ITEMS_PRODUCTS
    case "SORTING_ITEMS_PRODUCTS":
      let newSortData;
      const { filterProducts, sortingValue } = state;
      let tempSortProduct = [...filterProducts];

      const sortingProduct = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }
        if (sortingValue === "highest") {
          return b.price - a.price;
        }
        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProduct);
      return {
        ...state,
        filterProducts: newSortData,
      };

    // SARCH_FILTER_VALUE
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // FILTER_PRODUCTS
    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const { text, brand } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElm) => {
          return curElm.name.toLowerCase().includes(text);
        });
      }
      if (brand !== "all brand") {
        tempFilterProduct = tempFilterProduct.filter((curElm) => {
          return curElm.brand.toLowerCase() === brand.toLowerCase();
        });
      }
      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;
