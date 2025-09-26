import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CartComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
