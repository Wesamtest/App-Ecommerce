import { afterNextRender, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App-Ecommerce');
 constructor() {
    // هذا الكود سيعمل فقط في المتصفح بعد أول عملية ريندر
    afterNextRender(() => {
      initFlowbite();
    });
  }
}
