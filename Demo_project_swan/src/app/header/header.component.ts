import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readProducts: any[] = []
  products: any[] = []
  product: any;
  categories: any[] = []
  search:any
  input?:String
  detailTitle: string = ''

  constructor(public app: AppService){
  }

  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCatagory()
  }


  fetchProducts() {
    this.app.fetch().subscribe(
      (data: any)=>{
        this.readProducts = data
        this.products = data
        this.detailTitle = ''
        console.log( this.products, ' kkkkkkkk products')
      },
      (error: any)=> {
        console.log(error)
      }
      
    )
  }

  fetchCatagory() {
    this.app.getCategory().subscribe(
      (data: any)=> {
        this.categories = data 
        console.log(this.categories, 'llllllll')
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

  fetchWithCategory(categroyName: string){
      this.app.getWithCategroy(categroyName).subscribe(
        (data:any) => {
          this.products = data
          this.detailTitle = data[0]?.category;
        }
      )
  }

}
