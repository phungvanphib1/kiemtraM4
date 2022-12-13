import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html',
})
export class ProductsComponent {
  idx: any
  total: any
  products!: Product[];
  constructor(private productService: ProductService, private _Router: Router) {
  }
  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.total = this.products.length
    });
  }
}




