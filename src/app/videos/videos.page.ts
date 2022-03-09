import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api/api.service";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.page.html",
  styleUrls: ["./videos.page.scss"],
})
export class VideosPage implements OnInit {
  textSearch: any;
  dataAllVideos: any;
  msg: string;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.setDefaultValues();
  }
  setDefaultValues() {
    this.msg = "Please search a video with a name of food!";
  }
  async getVideosSearch($event) {
    this.textSearch = $event.detail.value;
    await this.apiService
      .getVideosSearch(this.textSearch)
      .subscribe((response) => {
        this.msg = "";
        this.dataAllVideos = response.videos;
        return this.dataAllVideos;
      });
  }
}
