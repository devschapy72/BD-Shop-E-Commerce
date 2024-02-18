const ProductReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_LOAGING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "PRODUCTS":
      const updateproduct = action.payload.filter((items) => {
        return items.id;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: updateproduct,
        productDetails: action.payload,
      };

    case "PRODUCT_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default ProductReducer;
