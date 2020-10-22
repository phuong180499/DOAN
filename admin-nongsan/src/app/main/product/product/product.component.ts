import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {
  public pageSize = 3;
  public page = 1;
  public products: any;
  public totalRecords:any;
  public formsearch: any;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'hoten': [''],
      'taikhoan': [''],     
    });
    this.search();
  }
  loadPage(page) { 
    this._api.post('/api/item/search',{page: page, pageSize: this.pageSize, }).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }
  search() { 
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/item/search',{page: this.page, pageSize: this.pageSize, item_group_id: "1b2f3b32-d006-4ed8-ab0c-099fd86aa6dd" }).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

}