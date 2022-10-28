import { Component, OnInit } from '@angular/core';

interface Product {
  slNo: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-data-binding-events-handling-product-items',
  templateUrl: './data-binding-events-handling-product-items.component.html',
  styleUrls: ['./data-binding-events-handling-product-items.component.scss']
})
export class DataBindingEventsHandlingProductItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public product: Product = {
    slNo: 1,
    name: 'Noise Smart Watch',
    image: 'https://cdn.shopify.com/s/files/1/0997/6284/products/2_7ed51162-7d87-4ca2-b510-1222d099404d_480x.png?v=1655378656',
    quantity: 1,
    price: 10000,
  }

  public add(){
    this.product.quantity++;
  }

  public remove(){
    this.product.quantity-1 > 0 ? this.product.quantity-- : 1;
  }

}
