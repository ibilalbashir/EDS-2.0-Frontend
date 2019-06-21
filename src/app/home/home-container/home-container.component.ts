import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface product {
  supplierID: string;
  supplierPartID: string;
  quantityBackOrdered: string;
  quantityOnOrder: string;
  itemNextAvailabilityDate: string;
  discontinued: string;
  productName: string;
  productUrl: string;
}





@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {


  $products;
  displayedColumns: string[] = ['supplierID', 'supplierPartID', 'quantityBackOrdered', 'quantityOnOrder', 'itemNextAvailabilityDate', 'discontinued', 'productName', 'productUrl'];
  dataSource: MatTableDataSource<product>;

  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  constructor(private productService: ProductService) {


    // Assign the data to the data source for the table to render

  }

  ngOnInit() {

    this.$products = this.productService.getProducts();
    this.$products.subscribe(res => {

      this.dataSource = res;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource = new MatTableDataSource(res);

      console.log(res);
    }, err => {
      console.log(err);
    })

  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}
