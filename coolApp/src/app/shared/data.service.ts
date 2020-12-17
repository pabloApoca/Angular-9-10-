import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: "Yellow egg",
      price: 5,
    },
    {
      id: 2,
      name: 'Coca cola',
      category: 'Drink',
      description: "Black bot",
      price: 15,
    }
  ];

  getAllProducts(){
    return this.products;
  }

  getProductsById(id){
    return this.products.filter((product) => product.id === id);
  }
}
