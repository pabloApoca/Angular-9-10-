import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {id:1, name: 'Sal', category: 'Cocina',description: 'De cocina', price: 20},
    {id:2, name: 'Lavandina', category: 'Baño', description: '500 ml', price: 80},
    {id:3, name: 'Polenta', category: 'Cocina', description: 'Amarilla', price: 10}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
