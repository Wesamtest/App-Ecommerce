import { Component, inject } from '@angular/core';
import { brands } from '../../core/service/brands';
import { Brandss } from '../../core/models/brands';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {

  brandslist:Brandss[]=[]

  private readonly brands=inject(brands)
name: string|null|undefined;

  getdatabrand(){
    this.brands.getbrandsApi().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.brandslist=res.data
      }
    })
  }

  ngOnInit(): void {
      this.getdatabrand()
  }




}
