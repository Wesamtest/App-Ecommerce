import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServices } from '../cart/cart-services';
import { error } from 'console';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit{
  private readonly activatedRoute=inject(ActivatedRoute)
  private readonly changeDetectorRef=inject(ChangeDetectorRef)
  private readonly cartServices=inject(CartServices)
  private readonly router=inject(Router)


  checkOutForm !:FormGroup
  id:string | null =null

  ngOnInit(): void {
    this.initForm()
    this.getCartId()
   
  }

  getCartId():void{
     this.id=this.activatedRoute.snapshot.paramMap.get('id')
      
  }
  initForm():void{
    this.checkOutForm=new FormGroup(
      {
        shippingAddress: new FormGroup({
          details:new FormControl('',[Validators.required]),
          city:new FormControl('',[Validators.required]),
          phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
        })
      }

    )
  }
submitForm():void{
  if(this.checkOutForm.valid){
    console.log(this.checkOutForm.value)
    console.log(this.id)
  }
}
paymentByVisa():void{
   if(this.checkOutForm.valid){
    console.log('payment Visa'+this.checkOutForm.value)
    this.cartServices.Checkoutsession(this.id,this.checkOutForm.value).subscribe({
      next:(res)=>{
        if(res.status==='success'){

          window.open(res.session.url,'_self')

        }
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
PaymentByCash():void{
    if(this.checkOutForm.valid){
    console.log('payment cash'+this.checkOutForm.value)
    this.cartServices.createCashOrder(this.id,this.checkOutForm.value).subscribe({
      next:(res)=>{
        if(res.status==='success'){
          this.router.navigate(['/allorders', res.data._id]);
        }
      },
      error:(error)=>{
        console.log(error)
      }
    })
  
  
  }

}
}
