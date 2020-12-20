import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public users = [
    {name: 'Pablo', city: "Buenos Aires"},
    {name: 'Martin' , city: ""},
    {name: 'Lopez' , city: "Buenos modales"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
