import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from './app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  constructor (public app:AppService, private router: Router) {}

  readProducts: any[] = []
  products: any[] = []
  product: any;
  categories: any[] = []
  search:any
  detailTitle: string = ''

  fetchProducts() {
    this.app.fetch().subscribe(
      (data: any)=>{
        this.readProducts = data
        this.products = data
        this.detailTitle = ''
      },
      (error: any)=> {
        console.log(error)
      }
      
    )
  }

  addButton() {
    if (this.search === ''  || this.search == undefined) {
      this.fetchProducts();
    } else {
      const result =  this.readProducts.filter(data => data.category === this.search.toLowerCase());
      
      this.products = result;
      
      this.detailTitle = result[0]?.category;
    }
    this.search = '';
  }

  fetchCatagory() {
    this.app.getCategory().subscribe(
      (data: any)=> {
        this.categories = data 
        console.log(this.categories)
      },
      (error: any)=> {
        console.log(error)
      }
    )
  }
  
  goToHome(){
    this.router.navigate(['/'])
  }

}
