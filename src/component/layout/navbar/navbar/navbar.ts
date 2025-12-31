import { Component, AfterViewInit, input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../core/service/auth/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class Navbar  {

  readonly islogin = input<boolean>(true);
  
  // متغير للتحكم في إظهار وإخفاء القائمة
  isMenuHidden = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  private readonly auth=inject(Auth)

  logOut(){
    this.auth.logOut()
  }

  // readonly authService=inject(AuthService)
  // private readonly cartService=inject(CartService)
  // ngOnInit(): void {
  //     this.cartService.cartnumber.subscribe({
  //       next:(value)=>{
  //         this.countnumer=value
  //       }
  //     })
  // }
}
