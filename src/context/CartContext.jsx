import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartItem = () => {
  let newCartItem = localStorage.getItem("shopCart");
  const shopData = JSON.parse(newCartItem);
  if (!Array.isArray(shopData)) return [];
  return shopData;
};

const initialState = {
  cart: getLocalCartItem(),
  totalItem: "",
  totalPrice: "",
  shippingFee: 10000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addtoCart = (id, color, size, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, size, amount, product },
    });
  };

  // REMOVE_CART_ITEM
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // setDecrease
  const setDecrease = (id) => {
    dispatch({ type: "ITEM_DECREASE", payload: id });
  };

  // setIncrease
  const setIncrease = (id) => {
    dispatch({ type: "ITEM_INCREASE", payload: id });
  };

  // CLEAR_CART_ITEMS
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART_ITEMS" });
  };

  //Cart_TOTAL_NUMBER_&_CART_TOTAL_PRICE&_LOCAL_STORAGE
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE_TOTAL_ITEM" });
    localStorage.setItem("shopCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addtoCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
