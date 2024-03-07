import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  products: any[] = []
  sid: any
  result: any
  search:any
  data: any[] = []
  readProducts: any[] = []
  detailTitle: string = ''
  AppService: any
  categories: any[] = []

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private spinner: NgxSpinnerService,
    private router: Router,
    public app: AppService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.sid = id;
      this.fetchSingleProducts()

    });
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

  fetchSingleProducts() {
    this.appService.fetchSingle(this.sid).subscribe(
      (data: any) => {
        this.products = data
        this.result = this.products
      },
      (error: any) => {
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

  openSpinner() {
    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    },500)
    console.log('abcd')
  }
  
}

