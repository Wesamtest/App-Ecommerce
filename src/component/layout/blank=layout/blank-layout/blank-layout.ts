import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../footer/footer/footer";

@Component({
  selector: 'app-blank-layout',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.css',
})
export class BlankLayout {

}
