import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {id:1, name: 'Sal', category: 'Cocina',description: 'De cocina', price: 20},
    {id:2, name: 'Lavandina', category: 'Baño', description: '500 ml', price: 80},
    {id:3, name: 'Polenta', category: 'Cocina', description: 'Amarilla', price: 10}
  ];

  getAllProducts(){
    return this.products;
  }

  getPorductById(id){
    return this.products.filter((product) => product.id == id);
  }
}
