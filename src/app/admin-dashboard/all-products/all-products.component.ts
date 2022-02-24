import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../service/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  
  //activeProduct:boolean=true;
 
  displayedColumns: string[] = ['name', 'price', 'inStockQuantity','status','changeStatus','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private _productService: ProductService,
    private dialog : MatDialog
    ) { }
    
    
    
    ngOnInit(): void {
      this.getAllProducts();
    }
      
      openDialog() {
        this.dialog.open(AddProductComponent, {
          width:'30%'
        }).afterClosed().subscribe(val=>{
          if(val==='save'){
            this.getAllProducts();
          }
        })
      }
      
  getAllProducts(){
    this._productService.getAllProducts()
    .subscribe({
      next:(res)=>{
        console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      },
        error:()=>{
          alert("Error While fetching  records")
        }
     })
  }
  
  editProduct(row :any){
    this.dialog.open(AddProductComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllProducts()
      }
    })
  }
  deleteProduct(id : number){
    this._productService.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully");
        this.getAllProducts()
      },
        error:()=>{
          alert("Error While Deleting the product")
        }
     })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  toggleProductActiveStatus(row:any) {
   // this.activeProduct = !this.activeProduct;
   this._productService.toggleProductActiveStatus(row.id,row.active)
    .subscribe({
      next:(res)=>{
        console.log(res);
        if(row.active==true){
          row.active=false;
          
        }else{
          row.active=true;
        }
      },
        error:()=>{
          alert("Error While Changing  Status")
        }
     })
    }
}
