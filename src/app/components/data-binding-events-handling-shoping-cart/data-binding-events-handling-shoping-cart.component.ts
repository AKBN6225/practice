import { Component, OnInit } from '@angular/core';

interface Product {
  slNo: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-data-binding-events-handling-shoping-cart',
  templateUrl: './data-binding-events-handling-shoping-cart.component.html',
  styleUrls: ['./data-binding-events-handling-shoping-cart.component.scss']
})
export class DataBindingEventsHandlingShopingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public products: Product[] = [
    {
      slNo: 1,
      name: 'Apple',
      price: 100,
      quantity: 1,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735'
    },
    {
      slNo: 2,
      name: 'Blackberry',
      price: 200,
      quantity: 4,
      image: 'https://5.imimg.com/data5/YG/KR/MY-4390697/fossil-explorist-analog-digital-black-dial-men-27s-watch-500x500.jpg'
    },
    {
      slNo: 3,
      name: 'Honor',
      price: 500,
      quantity: 3,
      image: 'https://fossil.scene7.com/is/image/FossilPartners/JR1506_main?$sfcc_fos_large$'
    },
    {
      slNo: 4,
      name: 'Samsung',
      price: 700,
      quantity: 2,
      image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FReviews%2F2020-Mahindra-Thar-front-static.jpg&c=0'
    }
  ]

  public addQuantity(id: number) {
    
    this.products.forEach((y) => {
      if (y.slNo === id) {
        y.quantity++;
      }
    });
  }

  public removeQuantity(id: number) {
    this.products.forEach((y) => {
      if (y.slNo === id) {
        y.quantity-1 > 0 ? y.quantity-- : 1;
      }
    });
  }

}
