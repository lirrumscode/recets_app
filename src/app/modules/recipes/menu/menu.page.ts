import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api/api.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  item: string;
  dataItems: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.item = params[`id`];
    });
    this.getMenuItems(this.item);
  }

  async getMenuItems(items: string) {
    try {
      await this.apiService.getMenuItems(items).subscribe((response) => {
        this.dataItems = response.menuItems;
      });
    } catch (err) {
      console.error(err);
    }
  }
}
