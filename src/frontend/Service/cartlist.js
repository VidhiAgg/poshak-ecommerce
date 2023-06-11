import { toast } from "react-toastify";

export const addItemToCart = async (
  payload,
  token,
  setCartItem,
  setDisableCartBtn
) => {
  setDisableCartBtn(true);
  try {
    const response = await fetch("/api/user/cart/", {
      method: "POST",
      headers: { authorization: token },
      body: JSON.stringify({ product: payload }),
    });
    if (response.status === 201) {
      const { cart } = await response.json();
      setCartItem(cart);
      toast.success("Item added to cart.");
    }
  } catch (error) {
    toast.error("Oops!Something is wrong. Please try after some time.");
  } finally {
    setDisableCartBtn(false);
  }
};

export async function updateQuantityOfItemsInCart(setCartItem, productID, action, token) {
  try {
    const response = await fetch("/api/user/cart/" + productID, {
      method: "POST",
      headers: { authorization: token },
      body: JSON.stringify({action:{type:action}}),
    });
if(response.status === 200){
    const {cart} = await response.json();
    setCartItem(cart);
    (action === "increment") ? toast.info("Quantity increased by 1.") :
    toast.info("Quantity decreased by one.")
}

  } catch (error) {
    console.log("Error in Inc/dec quantity");
  }
}

export const removeItemFromCart = async (
  productID,
  token,
  setCartItem,
  setDisableCartBtn
) => {
  setDisableCartBtn(true);
  try {
    const response = await fetch("/api/user/cart/" + productID, {
      method: "DELETE",
      headers: { authorization: token },
    });

    if (response.status === 200) {
      const { cart } = await response.json();
      setCartItem(cart);
      toast.warning("Item deleted from cart.");
    } else {
      toast.success("Failed to deletei item.");
    }
  } catch (error) {
    toast.success("Failed to delete item from Cart.");
  } finally {
    setDisableCartBtn(false);
  }
};
