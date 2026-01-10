import { ChangeDetectorRef, Component, inject, NgModule, OnInit } from '@angular/core';
import { AllProduct } from '../../core/service/product/all-product';
import { Card } from "../../core/shared/component/card/card";
import { Product } from '../../core/models/product';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { OnSalePipe } from '../../shared/pipes/on-sale-pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../shared/pipes/search-pipe';

@Component({
  selector: 'app-product',
  imports: [NgxPaginationModule, Card,SearchPipe,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  private readonly allProduct = inject(AllProduct)
  private readonly changeDetectorRef=inject(ChangeDetectorRef)

  text:string=""
  products: Product[] = []
  pageSize: number = 0;
  p: number = 1;
  total: number = 0;

  // Slide: any;
  ngOnInit(): void {
    console.log('Products Component Initialized');
    this.getAllProductData()
    // this.getallCategorisedate()
  }


  // categorylist:Categories[]=[]

  
  getAllProductData(pageNumber: number = 1): void {
    console.log('Fetching product data for page:', pageNumber);
    this.allProduct.getAllProducts(pageNumber).subscribe({
      next: (res) => {
        console.log('Product API Success:', res);
        console.log('Data:', res.data);
        this.products = res.data
      this.changeDetectorRef.detectChanges()

        this.pageSize = res.metadata.limit
        this.p = res.metadata.currentPage
        this.total = res.results

      },
      error: (err) => {
        console.error('Product API Error:', err);
      }
    })

  }



}