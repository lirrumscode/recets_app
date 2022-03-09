import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { UtilsModule } from 'src/app/modules/utils/utils.module';
import { PipeModule } from 'src/app/modules/recipes/pipe/pipe.module';
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    UtilsModule,
    PipeModule,
    ModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
