import { CartItem, Product } from "@/types/types";

export function addItemsToCart(
  cart: CartItem[],
  itemsToAdd: CartItem[]
): CartItem[] {
  const newCart = [...cart];

  itemsToAdd.forEach(({ product, quantity, bundledWith, staffId }) => {
    const index = newCart.findIndex(
      (item) =>
        item.product.id === product.id && item.bundledWith === bundledWith
    );

    if (index !== -1) {
      const existing = newCart[index];
      newCart[index] = {
        ...existing,
        quantity: existing.quantity + quantity,
        staffId: staffId ?? existing.staffId,
      };
    } else {
      newCart.push({ product, quantity, bundledWith, staffId });
    }
  });

  return newCart;
}
