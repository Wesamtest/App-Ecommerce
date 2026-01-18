import { afterNextRender, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {  NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerComponent],
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
