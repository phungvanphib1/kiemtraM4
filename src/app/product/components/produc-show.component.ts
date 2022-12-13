import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produc-show',
  templateUrl: './../templates/produc-show.component.html',
})
export class ProducShowComponent implements OnInit {
  id: any;
  product!: Product;

  constructor( private _ActivatedRoute: ActivatedRoute, private _ProductService: ProductService ) { }

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
}

