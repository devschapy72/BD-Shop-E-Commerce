const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, size, amount, product } = action.payload;

      // EXISTING_PRODUCT_**Start**
      let exisitingProduct = state.cart.find(
        (curItem) => curItem.id == id + color
      );

      if (exisitingProduct) {
        let updateProduct = state.cart.map((curELm) => {
          if (curELm.id == id + color) {
            let newAmount = curELm.amount + amount;
            if (newAmount >= curELm.max) {
              newAmount = curELm.max;
            }
            return {
              ...curELm,
              amount: newAmount,
            };
          } else {
            return curELm;
          }
        });
        return {
          ...state,
          cart: updateProduct,
        };
      } else {
        if (!product) {
          console.error("Product is undefined in action payload.");
          return state;
        }

        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          size,
          image: product.image,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    // EXISTING_PRODUCT_**End**

    // REMOVE_ITEM_CART
    case "REMOVE_ITEM":
      let updateCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return {
        ...state,
        cart: updateCart,
      };

    // CLEAR_CART_ITEMS
    case "CLEAR_CART_ITEMS":
      return {
        ...state,
        cart: [],
      };

    // setDecrease
    case "ITEM_DECREASE":
      let updateDecrease = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let decreaseAmoutn = curElm.amount - 1;
          if (decreaseAmoutn <= 1) {
            decreaseAmoutn = 1;
          }

          return {
            ...curElm,
            amount: decreaseAmoutn,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updateDecrease,
      };

    // setIncrease
    case "ITEM_INCREASE":
      let updateIncrease = state.cart.map((curElm) => {
        if (curElm.id === action.payload) {
          let increaseAmoutn = curElm.amount + 1;

          if (increaseAmoutn >= curElm.max) {
            increaseAmoutn = curElm.max;
          }

          return {
            ...curElm,
            amount: increaseAmoutn,
          };
        } else {
          return curElm;
        }
      });
      return {
        ...state,
        cart: updateIncrease,
      };

    // CART_TOTAL_PRICE_TOTAL_ITEM

    case "CART_TOTAL_PRICE_TOTAL_ITEM":
      let { totalItem, totalPrice } = state.cart.reduce(
        (accum, curELm) => {
          let { price, amount } = curELm;

          accum.totalItem += amount;
          accum.totalPrice += price * amount;
          return accum;
        },
        {
          totalItem: 0,
          totalPrice: 0,
        }
      );
      return {
        ...state,
        totalItem,
        totalPrice,
      };

    default:
      return state;
  }
};

export default CartReducer;
