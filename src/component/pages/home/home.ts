import { Component, inject, OnInit } from '@angular/core';
import { Product } from './../../core/models/product';
import { AllProduct } from '../../core/service/product/all-product';
// import { Card } from "../../core/shared/component/card/card";

import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Categoriy } from '../../core/service/categoris/categoriy';
import { Categories } from '../../core/models/categories';
import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';
import { Card } from "../../core/shared/component/card/card";
import { PopularCatecory } from "../../core/shared/component/popular-catecory/popular-catecory";

@Component({
  selector: 'app-home',
  
  imports: [CarouselModule, Card, PopularCatecory],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
 
  private readonly allProduct=inject(AllProduct)
  private readonly router=inject(Router)


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

 

  //  customOptions: OwlOptions = {
  //  loop: true,
  // mouseDrag: true,
  // touchDrag: true,
  // pullDrag: false,
  // dots: true,
  // navSpeed: 700,
  // autoplay:true,
  // autoplayTimeout:3000,
  // autoplayHoverPause:true,
  // navText: ['<', '>'],
  // responsive: {
  //   0: {
  //     items: 1
  //   },
  //   400: {
  //     items: 2
  //   },
  //   740: {
  //     items: 4
  //   },
  //   940: {
  //     items: 6
  //   }
  // },
  // nav: false
  // }


  mainOptions: OwlOptions = {
   loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  navText: ['', ''],
  items:1,
  nav: false
  }



  // gotToDetails():void{
  //   this.router.navigate(['/details'])
  // }


}
