import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDetailRecipes(id: number): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}recipes/${id}/information?apiKey=${environment.apiKey}`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getMenuItems(item: string): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}/food/menuItems/search?apiKey=${environment.apiKey}&query=${item}&number=5`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getRandomRecipes(): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}recipes/random?apiKey=${environment.apiKey}&number=5`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getSimilarRecipes(id: number) {
    try {
      return this.http
        .get(
          `${environment.url}recipes/${id}/similar?apiKey=${environment.apiKey}&number=5`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getCardRecipes(id: number) {
    try {
      return this.http
        .get(
          `${environment.url}recipes/${id}/card?apiKey=${environment.apiKey}`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }
  getAllRecipes(): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}recipes/complexSearch?apiKey=${environment.apiKey}&number=100`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getAllSearchRecipes(data: any): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}recipes/complexSearch?query=${data}&apiKey=${environment.apiKey}&number=100`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getAllsRecipes() {
    try {
      return this.http
        .get(
          `${environment.url}recipes/complexSearch?apiKey=${environment.apiKey}&number=100`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getRandomJoke() {
    try {
      return this.http
        .get(
          `${environment.url}food/jokes/random?apiKey=${environment.apiKey}`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getRandomTriviaJoke() {
    try {
      return this.http
        .get(
          `${environment.url}food/trivia/random?apiKey=${environment.apiKey}`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }

  getVideosSearch(data: any): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}food/videos/search?query=${data}&apiKey=${environment.apiKey}&number=10`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }
}
