import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product.model';
import { Category } from '../core/models/category.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  product: Product = {} as Product;

  categories: Category[];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((response:Category[]) => {
      this.categories = response;
    }, error => {
      console.error('Error!', error);
    });
  }

  onSubmit(): void {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(response => {
      console.log('Success', response);
    }, error => {
      console.error('Error!', error);
    });
  }
}