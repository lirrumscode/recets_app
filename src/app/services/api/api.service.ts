import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDetailRecipes(id: number):Observable<any>{
    try{
      return this.http.get(`${environment.url}recipes/${id}/information?apiKey=7c7e10c4ea1549d48eab588823e70196`).pipe(map(request => {
        return request;
      }));
    }catch(error){
      console.error(error);
    }
  }

  getMenuItems(item: string):Observable<any>{
    try{
      return this.http.get(`${environment.url}/food/menuItems/search?apiKey=7c7e10c4ea1549d48eab588823e70196&query=${item}&number=5`).pipe(map(request => {
        return request;
      }));
    }catch(error){
      console.error(error);
    }
  }  

  getRandomRecipes():Observable<any>{
    try{
      return this.http.get(`${environment.url}recipes/random?apiKey=7c7e10c4ea1549d48eab588823e70196&number=5`).pipe(map(request => {
        return request;
      }));
    }catch(error){
      console.error(error);
    }
  }

  getAllRecipes():Observable<any>{
    try{
      return this.http.get(`${environment.url}recipes/complexSearch?apiKey=7c7e10c4ea1549d48eab588823e70196&number=10`).pipe(map(request => {
        return request;
      }));
    }catch(error){
      console.error(error);
    }
  }

  getAllsRecipes(){
    try{
      return this.http.get(`${environment.url}recipes/complexSearch?apiKey=7c7e10c4ea1549d48eab588823e70196&number=50`).pipe(map(request => {
        return request;
      }));
    }catch(error){
      console.error(error);
    }
  }



}
