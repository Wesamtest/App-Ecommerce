import { Component, inject, OnInit } from '@angular/core';
import { AllProduct } from '../../core/service/product/all-product';
import { Card } from "../../core/shared/component/card/card";
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnInit{

   private readonly allProduct=inject(AllProduct)
 


// Slide: any;
  ngOnInit(): void {
    this.getAllProductData()
    // this.getallCategorisedate()
  }

  products:Product[]=[]
  // categorylist:Categories[]=[]

  getAllProductData():void{
    this.allProduct.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.products=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

 

}