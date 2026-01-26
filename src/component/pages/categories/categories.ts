import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
   private readonly changeDetectorRef=inject(ChangeDetectorRef)

  CategoriesList:Categories[]=[]
image: any;
private _id: any;
category: any;
name: any;
id: any;

ngOnInit(): void {
  this.getAllCtegoryData()
}

   getAllCtegoryData(){

    this.categoriy.getAllCategory().subscribe({
      next:(res)=>{
        console.log(res)
        this.CategoriesList=res.data
        this.changeDetectorRef.detectChanges()
      },
      error:(err)=>{
        console.log(err)
      }
    })
   }
}
