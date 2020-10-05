import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SerService {
  

  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getdata_id(id){
    console.log(id);
    
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId="+id)
  }
}
