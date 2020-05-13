import { Component, OnInit } from '@angular/core';
import { Item } from '../interface/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  displayedColumns: Item[] = [

  ]

  dataSource = [
    {
      product: 'Yeezy 350 v2',
      price: 220.00,
      quantity: 150000,
      edit: false
    },
    {
      product: 'Yeezy 380',
      price: 220.00,
      quantity: 200000,
      edit: false
    },
    {
      product: 'Yeezy 500',
      price: 200.00,
      quantity: 300000,
      edit: false
    },
    {
      product: 'Yeezy 700 v2',
      price: 300.00,
      quantity: 250000,
      edit: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
