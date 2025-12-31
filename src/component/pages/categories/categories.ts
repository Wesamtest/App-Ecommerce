import { Component, inject, OnInit } from '@angular/core';
import { Categoriy } from '../../core/service/categoris/categoriy';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categories',
  imports: [CarouselModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

   private readonly categoriy=inject(Categoriy)

  CategoriesList:Categories[]=[]

ngOnInit(): void {
  this.getAllCtegoryData()
}

   getAllCtegoryData(){

    this.categoriy.getAllCategory().subscribe({
      next:(res)=>{
        console.log(res)
        this.CategoriesList=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
   }
}
