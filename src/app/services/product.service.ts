import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import {ListResponseModel} from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }
}
