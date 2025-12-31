import { Component, inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Categoriy } from '../../../service/categoris/categoriy';
import { Categories } from '../../../models/categories';

@Component({
  selector: 'app-popular-catecory',
  imports: [CarouselModule],
  templateUrl: './popular-catecory.html',
  styleUrl: './popular-catecory.css',
})
export class PopularCatecory implements OnInit {



 private readonly categoriy=inject(Categoriy)
categorylist:Categories[]=[]

ngOnInit(): void {
  
  this.getallCategorisedate()
}

   getallCategorisedate(){
    this.categoriy.getAllCategory().subscribe({
      next:(res)=>{
        console.log(res)
        this.categorylist=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
  }











  customOptions: OwlOptions = {
   loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText: ['<', '>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: false
  }

}
