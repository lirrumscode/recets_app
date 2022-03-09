import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "./modal/modal.page";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  dataRandomRecipes: any;
  dataAllRecipes: any;
  slideOpts: any;
  slideOptsOne: any;
  objDataMenusItems: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getRandomRecipes();
    this.getAllRecipes();
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
      autoplay: true,
      zoom: false,
    };
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 1000,
      autoplay: false,
      zoom: false,
    };
    this.objDataMenusItems = [
      {
        url: "assets/images/food2.png",
        slug: "curry",
        name: "Curry",
        color: "#FF5055",
        colorOne: "#FFDBDC",
      },
      {
        url: "assets/images/food3.png",
        slug: "snacks",
        name: "Snacks",
        color: "#FF9B15",
        colorOne: "#FFE2BB",
      },
      {
        url: "assets/images/food4.png",
        slug: "drinks",
        name: "Drinks",
        color: "#FF3F3F",
        colorOne: "#FFBBBB",
      },
      {
        url: "assets/images/food5.png",
        slug: "dessert",
        name: "Dessert",
        color: "#0CA300",
        colorOne: "#C0FFBB",
      },
    ];
  }

  async getRandomRecipes() {
    try {
      await this.apiService.getRandomRecipes().subscribe((response) => {
        this.dataRandomRecipes = response.recipes;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getAllRecipes() {
    try {
      await this.apiService.getAllRecipes().subscribe((response) => {
        this.dataAllRecipes = response.results;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async goModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      cssClass: "my-custom-class",
      componentProps: {
        id: id,
      },
    });
    return await modal.present();
  }
  goSeeMore() {
    this.router.navigateByUrl("/home/all");
  }

  goToDetail(items) {
    this.router.navigate(["home/detail", items.id]);
  }

  goMenuItems(items: any) {
    this.router.navigate(["home/menu", items.slug]);
  }
}
