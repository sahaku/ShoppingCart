import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, ShoppingCart } from '../../model/product';
import { CommonModule } from '@angular/common'; 
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ShoppingComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  public cartItems?: CartItem[];
  public carts = signal<ShoppingCart[]>([]);
  public totalPrice = signal<number>(0);
  constructor(public service:CartService){

  }
  ngOnInit(): void {
    this.cartItems=this.service.getProducts();
  }

  addToCart(item: CartItem) {
    this.service.addToCart({ item: item, quantity: 1 });
    this.carts.set(this.service.getCartItems());
    this.totalPrice.set(this.cartTotal);
   //console.log(this.carts());

  }
  removeItemFromCart(item: CartItem) {
    this.service.removeItemFromCart(item.productId, 1);
    this.totalPrice.set(this.cartTotal);
    this.carts.set(this.service.getCartItems());
  }

  handleCheckedOut(items: ShoppingCart[]) {
    console.log('Checked out items:', items);
    alert("Ordered are successfully placed");
    this.service.clearCart();
    this.totalPrice.set(0);
    this.carts.set([]);
  }
  get cartTotal() {
    return this.carts().reduce((total, cart)=> total + ((cart.item?.price ?? 0) * (cart.quantity ?? 0)), 0);
    //return this.carts().reduce((total, cart) => total + (cart.item?.price ?? 0) * (cart.quantity ?? 0), 0);
  }
}
