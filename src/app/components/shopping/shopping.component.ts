import { Component, Input, signal, output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShoppingCart } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping',
  imports: [CommonModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  @Input() carts = signal<ShoppingCart[]>([]);
  @Input() cartTotal = signal<number>(0);
  showDetails: boolean = false;
  buyItems = output<ShoppingCart[]>();
  constructor(private service: CartService) {

  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  checkedOut(items: any) {
    let checkedOutItems = items();
    this.buyItems.emit(checkedOutItems);
  }
}
