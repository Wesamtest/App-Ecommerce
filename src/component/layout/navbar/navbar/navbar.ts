import { Component, AfterViewInit, input, inject, OnInit, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../core/service/auth/auth';
import { CartServices } from '../../../pages/cart/cart-services';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class Navbar implements OnInit {

  readonly islogin = input<boolean>(true);
  
  // متغير للتحكم في إظهار وإخفاء القائمة
  isMenuHidden = true;
  count!:number

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  private readonly auth=inject(Auth)
  private readonly cartServices=inject(CartServices)
  private readonly id=inject(PLATFORM_ID)
  private readonly changeDetectorRef=inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.cartCountNumber();
    if(isPlatformBrowser(this.id)){
      this.getAllDataCart();
    }
  }
  cartCountNumber():void{
    this.cartServices.countNumber.subscribe({
      next:(value)=>{
        this.count=value;
        this.changeDetectorRef.detectChanges()
      }
    })
  }

  getAllDataCart():void{
    this.cartServices.getLoggedInUserApi().subscribe({
      next:(res)=>{
        this.cartServices.countNumber.next(res.numOfCartItems)
        this.changeDetectorRef.detectChanges()
        
      }
    })
  }


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
