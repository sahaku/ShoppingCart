import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang19Demo';
  // Console.log("App Component");
  constructor() {
    //console.log("App Component");
  }
}
