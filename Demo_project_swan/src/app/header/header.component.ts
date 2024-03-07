import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'; 
import {  NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


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
  detailDatas: any[] = []
  AppService: any;
  sProduct : any [] = []
  
  constructor(
    public app: AppService,
    private spinner: NgxSpinnerService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCatagory()
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

  goToHome(){
    this.router.navigate(['/home'])
  }

  onLogout(){
    this.router.navigate(['/'])
  }

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

  fetchCatagory() {
    this.app.getCategory().subscribe(
      (data: any)=> {
        this.categories = data 
      },
      (error: any)=> {
        console.log(error)
      }
    )
  }



  fetchWithCategory(categroyName: string){
      this.app.getWithCategroy(categroyName).subscribe(
        (data:any) => {
          this.products = data
          this.detailTitle = data[0]?.category;
          
        }
      )
  }

openSpinner() {
  this.spinner.show()
  setTimeout(()=>{
    this.spinner.hide()
  },500)
}

eachProduct(id: any){
  this.openSpinner() 
  this.router.navigate(['/detailPage', id])
}

}


