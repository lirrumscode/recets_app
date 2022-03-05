import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataRandomRecipes: any;
  dataAllRecipes: any;
  slideOpts:any;
  slideOptsOne:any;
  objDataMenusItems: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getRandomRecipes();
    this.getAllRecipes();
    this.setDefaultValues();
  }

  setDefaultValues(){
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
    this.objDataMenusItems = [{
      url:"assets/images/food2.png",
      slug:"curry",
      name: "Curry",
      color:"#FF5055",
      colorOne:"#FFDBDC"
    },
    {
      url:"assets/images/food3.png",
      slug:"snacks",
      name: "Snacks",
      color:"#FF9B15",
      colorOne:"#FFE2BB"
    },
    {
      url:"assets/images/food4.png",
      slug:"drinks",
      name: "Drinks",
      color:"#FF3F3F",
      colorOne:"#FFBBBB"
    },
    {
      url:"assets/images/food5.png",
      slug:"dessert",
      name: "Dessert",
      color:"#0CA300",
      colorOne:"#C0FFBB"
    },
    ]
  }

  async getRandomRecipes(){
    try{
     await this.apiService.getRandomRecipes().subscribe((response => {
        this.dataRandomRecipes = response.recipes;
        console.log(this.dataRandomRecipes);
      }));
    }catch(error){
      console.error(error);
    }
  }

  async getAllRecipes(){
    try{
     await this.apiService.getAllRecipes().subscribe((response => {
      this.dataAllRecipes = response.results;
        console.log(this.dataAllRecipes);
      }));
    }catch(error){
      console.error(error);
    }
  }
  goSeeMore(){
    this.router.navigateByUrl("/home/all");
  }

  goMenuItems(items: any){
    console.log(items)
    this.router.navigate(['home/menu', items.slug]);
  }
}

