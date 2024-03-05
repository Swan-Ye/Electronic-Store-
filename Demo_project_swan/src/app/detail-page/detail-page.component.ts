import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  products : any [] =[]
  constructor(private route: ActivatedRoute, private appService: AppService) {}
  ngOnInit(): void {
    // Retrieve the ID from the route parameters
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('Product ID:', id);
      // Use the ID as needed in your detail page
      this.fetchProducts()
    });
  } 
  fetchProducts() {
    this.appService.fetch().subscribe(
      (data: any)=>{
        this.products = data
      },
      (error: any)=> {
        console.log(error)
      }
      
    )
  }
}
