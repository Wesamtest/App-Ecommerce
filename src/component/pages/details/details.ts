import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { Detais } from './service/detais';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  
private readonly activatedRoute=inject(ActivatedRoute)
private readonly detais=inject(Detais)



id:string | null =null

Details:Product={} as Product
ngOnInit(): void {
  this.getProductId()
  this.getproductDetailes()
}

getProductId():void{

  // this.activatedRoute.paramMap.subscribe({
  //   next:(urlParam)=>{
  //     // console.log(urlParam)
  //     this.id=urlParam.get('id')
  //   }
  // })

  this.id=this.activatedRoute.snapshot.paramMap.get('id')

}


getproductDetailes():void{
  this.detais.getProductDetails(this.id).subscribe({
    next:(res)=>{
      console.log(res)
      this.Details=res.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}






}
