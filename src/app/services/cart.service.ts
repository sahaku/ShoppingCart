import { Injectable, signal } from '@angular/core';
import { CartItem, ShoppingCart } from '../model/product';
import { mockItems } from '../data/mock.item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private shoppingCarts = signal<ShoppingCart[]>([]);
  //cart = signal<ShoppingCart>({
  //  items: mockItems,
  //  totalAmount: this.calculateTotalAmount(mockItems)
  //});
  constructor() { }



  getProducts(){
    return mockItems;
  }

  getCartItems() {
    return this.shoppingCarts();
  }
  addToCart(shoppingCart: ShoppingCart) {
    const items = this.shoppingCarts();
    const index = items.findIndex(i => i.item?.productId == shoppingCart.item?.productId);
    if (index > -1) {
      items[index].quantity! += (shoppingCart.quantity ?? 0);

    }
    else {
      items.push(shoppingCart);
    }
    this.shoppingCarts.set([...items]);
  }
  removeItemFromCart(productId?: string, quantity?: number) {
    const items = this.shoppingCarts();
    const index = items.findIndex(i => i.item?.productId == productId);
    if (index > -1 && items[index].quantity! > 0) {
      items[index].quantity! -= (quantity ?? 1);
      if (items[index].quantity! <= 0) {
        items.splice(index, 1);
        this.shoppingCarts.set([...items]);
      }
    }
   
  }
  clearCart() {
    this.shoppingCarts.set([]);
  }
}
