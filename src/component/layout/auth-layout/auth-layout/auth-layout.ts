import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../footer/footer/footer";

@Component({
  selector: 'app-auth-layout',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}
