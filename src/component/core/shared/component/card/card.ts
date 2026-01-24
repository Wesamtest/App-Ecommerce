import { Component, inject, Input, input } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnSalePipe } from '../../../../shared/pipes/on-sale-pipe';
import { CartServices } from '../../../../pages/cart/cart-services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink,OnSalePipe],
templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input ({required: true}) product:Product ={ } as Product
  private readonly cartServices=inject(CartServices)
  private readonly toastrService=inject(ToastrService)

  addproductItemTOCart(id:string):void{

    this.cartServices.getcartApi(id).subscribe({
      next:(res)=>{

        console.log(res)
        //behavior subject
        this.cartServices.countNumber.next(res.numOfCartItems)

        if(res.status==='success'){
          this.toastrService.success(res.message,'Fresh Cart')
        }
      },
      error:(err)=>{
        console.log(err)
         if(err.status==='fail'){
          this.toastrService.success(err.message,'Fresh Cart')
        }
      }
    })
  }

}
