import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  slideOpts: any;
  dataImagesObj: any;
  constructor() {}

  ngOnInit() {
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    this.dataImagesObj = [
      {
        url: "/assets/images/bg.png",
      },
    ];
  }
}
