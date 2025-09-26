export class CartItem {
  productId?: string;
  productName?: string;
  price?: number;
  icon?: string;
}

export class ShoppingCart {
  item?: CartItem;
  totalAmount?: number;
  quantity?: number;
}
