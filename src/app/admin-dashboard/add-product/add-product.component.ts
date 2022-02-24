import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm : FormGroup;
  actionBtn : String = "Save";
  
  constructor(
    private formBuilder : FormBuilder,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
  this.addProductForm = this.formBuilder.group({
    inStockQuantity: ['',Validators.required],
    name : ['',Validators.required],
    price: ['',Validators.required],
    imageLink: [''],
    active: [''],
    id: [''],
  });

  if(this.editData){
    this.actionBtn = "Update";
    this.addProductForm.controls['id'].setValue(this.editData.id);
    this.addProductForm.controls['inStockQuantity'].setValue(this.editData.inStockQuantity);
    this.addProductForm.controls['imageLink'].setValue(this.editData.image_link);
    this.addProductForm.controls['name'].setValue(this.editData.name);
    this.addProductForm.controls['price'].setValue(this.editData.price);
    this.addProductForm.controls['active'].setValue(this.editData.active);
  }

}
addProduct(){
 if(!this.editData){
  if(this.addProductForm.valid){
    this._productService.postProduct(this.addProductForm.value)
    .subscribe({
      next:(res)=>{
        alert("Product added Successfully")
        this.addProductForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert("Error While adding the product")
      }
    })
  }
 }else{
   this.updateProduct();
   }
 }
 updateProduct(){
   this._productService.putProduct(this.addProductForm.value)
   .subscribe({
    next:(res)=>{
      alert("Product Updated Successfully");
      this.addProductForm.reset();
      this.dialogRef.close('update');
    },
      error:()=>{
        alert("Error While Update the product")
      }
   })
  }
}

