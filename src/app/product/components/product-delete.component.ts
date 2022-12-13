import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html',
})
export class ProductDeleteComponent {
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router, private _ProductService: ProductService) { }
  id: any
  product!: Product;
  ngOnInit() {
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.show(id).subscribe(product => {
        this.product = product;

      });
    });
  }
  handleDelete(id: any) {
    this._ProductService.destroy(this.id).subscribe(() => {
      //chuyen huong ve list
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Xóa Tour thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this._Router.navigate(['/']);
    });
  }
}
