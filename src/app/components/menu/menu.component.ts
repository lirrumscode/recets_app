import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ApiService } from "src/app/services/api/api.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController
  ) {}
  goAboutMe() {
    this.router.navigateByUrl("/about");
  }

  async goRandom() {
    try {
      this.apiService.getRandomJoke().subscribe((response) => {
        this.alertShow(response["text"]);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async goTrivia() {
    try {
      this.apiService.getRandomTriviaJoke().subscribe((response) => {
        this.alertShow(response["text"]);
      });
    } catch (err) {
      console.error(err);
    }
  }
  async alertShow(msg: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      message: `${msg}`,
      buttons: ["OK"],
    });
    await alert.present();
  }

  goVideos() {
    this.router.navigateByUrl("videos");
  }
}
