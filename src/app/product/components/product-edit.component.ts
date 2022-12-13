import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup;
  id: any;
  product!: Product;
  idx:any
  constructor(private _ActivatedRoute: ActivatedRoute, private productService: ProductService, private _Router: Router) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id
      this.idx = this.id
      this.productService.show(this.id).subscribe(products => {
        this.product = products;
        this.productForm = new FormGroup({
          id: new FormControl(this.idx,),
          name: new FormControl(this.product.name, [
            Validators.required,
          ]),
          price: new FormControl(this.product.price, [
            Validators.required,
            Validators.pattern('[0-9]*')
          ]),
          description: new FormControl(this.product.description, [
            Validators.required,
          ])
        });
      });
    });
  }


  Update() {
    let productData: Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description
    }
    if (this.productForm.invalid) {
      console.log('invalid data');
      console.log(this.productForm.errors)
      Swal.fire(
        'Lỗi!',
        'Gặp một vấn đề không mong muốn!',
        'error'
      )
      return;
    } else {
      console.log(productData);
      this.productService.update(this.id, productData).subscribe(() => {
        this._Router.navigate(['/']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thêm Tour thành công!',
          showConfirmButton: false,
          timer: 1500
        })
      });
    }
  }
}
