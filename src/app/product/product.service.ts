import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []
  // url = 'http://localhost:4200';
  // constructor(private _HttpClient:HttpClient) { }
  api_url:string = '';
  paramMap: any;
  constructor( private _HttpClient:HttpClient) {
    this.api_url = environment.api_url
   }
  getAll():Observable<Product[]>{
    return this._HttpClient.get<Product[]>(this.api_url)
  }

  show(id:any):Observable<Product>{
    // return this.products[id];
    return this._HttpClient.get<Product>(this.api_url+'/'+id);
  }
  save(product:Product){
    return this._HttpClient.post<Product>(this.api_url , product);
  }
  update(id:any,product:Product){
    return this._HttpClient.put<Product>(this.api_url + '/' + id, product);
  }

  destroy(id:any){
    // this.products.splice(id,1);
    return this._HttpClient.delete<Product>(this.api_url + '/' + id);
  }
}
