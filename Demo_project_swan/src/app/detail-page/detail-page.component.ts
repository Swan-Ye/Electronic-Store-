import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private appService: AppService
    ) { }
  ngOnInit(): void {
    // Retrieve the ID from the route parameters
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.sid = id;
      // Use the ID as needed in your detail page
      this.fetchSingleProducts()

    });
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

  
}

