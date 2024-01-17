import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input () productListComp: ProductListComponent = undefined;
  
  product: Product;
  
  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
