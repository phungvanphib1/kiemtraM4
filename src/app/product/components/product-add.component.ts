import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-add',
  templateUrl: './../templates/product-add.component.html',
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  products!: Product[];
  toastr: any;

  constructor(private productService: ProductService, private _Router: Router) { }
  ngOnInit(): void {
    // this.products = this.productService.getAll()
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
    this.productForm = new FormGroup({
      // 'id': new FormControl('', [Validators.required,]),
      'name': new FormControl('',
        [Validators.required,
        ]),
      'price': new FormControl('',
        [Validators.required,
        Validators.pattern('[0-9]*')]),
      'description': new FormControl('',
       [Validators.required])
    });
  }
  Save() {
    let data = this.productForm.value;
    let product: Product = {
      name: data.name,
      price: data.price,
      description: data.description
    }
    console.log(data);
    if (this.productForm.invalid) {
      console.log('invalid data');
      console.log(this.productForm.errors)
      Swal.fire(
        'Lỗi!',
        'Gặp một vấn đề không mong muốn!',
        'error'
      )
      return;
    }else{
      this.productService.save(product).subscribe(() => {
        this._Router.navigate(['/']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thêm Tour thành công',
          showConfirmButton: false,
          timer: 1500
        })
      });

    }
  }
}
