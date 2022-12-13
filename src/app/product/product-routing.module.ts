import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducShowComponent } from './components/produc-show.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductsComponent } from './components/products.component';



const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'add', component: ProductAddComponent},
    { path: ':id/edit', component: ProductEditComponent },
    { path: 'delete/:id', component: ProductDeleteComponent },
    { path: ':id', component: ProducShowComponent},
    { path: '**', component: ProductsComponent},

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
