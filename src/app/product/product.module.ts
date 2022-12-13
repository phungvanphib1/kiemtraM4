import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductsComponent } from './components/products.component';
import { ProducShowComponent } from './components/produc-show.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
       ProductsComponent,
       ProductAddComponent,
       ProductEditComponent,
       ProductDeleteComponent,
       ProducShowComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductModule { }
