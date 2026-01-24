import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CartServices } from './cart-services';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Cartinterface } from './model/cartinterface';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from "@angular/router";
// import { ICart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  private readonly cartServices=inject(CartServices)
  private readonly toastrService=inject(ToastrService)
  private readonly cdr = inject(ChangeDetectorRef);

  cartDetails:Cartinterface={} as Cartinterface
ngOnInit(): void {
  this.getLoggedUserData();
}

  getLoggedUserData():void{
    this.cartServices.getLoggedInUserApi().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDetails=res.data
         this.cdr.detectChanges();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  getItemTotal(item: any): number {
  return item.price * item.count;
}

  removeItem(id:string):void{
    this.cartServices.removeSpicifcCartItem(id).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDetails=res.data
        this.cartServices.countNumber.next(res.numOfCartItems)
         this.cdr.detectChanges();
        this.toastrService.success('Item removed from Cart Successfuly','fresh Cart')
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  updatacountItemdata(id:string,count:number):void{
    this.cartServices.updatespicifcCartItem(id,count).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDetails=res.data
         this.cdr.detectChanges();
        this.toastrService.success('Updateted Card succussfuly','fresh Cart')
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  

}
