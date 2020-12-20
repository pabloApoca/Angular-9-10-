import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log("ProductId: ", productId);
  }

}
