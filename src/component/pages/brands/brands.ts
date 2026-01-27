import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
  private readonly changeDetectorRef=inject(ChangeDetectorRef)

// name: string|null|undefined;Ks

  getdatabrand(){
    this.brands.getbrandsApi().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.brandslist=res.data
        this.changeDetectorRef.detectChanges()
      }
    })
  }

  ngOnInit(): void {
      this.getdatabrand()
  }




}
