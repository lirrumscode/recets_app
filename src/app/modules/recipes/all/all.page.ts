import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-all",
  templateUrl: "./all.page.html",
  styleUrls: ["./all.page.scss"],
})
export class AllPage implements OnInit {
  dataAllRecipes: any;
  textSearch: any;
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.getAllRecipes();
  }

  async search($event) {
    this.textSearch = $event.detail.value;
    await this.apiService
      .getAllSearchRecipes(this.textSearch)
      .subscribe((response) => {
        this.dataAllRecipes = response.results;
        return this.dataAllRecipes;
      });
  }

  async getAllRecipes() {
    try {
      await this.apiService.getAllRecipes().subscribe((response) => {
        this.dataAllRecipes = response.results;
      });
    } catch (err) {
      console.error(err);
    }
  }

  goToDetail(items: any){
    this.router.navigate(['home/detail', items.id]);
  }
}
