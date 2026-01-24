import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CartServices } from '../cart/cart-services';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef)
  private readonly cartServices=inject(CartServices)

  checkOutForm !: FormGroup
  id!:string
  

  ngOnInit(): void {
    this.initForm()
    this.getCartId()
  }

  initForm(): void {
    this.checkOutForm = new FormGroup(
      {
        shippingAddress: new FormGroup({
          details: new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required]),
          phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
        })
      }

    )
  }
  getCartId() {
  this.cartServices.getLoggedInUserApi().subscribe({
    next: (res) => {
      this.id = res.data._id;   
      console.log('Cart ID:', this.id);
    }
  });
}

  paymentByVisa(){
    console.log('Payment By Visa');
        if(this.checkOutForm.valid){
          console.log('payment Visa'+this.checkOutForm.value)
          this.cartServices.Checkoutsession(this.id,this.checkOutForm.value).subscribe({
            next:(res)=>{
              if(res.status==='success'){

                window.open(res.session.url,'_self')

              }
            }
          })
        }
  }

  PaymentByCash() {
    console.log('Payment By Cash');
    // logic here
  }

}
