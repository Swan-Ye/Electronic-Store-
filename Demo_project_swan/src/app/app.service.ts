import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly  baseUrl = 'https://fakestoreapi.com'

  constructor(private http: HttpClient) { 

  }
  fetch() {
    return this.http.get(`${this.baseUrl}/products`)
  }
  fetchSingle(id:any) {
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }
  getCategory(){
    return this.http.get(`${this.baseUrl}/products/categories`)
  }
  getElectronic(){
    return this.http.get(`${this.baseUrl}/products/category/electronics`)
  }
  getWithCategroy(categoryName:string){
    return this.http.get(`${this.baseUrl}/products/category/${categoryName}`) 
    
  }

}
