import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "splash",
    pathMatch: "full",
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./views/splash/splash.module").then((m) => m.SplashPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
