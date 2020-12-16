import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

public users =[
  {name: 'Pablo', city:'Argentina'},
  {name: 'Martin', city: ''},
  {name: 'Lopez', city:'Uraguey'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
